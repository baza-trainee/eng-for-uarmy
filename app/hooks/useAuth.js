import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectError } from '@/redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);

  return {
    isLoggedIn,
    isRefreshing,
    error,
  };
};