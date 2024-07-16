<script lang="ts" setup>
import { Moon, Sun, MonitorCog } from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
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
                    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>
                    Cristian Camargo
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel>
                        Tema
                    </DropdownMenuLabel>
                    <ToggleGroup type="single">
                        <ToggleGroupItem value="a" title="Dark">
                            <TooltipProvider>
                                <Tooltip>
                                <TooltipTrigger>
                                    <Moon />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Dark</p>
                                </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </ToggleGroupItem>
                        <ToggleGroupItem value="b">
                            <TooltipProvider>
                                <Tooltip>
                                <TooltipTrigger>
                                    <Sun />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Ligth</p>
                                </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </ToggleGroupItem>
                        <ToggleGroupItem value="c">
                            <TooltipProvider>
                                <Tooltip>
                                <TooltipTrigger>
                                    <MonitorCog />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>System</p>
                                </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </ToggleGroupItem>
                    </ToggleGroup>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </ClientOnly>
</template>
