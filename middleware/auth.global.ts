import { useAuthStore } from "~/store/User/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const public_routes = ["/auth", "/"];

    if (public_routes.includes(to.path)) {
        return;
    }
    
    const authStore = useAuthStore();
    const authTokenCookie = useCookie('authToken');
    const { token }: any = authTokenCookie.value || authStore.getAuthenticatedUser;

    if (!token) {
        return await navigateTo('/auth');
    }

    try {
        const res: any = await $fetch(`${import.meta.env.VITE_API_URL}/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,  // Enviar o token no cabeçalho
            }
        });

        authStore.setAuthenticatedUser({ token, user:res.user })

        if (!res) {
            return await navigateTo('/auth');
        }

    } catch (error) {
        console.error('Erro ao verificar o token:', error);
        return await navigateTo('/auth');
    }
});