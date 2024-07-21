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
    size?: 'large' | 'small' 
}>()

const defineSize = computed(() => {
    if(props.size && props.size === 'large'){
        return 'w-12 h-12'
    }

    return 'w-8 h-8' 
})

</script>

<template>
    <ClientOnly>
        <HoverCard>
            <HoverCardTrigger class="flex flex-col items-center justify-center">
                <a 
                    :href="props.url" 
                    target="_blank" 
                    :class="defineSize"
                    class="flex items-center bg-primary dark:bg-zinc-900 p-2 rounded flex-col justify-center"
                >
                    <NuxtImg :src="props.icon" class="w-full"/>
                </a>
                <span v-if="props.size === 'large'" class="text-[10px]">
                    {{ props.name }}
                </span>
            </HoverCardTrigger>
            <HoverCardContent>
                <div>
                    <span class="font-bold text-xl text-green-600">
                        {{ props.name }}
                    </span>
                    <p class="mt-2 mb-4">
                        {{  props.description }}
                    </p>

                    <a 
                        :href="props.url" 
                        target="_blank"
                        class="underline"
                    >
                        Ver Mais
                    </a>
                </div>
            </HoverCardContent>
        </HoverCard>
    </ClientOnly>
</template>
