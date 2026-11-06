'use client';

import {
  GBSTEM_PORTAL,
  GBSTEM_SHOP,
  GBSTEM_SIGNUP,
  MAILING_LIST_FORM_LINK,
  currentSemesterStatus,
} from '@/lib/constants';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Shared by every top-level entry, so the bar's links and dropdown toggles line up. The
// max-[N+1px] breakpoints make each size apply at N px wide and below.
const NAV_LINK =
  'mx-2.5 block px-1 py-2 font-mono text-[20px] font-bold text-white lowercase no-underline min-[851px]:px-2 max-[1201px]:mx-0.5 max-[1201px]:text-[16px] max-[851px]:mx-0 max-[851px]:text-[13px]';

// The colored pill inside the sign up / apply / donate links.
const PILL =
  'inline-block rounded-[20px] p-2.5 whitespace-nowrap max-[850px]:px-2 max-[850px]:py-1.5';

interface NavDropdownProps {
  title: string;
  testId: string;
  items: { href: string; label: string; testId: string }[];
  onNavigate: () => void;
}

function NavDropdown({ title, testId, items, onNavigate }: NavDropdownProps) {
  // A flex column so the toggle stretches across it like a block link would, keeping its label
  // centered when the menu below widens it on small screens.
  return (
    <Menu as="div" className="relative flex flex-col text-center" data-testid={testId}>
      <MenuButton
        className={`${NAV_LINK} after:ml-[0.255em] after:inline-block after:border-x-[0.3em] after:border-t-[0.3em] after:border-x-transparent after:border-t-current after:align-[0.255em] after:content-[''] hover:opacity-80`}
      >
        {title}
      </MenuButton>
      {/* `static` keeps the links in the page while closed, hidden by CSS, so crawlers can follow
          them; Headless UI would otherwise leave them out until the menu opens. */}
      <MenuItems
        static
        modal={false}
        className="z-50 mt-0.5 hidden min-w-40 rounded-md border border-black/17.5 bg-navy bg-clip-padding py-2 text-right font-mono font-bold text-white focus:outline-none in-data-open:block md:absolute md:top-full md:left-0 md:text-left"
      >
        {items.map((item) => (
          <MenuItem key={item.href}>
            <Link
              href={item.href}
              data-testid={item.testId}
              onClick={onNavigate}
              className="block w-full px-4 py-1 text-center whitespace-nowrap text-white no-underline data-focus:bg-light data-focus:text-dark md:text-start"
            >
              {item.label}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const { registrationOpen, semesterInProgress } = currentSemesterStatus();

  return (
    <nav className="relative flex flex-wrap items-center justify-between bg-navy py-2 md:flex-nowrap md:justify-start">
      <Link
        href="/"
        onClick={closeMenu}
        className="ms-2 me-4 py-1.25 text-h5 font-bold whitespace-nowrap text-white no-underline xl:ms-12"
      >
        <Image
          alt="gbSTEM logo"
          src="/images/icons/penguin.png"
          width={200}
          height={79}
          className="inline-block"
        />
      </Link>

      <button
        type="button"
        aria-controls="navbar-nav"
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
        className="rounded-md border border-white/10 px-3 py-1 text-xl leading-none text-white/55 focus-visible:shadow-[0_0_0_0.25rem] focus-visible:outline-0 md:hidden"
      >
        {/* Three-bar "hamburger" icon. */}
        <svg viewBox="0 0 30 30" className="inline-block size-[1.5em] align-middle" aria-hidden>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M4 7h22M4 15h22M4 23h22"
          />
        </svg>
      </button>

      {/* Below md the links collapse behind the button above; the grid rows animate the height. */}
      <div
        id="navbar-nav"
        className={`grid grow basis-full items-center transition-[grid-template-rows,visibility] duration-350 ease-in-out md:visible md:flex md:basis-auto md:justify-end ${menuOpen ? 'grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'}`}
      >
        <div className="flex min-h-0 w-full flex-col items-center justify-end overflow-hidden md:flex-row md:overflow-visible">
          <Link href="/" onClick={closeMenu} className={NAV_LINK}>
            Home
          </Link>

          <NavDropdown
            title="About"
            testId="nav-about"
            onNavigate={closeMenu}
            items={[
              { href: '/team', label: 'Team', testId: 'nav-team' },
              { href: '/testimonials', label: 'Testimonials', testId: 'nav-testimonials' },
              { href: '/reports', label: 'Reports', testId: 'nav-reports' },
              { href: '/faq', label: 'FAQ', testId: 'nav-faq' },
            ]}
          />

          <NavDropdown
            title="Programs"
            testId="nav-programs"
            onNavigate={closeMenu}
            items={[
              { href: '/cs', label: 'Computer Science', testId: 'nav-cs' },
              { href: '/math', label: 'Math', testId: 'nav-math' },
              { href: '/engineering', label: 'Engineering', testId: 'nav-engineering' },
              { href: '/science', label: 'Science', testId: 'nav-science' },
              { href: '/robotics', label: 'Robotics', testId: 'nav-robotics' },
            ]}
          />

          <a href={GBSTEM_SHOP} target="_blank" rel="noreferrer" className={NAV_LINK}>
            Shop
          </a>

          <a
            href={registrationOpen ? GBSTEM_SIGNUP : MAILING_LIST_FORM_LINK}
            target="_blank"
            rel="noreferrer"
            className={NAV_LINK}
          >
            <div className={`${PILL} bg-[#67aeda]`}>sign up</div>
          </a>

          <a
            href={
              semesterInProgress
                ? GBSTEM_PORTAL
                : registrationOpen
                  ? GBSTEM_SIGNUP
                  : MAILING_LIST_FORM_LINK
            }
            target="_blank"
            rel="noreferrer"
            className={NAV_LINK}
          >
            <div className={`${PILL} bg-[#aaaaaa]`}>{semesterInProgress ? 'portal' : 'apply'}</div>
          </a>

          <Link href="/donate" onClick={closeMenu} className={NAV_LINK} data-testid="nav-donate">
            <div className={`${PILL} bg-[#4caf50]`}>Donate</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
