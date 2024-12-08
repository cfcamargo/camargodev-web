<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuthStore } from '~/store/User/auth';

const authStore = useAuthStore()
const { isAuthenticated } = useAuthCheck()
const router = useRouter()

const handleLogout = async() => {
    try{
        await authStore.logout()
        router.push('/auth')
    }
    catch(e){
        alert('Erro ao realizar Logout')
    }
}

</script>
<template>
    <ClientOnly>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage 
                        src="https://github.com/radix-vue.png" 
                        alt="@radix-vue" 
                    />
                    <AvatarFallback>
                        CN
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel v-if="isAuthenticated()">
                        {{ authStore.getUser.fullName }}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem v-if="!isAuthenticated()">
                        <NuxtLink to="/auth">
                            Fazer Login
                        </NuxtLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem v-if="isAuthenticated()">
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem @click="handleLogout" v-if="isAuthenticated()">
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel>
                        Tema
                    </DropdownMenuLabel>
                    <ThemeSwitch />
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </ClientOnly>
</template>
