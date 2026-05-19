# gbSTEM Website

<https://www.gbstem.org/>

## Description

> Inspiring the Next Generation of STEM Innovators

The Greater Boston STEM Program delivers free introductory computer science, math, engineering, and science enrichment to elementary and middle school students.

This website is the primary public face of gbSTEM.org, providing information about the organization, its programs, and how to get involved. **It is primarily maintained by a rotating group of High School and college students.** Because of this, maintaining clear, readable code and robust documentation is highly prioritized.

## Frameworks and Libraries

This project relies on several key modern web technologies:

- **[Next.js](https://nextjs.org)**: The core React framework used for building the site. We use the modern "App Router" (`app/` directory) for routing, server-side rendering, and static site generation.
  - *Learn more*: [Next.js Documentation](https://nextjs.org/docs) or the [Learn Next.js](https://nextjs.org/learn) tutorial.
- **[React](https://react.dev/)**: The underlying JavaScript library for building user interfaces and component-based architecture.
- **[TypeScript](https://www.typescriptlang.org/)**: A strongly typed programming language that builds on JavaScript, giving you better tooling and strict type-checking at any scale.
- **[Bootstrap](https://getbootstrap.com/) & [React-Bootstrap](https://react-bootstrap.netlify.app/)**: Used for rapid, responsive UI development. React-Bootstrap replaces the standard Bootstrap JavaScript with native React components (like `Accordion`, `Carousel`, and `Modal`).
- **[Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)**: Our primary testing suite. We use Jest to write unit tests for components to ensure they render properly and maintain high code coverage, preventing regressions as the codebase is passed between different high school maintainers.

## Getting Started with Development

First, run the development server:

```bash
# install dependencies
yarn install

# run the development server
yarn dev

# run tests and verify coverage
yarn test --coverage

# build for production
yarn build

# start a production-like server
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result for `yarn dev` or `yarn start`. You can start editing any page or component, and when running in `yarn dev` mode, your changes will be reflected in the browser automatically.

## Deploy on Vercel

We use [Vercel](https://vercel.com/) for deployment. They are the creators and main sponsors of Next.js. You can preview changes by pushing branches to this repository, and preview and production URLs will automatically be provided by the Vercel bot.

---

## Directory and File Index

Below is an alphabetical list of the top-level directories and significant configuration files to help you navigate the codebase:

### Directories

- **`__tests__/`**: Contains all of our Jest unit tests. Tests are organized generally by route or component domain (e.g. `programs.test.tsx`, `components.test.tsx`).

- **`app/`**: The core Next.js App Router directory. This handles the application's URL routing. Each subdirectory (like `cs/`, `math/`) with a `page.tsx` file inside represents a distinct page on the site.
- **`components/`**: Reusable React UI components that are imported across multiple pages (e.g., `Navigation.tsx`, `Footer.tsx`, `ClassPage.tsx`). Keeping logic componentized keeps our page files clean.
- **`lib/`**: Contains library utilities and centralized static data constants (like the lists of FAQ questions in `faqData.ts` and the team member information in `teamMembers.ts`).
- **`public/`**: Static assets such as images, logos, and icons that can be accessed publicly by the browser.

### Files

- **`.eslintrc.json`**: Configuration rules for ESLint, ensuring consistent code style and formatting across the project.
- **`.gitignore`**: Specifies which files and directories Git should ignore (like `node_modules/` and `.next/`).
- **`jest.config.ts`**: The configuration file for our Jest testing environment, specifically tailored to work alongside Next.js.
- **`jest.setup.ts`**: Initial setup code that runs before our Jest tests, importing tools like `@testing-library/jest-dom` for custom DOM matchers.
- **`next-env.d.ts`**: Automatically generated TypeScript declaration file that ensures the Next.js types are picked up by the compiler. Do not edit manually.
- **`next.config.mjs`**: General Next.js build and server configuration file.
- **`package.json`**: Defines the project's details, scripts (like `yarn dev`), and dependencies (the npm packages we rely on).
- **`README.md`**: You are reading this file! It contains the project's onboarding documentation.
- **`tsconfig.json`**: Configuration settings for the TypeScript compiler, including our path aliases (like `@/` mapping to the root).
- **`yarn.lock`**: An automatically generated file that locks down the exact versions of dependencies used, ensuring that all developers have identical, reproducible environments.
