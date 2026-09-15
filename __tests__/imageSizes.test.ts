/**
 * @jest-environment node
 */
import fs from 'fs';
import path from 'path';

// sharp is an optional peer dependency of next (used for image optimization).
// It happens to be installed here, so we use it to catch oversized headshot
// resolutions too, but we degrade gracefully to a size-only check if it's
// ever unavailable rather than failing the whole suite. Typed `any`: sharp's
// published types resolve to a non-callable module namespace under some
// TS/moduleResolution combinations (seen on Vercel's build), even though the
// runtime export is callable, so a precise type here is more trouble than
// it's worth for an optionally-loaded test dependency.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let sharp: any;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  sharp = require('sharp');
} catch {
  sharp = null;
}

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const HEADSHOTS_DIR = path.join(PUBLIC_DIR, 'images', 'headshots');

const RASTER_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif']);
const IMAGE_EXTENSIONS = new Set([...RASTER_EXTENSIONS, '.svg']);

// Headshots render at 180x180 in the UI. We ship them at 3x (540x540) for
// high-resolution/retina displays plus some headroom, so anything much
// bigger than that is wasted bytes on every page load. These caps leave
// headroom over the largest headshot currently in the folder (540x523,
// ~394KB) while still catching the megabyte+ camera-resolution files that
// have been committed by mistake in the past.
const HEADSHOT_MAX_DIMENSION_PX = 600;
const HEADSHOT_MAX_FILE_SIZE_KB = 500;

// Everything else under public/ (banners, screenshots, logos, etc.) is used
// at wildly different sizes depending on context, so we can't cap
// resolution meaningfully — just guard against an accidentally huge file.
// The largest non-headshot image today is ~620KB, so this leaves headroom
// without being anywhere near the old megabyte+ mistakes.
const OTHER_MAX_FILE_SIZE_KB = 800;

function walk(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function isImage(filePath: string): boolean {
  return IMAGE_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

describe('public/ image sizes', () => {
  const allFiles = fs.existsSync(PUBLIC_DIR) ? walk(PUBLIC_DIR) : [];
  const imageFiles = allFiles.filter(isImage);

  it('finds images under public/ to check', () => {
    // Canary: if this starts failing, the walk/glob above is broken (e.g.
    // public/images got renamed) rather than the repo having zero images.
    expect(imageFiles.length).toBeGreaterThan(0);
  });

  it('keeps every image under public/ within its size/resolution cap', async () => {
    const violations: string[] = [];

    for (const filePath of imageFiles) {
      const relativePath = path.relative(PUBLIC_DIR, filePath);
      const isHeadshot = (filePath + path.sep).startsWith(HEADSHOTS_DIR + path.sep);
      const sizeKB = fs.statSync(filePath).size / 1024;
      const maxSizeKB = isHeadshot ? HEADSHOT_MAX_FILE_SIZE_KB : OTHER_MAX_FILE_SIZE_KB;

      if (sizeKB > maxSizeKB) {
        violations.push(
          `${relativePath}: ${sizeKB.toFixed(0)}KB exceeds the ${maxSizeKB}KB cap for ` +
            `${isHeadshot ? 'headshots' : 'public/ images'}. Please downsample/compress it before committing.` +
            (isHeadshot
              ? ' Headshots render at 180x180 in the UI (shipped at 3x = 540x540 for retina displays) ' +
                'so there is no need for anything larger or heavier than that.'
              : '')
        );
      }

      if (isHeadshot && sharp && RASTER_EXTENSIONS.has(path.extname(filePath).toLowerCase())) {
        const { width, height } = await sharp(filePath).metadata();
        if (
          (width && width > HEADSHOT_MAX_DIMENSION_PX) ||
          (height && height > HEADSHOT_MAX_DIMENSION_PX)
        ) {
          violations.push(
            `${relativePath}: ${width}x${height} exceeds ${HEADSHOT_MAX_DIMENSION_PX}x${HEADSHOT_MAX_DIMENSION_PX}. ` +
              'Headshots only render at 180x180 in the UI; resize to about 540x540 (3x, for retina displays ' +
              'plus headroom) instead of shipping full camera resolution.'
          );
        }
      }
    }

    expect(violations).toEqual([]);
  });
});
