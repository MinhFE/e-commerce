import accountApiRequest from '@/api/account';
import ProfileForm from '@/app/me/profile-form';
import { cookies } from 'next/headers';

export default async function MeProfile() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const result = await accountApiRequest.me(sessionToken?.value ?? '');

  return (
    <div>
      <h1>Profile</h1>
      <ProfileForm profile={result.payload.data} />
    </div>
  );
}
