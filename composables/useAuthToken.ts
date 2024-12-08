import { useAuthStore } from "~/store/User/auth"

export const useAuthToken = () => {
  const authStore = useAuthStore()
  return authStore.token
}