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
        }
    }
})