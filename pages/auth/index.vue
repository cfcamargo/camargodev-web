<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type { LoginResProps } from "~/@types/AuthenticatedUser"
import { useAuthStore } from "~/store/User/auth"

const email = ref('contato@camargodev.com.br')
const password = ref('password')
const loading = ref(false)
const loginError = ref('')

const authStore = useAuthStore()
const router = useRouter()

const submit = async() => {
    loading.value = true
    try {
        await authStore.login(email.value, password.value)
        router.push('/')
    }
    catch(err) {
        loginError.value = 'Erro ao realizar login, verifique suas credenciais e tente novamente'
        loading.value = false
    }
}

</script>

<template>
    <div class="min-h-screen bg-zinc-100 dark:bg-zinc-900 flex flex-col justify-center items-center p-4">
        <Card class="w-full max-w-md">
            <CardHeader>
                <CardTitle class="text-2xl font-bold text-center">
                    CamargoDev
                </CardTitle>
                <CardDescription class="text-center">
                    Entre com login e senha
                </CardDescription>
            </CardHeader>
            <form @submit.prevent=submit>
                <CardContent class="space-y-4">
                    <div class="space-y-2">
                        <Label for="email">
                            Email
                        </Label>
                        <Input 
                            v-model="email"
                            id="email" 
                            type="email" 
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div class="space-y-2">
                        <Label for="password">Senha</Label>
                        <Input 
                            v-model="password"
                            id="password" 
                            type="password" 
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <Alert 
                        v-if="loginError"
                        variant="destructive"
                    >
                        <AlertDescription>
                            {{ loginError }}
                        </AlertDescription>
                    </Alert>
                </CardContent>
                <CardFooter>
                    <Button 
                        :disabled="loading"
                        type="submit" 
                        class="w-full"
                    >
                        Login
                    </Button>
                </CardFooter>
            </form>
        </Card>
    </div>
</template>
