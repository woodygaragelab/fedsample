import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface Props {
  children: JSX.Element;
  requiredRole: 'admin' | 'member';
}

export default function ProtectedRoute({ children, requiredRole }: Props) {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) return null;

  if (!isAuthenticated) {
    const target = requiredRole === 'member' ? '/web/login' : '/admin/login';
    return <Navigate to={target} replace />;
  }

  if (user?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}
