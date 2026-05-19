import { constructSEO } from '@/lib/seo';

export const metadata = constructSEO({
  title: 'Reports',
  description: 'Read our annual and impact reports',
});

export default function ReportsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
