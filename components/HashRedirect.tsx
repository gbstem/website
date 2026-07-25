'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Returns true if `path` is a same-origin, root-relative path safe to hand to
 * the client router. Rejects scheme-relative paths (e.g. "//evil.example"),
 * backslash variants browsers may normalize into scheme-relative paths (e.g.
 * "/\evil.example"), and any string embedding a URL scheme (e.g.
 * "/foo://evil.example"), all of which could otherwise redirect the browser
 * off-site.
 */
function isSafeInternalPath(path: string): boolean {
  if (!path.startsWith('/')) return false;
  if (path.startsWith('//') || path.startsWith('/\\')) return false;
  if (path.includes('://')) return false;
  return true;
}

/**
 * Redirects any hashed URLs to the correct page.
 * This is needed because our website was previously hosted on hash-based routing
 * and we don't want to break any links that point to the old URLs.
 */
export default function HashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      const newPath = hash.substring(1);
      if (isSafeInternalPath(newPath)) {
        router.replace(newPath);
      }
    }
  }, [router]);

  return null;
}
