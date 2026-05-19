describe('Basic Navigation', () => {
  beforeEach(() => {
    // We ignore cross origin errors if any
    Cypress.on('uncaught:exception', () => {
      return false;
    });
  });

  const checkInternalLink = (
    selector: string,
    expectedPath: string,
    expectedHeader: string | RegExp
  ) => {
    cy.location('pathname').then((initialPath) => {
      // Click the visible link so we don't accidentally click hidden nav dropdowns
      cy.get(selector).filter(':visible').first().click();
      cy.location('pathname', { timeout: 10000 }).should('eq', expectedPath);
      if (expectedHeader) {
        cy.get('main h1, main h2').contains(expectedHeader).should('be.visible');
      }
      cy.go('back');
      cy.location('pathname', { timeout: 10000 }).should('eq', initialPath);
    });
  };

  const checkExternalLink = (selector: string, expectedUrlParts: string[]) => {
    // Because clicking external links can navigate away and break Cypress,
    // we verify the href attribute directly matches one of the expected domains.
    cy.get(selector)
      .filter(':visible')
      .first()
      .invoke('attr', 'href')
      .should((href) => {
        if (typeof href === 'string') {
          const isMatch = expectedUrlParts.some((part) => href.includes(part));
          if (!isMatch) throw new Error(`URL ${href} does not match expected domains`);
        }
      });
  };

  it('navigates from the Navigation Bar', () => {
    cy.visit('/');

    // Team
    cy.get('#about-dropdown').click();
    cy.contains('.dropdown-item', 'Team').click();
    cy.location('pathname').should('eq', '/team');
    cy.get('main h1, main h2').contains('Our Team').should('be.visible');
    cy.go('back');
    cy.location('pathname').should('eq', '/');

    // FAQ
    cy.get('#about-dropdown').click();
    cy.contains('.dropdown-item', 'FAQ').click();
    cy.location('pathname').should('eq', '/faq');
    cy.get('main h1, main h2').contains('Frequently Asked Questions').should('be.visible');
    cy.go('back');
    cy.location('pathname').should('eq', '/');

    // Programs -> CS
    cy.get('#programs-dropdown').click();
    cy.contains('.dropdown-item', 'Computer Science').click();
    cy.location('pathname').should('eq', '/cs');
    cy.get('main h1, main h2').contains('Computer Science Track').should('be.visible');
    cy.go('back');
    cy.location('pathname').should('eq', '/');

    // Donate
    cy.contains('.nav-link', 'Donate').click();
    cy.location('pathname').should('eq', '/donate');
    cy.get('main h1, main h2').contains('Support Us').should('be.visible');
    cy.go('back');
    cy.location('pathname').should('eq', '/');

    // Testimonials
    cy.get('#about-dropdown').click();
    cy.contains('.dropdown-item', 'Testimonials').click();
    cy.location('pathname').should('eq', '/testimonials');
    cy.get('main h1, main h2').contains('What People Say').should('be.visible');
    cy.go('back');
    cy.location('pathname').should('eq', '/');

    // Reports
    cy.get('#about-dropdown').click();
    cy.contains('.dropdown-item', 'Reports').click();
    cy.location('pathname').should('eq', '/reports');
    cy.get('main h1, main h2').contains('Reports & Posts').should('be.visible');
    cy.go('back');
    cy.location('pathname').should('eq', '/');

    // Math
    cy.get('#programs-dropdown').click();
    cy.contains('.dropdown-item', 'Math').click();
    cy.location('pathname').should('eq', '/math');
    cy.get('main h1, main h2').contains('Math Track').should('be.visible');
    cy.go('back');
    cy.location('pathname').should('eq', '/');

    // Engineering
    cy.get('#programs-dropdown').click();
    cy.contains('.dropdown-item', 'Engineering').click();
    cy.location('pathname').should('eq', '/engineering');
    cy.get('main h1, main h2').contains('Engineering Track').should('be.visible');
    cy.go('back');
    cy.location('pathname').should('eq', '/');

    // Science
    cy.get('#programs-dropdown').click();
    cy.contains('.dropdown-item', /^Science$/).click();
    cy.location('pathname').should('eq', '/science');
    cy.get('main h1, main h2').contains('Science Track').should('be.visible');
    cy.go('back');
    cy.location('pathname').should('eq', '/');

    // Robotics
    cy.get('#programs-dropdown').click();
    cy.contains('.dropdown-item', 'Robotics').click();
    cy.location('pathname').should('eq', '/robotics');
    cy.get('main h1, main h2').contains('Lego Robotics Track').should('be.visible');
    cy.go('back');
    cy.location('pathname').should('eq', '/');

    // Check external sign up links
    checkExternalLink('a:contains("sign up")', ['gbstem.org', 'docs.google.com']);
    checkExternalLink('a:contains("apply"), a:contains("portal")', [
      'gbstem.org',
      'docs.google.com',
    ]);
  });

  it('navigates from the Home page', () => {
    cy.visit('/');
    // Use main or section to avoid Nav dropdown elements
    checkInternalLink(
      'main a[href="/faq"], section a[href="/faq"]',
      '/faq',
      'Frequently Asked Questions'
    );
    checkInternalLink('main a[href="/team"], section a[href="/team"]', '/team', 'Our Team');
    checkInternalLink(
      'main a[href="/testimonials"], section a[href="/testimonials"]',
      '/testimonials',
      'What People Say'
    );

    // Check program track cards
    checkInternalLink('main a[href="/cs"], section a[href="/cs"]', '/cs', 'Computer Science Track');
    checkInternalLink('main a[href="/math"], section a[href="/math"]', '/math', 'Math Track');
    checkInternalLink(
      'main a[href="/engineering"], section a[href="/engineering"]',
      '/engineering',
      'Engineering Track'
    );
    checkInternalLink(
      'main a[href="/science"], section a[href="/science"]',
      '/science',
      'Science Track'
    );
  });

  it('navigates from the Computer Science Track page', () => {
    cy.visit('/cs');
    checkInternalLink('a[href="/cs/python1"]', '/cs/python1', 'Python 1');
    checkInternalLink('a[href="/cs/python2"]', '/cs/python2', 'Python 2');
    checkInternalLink('a[href="/cs/scratch1"]', '/cs/scratch1', 'Scratch 1');
    checkInternalLink('a[href="/cs/webdev"]', '/cs/webdev', 'Web');

    checkInternalLink('a[href="/math"]', '/math', 'Math');
    checkInternalLink('a[href="/robotics"]', '/robotics', 'Lego Robotics');
  });

  it('navigates from the Math Track page', () => {
    cy.visit('/math');
    checkInternalLink('a[href="/math/math1a"]', '/math/math1a', 'Math I Fall Semester');
    checkInternalLink('a[href="/math/math2b"]', '/math/math2b', 'Math II Spring Semester');
    checkInternalLink('a[href="/math/math5a"]', '/math/math5a', 'Math V Fall Semester');

    checkInternalLink('a[href="/cs"]', '/cs', 'Computer Science');
    checkInternalLink('a[href="/science"]', '/science', 'Science');
  });

  it('navigates from the Engineering Track page', () => {
    cy.visit('/engineering');
    checkInternalLink(
      'a[href="/engineering/engineering1"]',
      '/engineering/engineering1',
      'Engineering I'
    );
    checkInternalLink('a[href="/math"]', '/math', 'Math');
  });

  it('navigates from the Science Track page', () => {
    cy.visit('/science');
    checkInternalLink(
      'a[href="/science/science1"]',
      '/science/science1',
      'Environmental Science I'
    );
    checkInternalLink('a[href="/engineering"]', '/engineering', 'Engineering');
  });

  it('navigates from the Robotics Track page', () => {
    cy.visit('/robotics');
    checkExternalLink('a[href="https://www.firstlegoleague.org/"]', ['firstlegoleague.org']);
    checkInternalLink('a[href="/cs"]', '/cs', 'Computer Science');
  });
});
