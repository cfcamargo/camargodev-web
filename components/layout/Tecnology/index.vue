<script lang="ts" setup>
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card'

const props = defineProps<{
    url: string,
    description: string,
    name: string
}>()
</script>

<template>
    <ClientOnly>
        <HoverCard>
            <HoverCardTrigger>
                <a :href="props.url" target="_blank">
                    <slot/>
                </a>
            </HoverCardTrigger>
            <HoverCardContent>
                <div>
                    <span>
                        {{ props.name }}
                    </span>
                    <p>
                        {{  props.description }}
                    </p>
                </div>
            </HoverCardContent>
        </HoverCard>
    </ClientOnly>
</template>
