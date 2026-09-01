import { MAILING_LIST_FORM_LINK } from '@/lib/constants';

interface MailingListLinkProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * The mailing-list call to action, which every "that window is closed" message on the site ends
 * with. Shared so the href and the `target`/`rel` pair are written once — and so nobody is
 * tempted to inline an `<a>` tag inside a template literal, where React escapes it and the
 * visitor reads the raw markup.
 */
export default function MailingListLink({
  children = 'join our mailing list',
  className,
}: MailingListLinkProps) {
  return (
    <a
      href={MAILING_LIST_FORM_LINK}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
