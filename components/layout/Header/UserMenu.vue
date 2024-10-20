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
                    <!-- <DropdownMenuLabel>
                        Cristian Camargo
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator /> -->
                    <DropdownMenuItem>
                        <NuxtLink to="/auth">
                            Fazer Login
                        </NuxtLink>
                    </DropdownMenuItem>
                    <!-- <DropdownMenuItem>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Logout
                    </DropdownMenuItem> -->
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
