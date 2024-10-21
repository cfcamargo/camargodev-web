import { defineStore } from 'pinia'
import type { LoginResProps } from '~/@types/AuthenticatedUser'

export const useAuthStore = defineStore('auth', {
    state: (): LoginResProps => ({
        user: {
            createdAt: '',
            fullName: '',
            id: null,
            updatedAt: ''
        },
        token: '' 
    }) ,
    getters: {
        getToken: (state) => state.token,
        getUser: (state) => state.user,
        getAuthenticatedUser: (state) => { 
            return {
                user: state.user,
                token: state.token
            }
         }
    },
    actions: {
        setAuthenticatedUser({user, token}: LoginResProps) {
            this.user = user,
            this.token = token
        },
        async login(email: string, password: string) {
            const { token, user }: LoginResProps = await $fetch(`${import.meta.env.VITE_API_URL}/login`, {
                method: 'POST',
                body: {
                    email,
                    password
                }
            })
            const authTokenCookie = useCookie('authToken');
            authTokenCookie.value = token;
            this.user = user
            this.token = token
        },
        async logout() {
            await $fetch(`${import.meta.env.VITE_API_URL}/logout`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            const authTokenCookie = useCookie('authToken');
            authTokenCookie.value = null;
        }
    }
})