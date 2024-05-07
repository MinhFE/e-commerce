'use client';

import authApiRequest from '@/api/auth';
import { Button } from '@/components/ui/button';
import { handleErrorApi } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function ButtonLogout() {
  const router = useRouter();
  const pathname = usePathname();
  const handleLogout = async () => {
    try {
      await authApiRequest.logoutFromClientToNextServer();
      router.push('/login');
    } catch (error) {
      handleErrorApi({
        error,
      });
      authApiRequest.logoutFromClientToNextServer(true).then((res) => {
        router.push(`/login?redirectFrom=${pathname}`);
      });
    }
  };
  return (
    <Button size={'sm'} onClick={handleLogout}>
      Logout
    </Button>
  );
}
