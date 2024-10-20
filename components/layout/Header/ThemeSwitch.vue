<script setup lang="ts">
import { Moon, Sun, MonitorCog } from 'lucide-vue-next';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'

const colorMode = useColorMode()

const changeTheme = (theme: string) => {
    colorMode.preference = theme
}
</script>

<template>
    <ToggleGroup type="single" :model-value="$colorMode.preference">
        <ToggleGroupItem value="dark" @click="changeTheme('dark')">
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
        <ToggleGroupItem value="light" @click="changeTheme('light')">
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
        <ToggleGroupItem value="system" @click="changeTheme('system')">
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
</template>


