<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Posts } from '~/@types/Posts';

const { post } = defineProps<{
    post : Posts
}>()

const { convertIsoDateAndTime } = useConvertData()


</script>

<template>
    <Card class="w-full">
        <CardHeader>
            <CardTitle>
                {{ post.title }}
            </CardTitle>
            <CardDescription>
                {{  convertIsoDateAndTime(post.createdAt) }}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="pb-6" v-html="post.content"/>
            <NuxtImg 
                :src="post.midiaPath"
                class="w-full"
            />
        </CardContent>
    </Card>
</template>

