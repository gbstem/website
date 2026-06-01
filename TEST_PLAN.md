# Release Test Plan

This document details the manual and automated regression test suite to verify all core features of the public gbSTEM website before any production release. It is structured sequentially to facilitate direct translation into Cypress E2E tests.

If you want to watch Cypress execute this in your browser, you can start it with extra arguments like the following, where `--headed` makes it so it runs a visible browser and `--browser` selects a browser to run. For example, `yarn run cypress --browser=chromium --headed --video` will create a video of the test run in the `cypress/videos` directory. There are many [options you can use](https://docs.cypress.io/guides/references/command-line#cypress-open). See [this page](https://docs.cypress.io/guides/getting-started/opening-the-app) to get started with Cypress.

`yarn run cypress --browser=chromium --headed`

However, remember that you can actually see what is happening on the screen in a way that Cypress isn't: it just keys off of HTML elements and CSS classes, so can miss major visual bugs. It is also important to use meaningful IDs and class names when we create our components and tests.

---

## 1. Setup and Pre-requisites

Follow these steps to establish a clean, predictable, local testing environment.

### A. Run the Development Server

1. Start the Next.js local server:

   ```bash
   yarn dev
   ```

   _Verify that the application is running at <http://localhost:3000>._

---

## 2. Test Cases & E2E Validation Sequence

### Section A: Navigation Bar Interactions

#### Test Case 1: Navigate from the Navigation Bar (Internal & External Links)

- **Description**: Verify that clicking links in the top header navigation bar correctly routes the user to the expected pages and that external links have the correct targets.
- **Steps**:
  1. Open a browser and navigate to the Home page: `http://localhost:3000/`.
  2. Click the **"About"** dropdown menu and select **"Team"**. Navigate back.
  3. Click the **"About"** dropdown menu and select **"FAQ"**. Navigate back.
  4. Click the **"About"** dropdown menu and select **"Testimonials"**. Navigate back.
  5. Click the **"About"** dropdown menu and select **"Reports"**. Navigate back.
  6. Click the **"Programs"** dropdown menu and select **"Computer Science"**. Navigate back.
  7. Click the **"Programs"** dropdown menu and select **"Math"**. Navigate back.
  8. Click the **"Programs"** dropdown menu and select **"Engineering"**. Navigate back.
  9. Click the **"Programs"** dropdown menu and select **"Science"**. Navigate back.
  10. Click the **"Programs"** dropdown menu and select **"Robotics"**. Navigate back.
  11. Click the **"Donate"** navigation link. Navigate back.
- **Expected Results (Assertions)**:
  - Selecting **"Team"** routes to `/team` and the page contains the `"Our Team"` header.
  - Selecting **"FAQ"** routes to `/faq` and the page contains the `"Frequently Asked Questions"` header.
  - Selecting **"Testimonials"** routes to `/testimonials` and the page contains the `"What People Say"` header.
  - Selecting **"Reports"** routes to `/reports` and the page contains the `"Reports & Posts"` header.
  - Selecting **"Computer Science"** routes to `/cs` and the page contains the `"Computer Science Track"` header.
  - Selecting **"Math"** routes to `/math` and the page contains the `"Math Track"` header.
  - Selecting **"Engineering"** routes to `/engineering` and the page contains the `"Engineering Track"` header.
  - Selecting **"Science"** routes to `/science` and the page contains the `"Science Track"` header.
  - Selecting **"Robotics"** routes to `/robotics` and the page contains the `"Lego Robotics Track"` header.
  - Selecting **"Donate"** routes to `/donate` and the page contains the `"Support Us"` header.
  - Any external `"sign up"`, `"apply"`, or `"portal"` link contains a reference to `gbstem.org` or `docs.google.com` inside its `href` attribute.

---

### Section B: Home Page Navigation Links

#### Test Case 2: Navigate from the Home Page Content Links

- **Description**: Verify that clicking inline text links and track/course preview cards on the Home page routes to the correct internal pages.
- **Steps**:
  1. Navigate to the Home page: `http://localhost:3000/`.
  2. Locate and click the link leading to `/faq` inside the main body or section. Navigate back.
  3. Locate and click the link leading to `/team` inside the main body or section. Navigate back.
  4. Locate and click the link leading to `/testimonials` inside the main body or section. Navigate back.
  5. Click the **Computer Science** track card link. Navigate back.
  6. Click the **Math** track card link. Navigate back.
  7. Click the **Engineering** track card link. Navigate back.
  8. Click the **Science** track card link. Navigate back.
- **Expected Results (Assertions)**:
  - The `/faq` link navigates to `/faq` and shows the `"Frequently Asked Questions"` header.
  - The `/team` link navigates to `/team` and shows the `"Our Team"` header.
  - The `/testimonials` link navigates to `/testimonials` and shows the `"What People Say"` header.
  - The Computer Science track card link navigates to `/cs` and shows the `"Computer Science Track"` header.
  - The Math track card link navigates to `/math` and shows the `"Math Track"` header.
  - The Engineering track card link navigates to `/engineering` and shows the `"Engineering Track"` header.
  - The Science track card link navigates to `/science` and shows the `"Science Track"` header.

---

### Section C: Track-Specific Sub-page Navigation Links

#### Test Case 3: Navigate from the Computer Science Track Page

- **Description**: Verify sub-course links and related track recommendations from the Computer Science track landing page.
- **Steps**:
  1. Navigate to the CS track page: `http://localhost:3000/cs`.
  2. Click the link to **"Python 1"** (`/cs/python1`). Navigate back.
  3. Click the link to **"Python 2"** (`/cs/python2`). Navigate back.
  4. Click the link to **"Scratch 1"** (`/cs/scratch1`). Navigate back.
  5. Click the link to **"Web"** (`/cs/webdev`). Navigate back.
  6. Click the related **"Math"** track recommendation link (`/math`). Navigate back.
  7. Click the related **"Lego Robotics"** track recommendation link (`/robotics`). Navigate back.
- **Expected Results (Assertions)**:
  - Python 1 link routes to `/cs/python1` showing `"Python 1"`.
  - Python 2 link routes to `/cs/python2` showing `"Python 2"`.
  - Scratch 1 link routes to `/cs/scratch1` showing `"Scratch 1"`.
  - Web link routes to `/cs/webdev` showing `"Web"`.
  - Math recommendation link routes to `/math` showing `"Math"`.
  - Lego Robotics recommendation link routes to `/robotics` showing `"Lego Robotics"`.

#### Test Case 4: Navigate from the Math Track Page

- **Description**: Verify sub-course links and related track recommendations from the Math track landing page.
- **Steps**:
  1. Navigate to the Math track page: `http://localhost:3000/math`.
  2. Click the link to **"Math I Fall Semester"** (`/math/math1a`). Navigate back.
  3. Click the link to **"Math II Spring Semester"** (`/math/math2b`). Navigate back.
  4. Click the link to **"Math V Fall Semester"** (`/math/math5a`). Navigate back.
  5. Click the related **"Computer Science"** track recommendation link (`/cs`). Navigate back.
  6. Click the related **"Science"** track recommendation link (`/science`). Navigate back.
- **Expected Results (Assertions)**:
  - Math I Fall Semester link routes to `/math/math1a` showing `"Math I Fall Semester"`.
  - Math II Spring Semester link routes to `/math/math2b` showing `"Math II Spring Semester"`.
  - Math V Fall Semester link routes to `/math/math5a` showing `"Math V Fall Semester"`.
  - Computer Science recommendation link routes to `/cs` showing `"Computer Science"`.
  - Science recommendation link routes to `/science` showing `"Science"`.

#### Test Case 5: Navigate from the Engineering Track Page

- **Description**: Verify sub-course links and related track recommendations from the Engineering track landing page.
- **Steps**:
  1. Navigate to the Engineering track page: `http://localhost:3000/engineering`.
  2. Click the link to **"Engineering I"** (`/engineering/engineering1`). Navigate back.
  3. Click the related **"Math"** track recommendation link (`/math`). Navigate back.
- **Expected Results (Assertions)**:
  - Engineering I link routes to `/engineering/engineering1` showing `"Engineering I"`.
  - Math recommendation link routes to `/math` showing `"Math"`.

#### Test Case 6: Navigate from the Science Track Page

- **Description**: Verify sub-course links and related track recommendations from the Science track landing page.
- **Steps**:
  1. Navigate to the Science track page: `http://localhost:3000/science`.
  2. Click the link to **"Environmental Science I"** (`/science/science1`). Navigate back.
  3. Click the related **"Engineering"** track recommendation link (`/engineering`). Navigate back.
- **Expected Results (Assertions)**:
  - Environmental Science I link routes to `/science/science1` showing `"Environmental Science I"`.
  - Engineering recommendation link routes to `/engineering` showing `"Engineering"`.

#### Test Case 7: Navigate from the Robotics Track Page

- **Description**: Verify related links and external associations from the Robotics track landing page.
- **Steps**:
  1. Navigate to the Robotics track page: `http://localhost:3000/robotics`.
  2. Verify the link to the external First Lego League website (`https://www.firstlegoleague.org/`).
  3. Click the related **"Computer Science"** track recommendation link (`/cs`). Navigate back.
- **Expected Results (Assertions)**:
  - The external First Lego League link contains the `firstlegoleague.org` domain in its `href`.
  - Computer Science recommendation link routes to `/cs` showing `"Computer Science"`.
