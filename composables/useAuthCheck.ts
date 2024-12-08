import { useAuthStore } from '@/store/User/auth';

export function useAuthCheck() {
  const authStore = useAuthStore();
  const authTokenCookie = useCookie('authToken');

  const isAuthenticated = () => {
    return !!authStore.token || !!authTokenCookie.value;
  };

  return {
    isAuthenticated,
  };
}