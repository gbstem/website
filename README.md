# gbSTEM Website

<https://www.gbstem.org/>

## Description

> Inspiring the Next Generation of STEM Innovators

The Greater Boston STEM Program delivers free introductory computer science, math, engineering, and science enrichment to elementary and middle school students.

This website is the primary public face of gbSTEM.org, providing information about the organization, its programs, and how to get involved. **It is primarily maintained by a rotating group of High School and college students.** Because of this, maintaining clear, readable code and robust documentation is highly prioritized.

See [AGENTS.md](AGENTS.md) for information we give to AI agents to help them understand and maintain this codebase.

See [TEST_PLAN.md](TEST_PLAN.md) for more information about how we test this codebase.

## Frameworks and Libraries

This project relies on several key modern web technologies:

- **[Next.js](https://nextjs.org)**: The core React framework used for building the site. We use the modern "App Router" (`app/` directory) for routing, server-side rendering, and static site generation.
  - _Learn more_: [Next.js Documentation](https://nextjs.org/docs) or the [Learn Next.js](https://nextjs.org/learn) tutorial.
- **[React](https://react.dev/)**: The underlying JavaScript library for building user interfaces and component-based architecture.
- **[TypeScript](https://www.typescriptlang.org/)**: A strongly typed programming language that builds on JavaScript, giving you better tooling and strict type-checking at any scale.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.
- **[Bootstrap](https://getbootstrap.com/) & [React-Bootstrap](https://react-bootstrap.netlify.app/)**: Used for rapid, responsive UI development. React-Bootstrap replaces the standard Bootstrap JavaScript with native React components (like `Accordion`, `Carousel`, and `Modal`).
- **[Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)**: Our primary testing suite. We use Jest to write unit tests for components to ensure they render properly and maintain high code coverage, preventing regressions as the codebase is passed between different high school maintainers.
- **[Cypress](https://www.cypress.io/)**: Used for end-to-end integration tests, ensuring the live site functions correctly in a real browser.

## Getting Started with Development

> [!NOTE]
> No environment variables are required to run the public website, so there is no `.env.example` file needed.

First, run the development server:

```bash
# install dependencies
yarn install

# run the development server
yarn dev

# automatically format code
yarn format

# check for style issues
yarn lint

# run unit tests
yarn test

# run real browser end-to-end integration tests
yarn cypress

# build for production
yarn build

# start a production-like server
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result for `yarn dev` or `yarn start`. You can start editing any page or component, and when running in `yarn dev` mode, your changes will be reflected in the browser automatically.

## Updating Dependencies

It is important to periodically update the project's dependencies to address security vulnerabilities, receive bug fixes, improve performance, and keep up with the latest Next.js and React features. Since this project is maintained by a rotating group of students, regular updates prevent the codebase from falling behind or becoming incompatible with modern deployment platforms like Vercel.

While GitHub Dependabot handles minor and patch dependency updates automatically, we still need to manually run `ncu` to catch major updates that Dependabot misses. Check `npx depcheck` occasionally to catch any missing dependencies. While doing this, also check for the latest yarn berry v4 package manager release and update `packageManager` at the bottom of `package.json` to use that instead.

For those manual updates, we use the [npm-check-updates (ncu)](https://github.com/raineorshine/npm-check-updates) tool to check for and apply updates. Refer to the [installation instructions](https://github.com/raineorshine/npm-check-updates#installation) to install it.

Once `ncu` is installed, follow this sequence of commands to update dependencies:

> [!IMPORTANT]
> **Pin TypeScript to version 6 (`^6.x.x`) due to Next.js not supporting v7 yet and `@types/node` to version 24 (`^24.x.x`) due to us configuring Vercel to use Node.js 24.x**.
>
> When executing `ncu -u`, ensure TypeScript and `@types/node` are not upgraded to major versions beyond v6 and v24, which the commands below avoid, or manually revert their versions in `package.json` before installing.

```bash
# Update pinned dependencies (typescript to v6 and @types/node to v24) to their latest minor/patch versions
ncu -t minor -u typescript "@types/node"

# Update all other dependencies in package.json to the latest versions
ncu --peer --reject typescript,@types/node -u

# Install the updated packages and update yarn.lock
yarn install

# Run unit tests to verify no breaking changes were introduced
yarn test

# Start a development server and run the Cypress test suite
yarn dev &
yarn cypress

# Run lint checks to ensure code style consistency
yarn lint

# Go to http://localhost:3000 and do manual visual checks and tests

# Build the project for production to verify compatibility and compile-time checks
yarn build
```

After verifying that the tests, linting, and build pass successfully, commit and submit both `package.json` and `yarn.lock` to the repository.

## Deploy on Vercel

We use [Vercel](https://vercel.com/) for deployment. They are the creators and main sponsors of Next.js. You can preview changes by pushing branches to this repository, and preview and production URLs will automatically be provided by the Vercel bot.

## Directory and File Index

Below is an alphabetical list of the top-level directories and significant configuration files to help you navigate the codebase:

### Directories

- **`.github/`**: Contains GitHub configuration for GitHub, including our Dependabot configuration for automating minor and patch package updates, and our Continuous Integration (CI) test workflows.
- **`.husky/`**: Configuration for Husky, managing Git hooks like pre-commit formatting and linting.
- **`__tests__/`**: Contains all of our Jest unit tests. Tests are organized generally by route or component domain (e.g. `programs.test.tsx`, `components.test.tsx`).
- **`app/`**: The core Next.js App Router directory. This handles the application's URL routing. Each subdirectory (like `cs/`, `math/`) with a `page.tsx` file inside represents a distinct page on the site.
- **`components/`**: Reusable React UI components that are imported across multiple pages (e.g., `Navigation.tsx`, `Footer.tsx`, `ClassPage.tsx`). Keeping logic componentized keeps our page files clean.
- **`cypress/`**: Contains our Cypress end-to-end integration tests and configurations, verifying the live site functions correctly in a real browser.
- **`lib/`**: Contains library utilities and centralized static data constants (like the lists of FAQ questions in `faqData.ts` and the team member information in `teamMembers.ts`).
- **`public/`**: Static assets such as images, logos, and icons that can be accessed publicly by the browser.
- **`scripts/`**: Contains utility/tooling scripts (like test helper scripts).

### Files

- **`.gitignore`**: Specifies which files and directories Git should ignore (like `node_modules/` and `.next/`).
- **`.prettierignore`**: Specifies which files and directories Prettier should ignore when formatting.
- **`.prettierrc`**: Configuration rules for Prettier, ensuring consistent code formatting across the project.
- **`AGENTS.md`**: Custom rules and guidelines for AI coding agents interacting with the repository.
- **`cypress.config.ts`**: The configuration file for our Cypress end-to-end testing environment.
- **`eslint.config.mjs`**: Configuration rules for ESLint, ensuring consistent code style and checking for common errors across the project.
- **`jest.config.ts`**: The configuration file for our Jest testing environment, specifically tailored to work alongside Next.js.
- **`jest.setup.ts`**: Initial setup code that runs before our Jest tests, importing tools like `@testing-library/jest-dom` for custom DOM matchers.
- **`next-env.d.ts`**: Automatically generated TypeScript declaration file that ensures the Next.js types are picked up by the compiler. Do not edit manually.
- **`next-sitemap.config.js`**: Configuration settings for `next-sitemap` to generate dynamic XML sitemaps and robots.txt.
- **`next.config.ts`**: General Next.js build and server configuration file.
- **`package.json`**: Defines the project's details, scripts (like `yarn dev`), and dependencies (the npm packages we rely on).
- **`postcss.config.mjs`**: Configuration for PostCSS, typically used for transforming CSS with plugins.
- **`README.md`**: You are reading this file! It contains the project's onboarding documentation.
- **`TEST_PLAN.md`**: Detailed markdown document describing the manual and Cypress automated E2E test scenarios.
- **`tsconfig.json`**: Configuration settings for the TypeScript compiler, including our path aliases (like `@/` mapping to the root).
- **`yarn.lock`**: An automatically generated file that locks down the exact versions of dependencies used, ensuring that all developers have identical, reproducible environments.
