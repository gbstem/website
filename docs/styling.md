# Styling

Every style is a Tailwind class. Bootstrap is gone, and `tailwindcss/no-custom-classname` fails lint on any class Tailwind doesn't know, so a Bootstrap class (`d-flex`, `fw-semibold`, `mb-3`) or a typo can't creep back in. Interactive widgets are [Headless UI](https://headlessui.com/) (`Menu` in `Navigation.tsx`, `Dialog` in `TeamMemberCard.tsx`) or plain HTML (`<details>` for the FAQ accordion), styled with the same classes.

## `app/globals.css`

It holds everything that isn't a utility class, in this order:

- **`@theme`**: the site's tokens. Breakpoints are Bootstrap's (576/768/992/1200/1400px), not Tailwind's defaults, so `lg:` means 992px here. Named colors (`navy`, `primary`, `muted`, `light`, `dark`, `divider`), heading sizes (`text-h1`..`text-h5`, `text-display-3/4`, `text-lead`) and `leading-heading` exist so markup doesn't repeat arbitrary values. Add a token rather than a third copy of an arbitrary value.
- **`@layer base`**: default styles for bare elements (heading sizes, paragraph margins, link color, the site-wide 1.2rem body text). Utilities always beat these, so `<p className="mb-0">` really has no bottom margin.
- **`@layer components`**: `.btn` and `.btn-lg`, the site's navy button, for both `<button>` and links. The lint rule whitelists them because it can't see this layer.
- **`@utility site-container`**: the centered, padded page column with stepped max-widths. Use it instead of Tailwind's `container`, whose widths differ.

## Two traps when editing classes

- **`leading-<n>` and `text-<size>` aren't what they look like.** In Tailwind v4 `leading-1.2` means 1.2 × 0.25rem and only exists on quarter steps, and `text-xl` sets a line height as well as a font size. The eslint plugin's autofix suggests both as "simpler" replacements and can silently change a layout; use `leading-heading`, `text-h5` and friends instead.
- **Margins between siblings collapse.** A wrapper around a heading and a paragraph that sits in a column layout uses `flow-root` so the last child's bottom margin stays inside it. Removing it changes the spacing below.
