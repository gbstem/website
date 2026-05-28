import { constructSEO } from '@/lib/seo';

export const metadata = constructSEO({
  title: 'Testimonials',
  description: 'Read what students and parents have to say about gbSTEM',
});

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
