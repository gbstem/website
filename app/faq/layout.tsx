import { constructSEO } from '@/lib/seo';

export const metadata = constructSEO({
  title: 'FAQ',
  description: 'Frequently Asked Questions about gbSTEM',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
