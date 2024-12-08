import { useAuthStore } from "~/store/User/auth"

export const useAuthToken = () => {
  const authStore = useAuthStore()
  console.log(authStore.token)
  return authStore.token
}