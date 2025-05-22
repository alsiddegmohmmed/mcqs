import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';
import AuthGuard from '@/components/auth/AuthGuard';
const DailyPractice = dynamic(() => import('@/views/landings/default/DailyPractice'));

/***************************  METADATA - CONTACT  ***************************/

export const metadata = { ...SEO_CONTENT.contactUs };

/***************************  PAGE - CONTACT  ***************************/

export default function ContactPage() {
  return (
    <AuthGuard>
      <DailyPractice />
    </AuthGuard>
  );
}
