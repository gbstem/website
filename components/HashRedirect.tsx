'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Redirects any hashed URLs to the correct page.
 * This is needed because our website was previously hosted on hash-based routing
 * and we don't want to break any links that point to the old URLs.
 */
export default function HashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      const newPath = hash.substring(1);
      router.replace(newPath);
    }
  }, [router]);

  return null;
}
