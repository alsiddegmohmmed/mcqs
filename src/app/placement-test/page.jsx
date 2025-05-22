import PlacementTest from './PlacementTest.jsx';
import AuthGuard from '@/components/auth/AuthGuard';
export default function PlacementTestPage() {
  return (
    <AuthGuard>
      <PlacementTest />
    </AuthGuard>
  );
}