<script lang="ts" setup>
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card'

const props = defineProps<{
    url: string,
    description: string,
    name: string,
    icon: string
}>()
</script>

<template>
    <ClientOnly>
        <HoverCard>
            <HoverCardTrigger>
                <a :href="props.url" target="_blank" class="flex justify-center items-center bg-zinc-900 w-8 h-8 p-2 rounded">
                    <NuxtImg :src="props.icon" class="w-full"/>
                </a>
            </HoverCardTrigger>
            <HoverCardContent>
                <div>
                    <span class="font-bold text-xl text-green-600">
                        {{ props.name }}
                    </span>
                    <p class="mt-2">
                        {{  props.description }}
                    </p>
                </div>
            </HoverCardContent>
        </HoverCard>
    </ClientOnly>
</template>
