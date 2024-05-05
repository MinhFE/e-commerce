'use client';

import authApiRequest from '@/api/auth';
import { clientSessionToken } from '@/lib/http';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Logout() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sessionToken = searchParams.get('sessionToken');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (sessionToken === clientSessionToken.value) {
      authApiRequest.logoutFromClientToNextServer(true, signal).then((res) => {
        router.push(`/login?redirectFrom=${pathname}`);
      });
    }

    return () => {
      controller.abort();
    };
  }, [sessionToken, router, pathname]);
  return <div>Logout</div>;
}
