import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather';

const COPYRIGHT_YEAR = new Date().getFullYear();

const SOCIAL_LINKS = [
  {
    href: 'https://facebook.com/The-Greater-Boston-STEM-Program-104063908337961',
    label: 'Facebook',
    Icon: Facebook,
  },
  { href: 'https://twitter.com/gbstemprogram', label: 'Twitter', Icon: Twitter },
  { href: 'https://www.instagram.com/gbstem/', label: 'Instagram', Icon: Instagram },
  { href: 'https://www.linkedin.com/company/gbstem-program', label: 'LinkedIn', Icon: Linkedin },
];

const Footer = () => {
  return (
    <footer>
      <section className="bg-dark py-12 text-center">
        <div className="site-container">
          <a href="mailto:contact@gbstem.org" className="text-primary">
            <u>contact@gbstem.org</u>
          </a>
          <ul className="mt-6 flex list-none justify-center p-0 text-blue-600">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <li key={label} className="mx-4">
                <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon size={35} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-white">
          The Greater Boston STEM Program is an independent non-profit 501(c)3 organization, EIN
          88-1760321
        </p>
        <small className="mt-12 block text-white">
          © {COPYRIGHT_YEAR} The Greater Boston STEM Program, all rights reserved
        </small>
      </section>
    </footer>
  );
};

export default Footer;
