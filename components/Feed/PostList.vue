<script setup lang="ts">
import { useQuery, useQueryClient } from '@tanstack/vue-query';
import { LoaderCircle } from 'lucide-vue-next';
import PostCard from './PostCard.vue';
import type { Posts } from '~/@types/Posts';

const queryClient = useQueryClient()
const token = useAuthToken()

interface PostResponse {
    posts: {
        data: Posts[]
    }
}

const fetchPosts = async():Promise<PostResponse> => 
    await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) =>
        response.json(),
    )

const { isLoading, isError, data, error } = useQuery({
  queryKey: ['posts'],
  queryFn: fetchPosts, 
})

</script>

<template>
    <div class="py-2">
        <div 
            v-if="isLoading"
            class="w-full py-4 flex justify-center items-center"
        >
            <LoaderCircle 
                :size="30"
                class="animate-spin"
            />
        </div>
        <div 
            v-else-if="isError"
            class="text-red-500"
        >
            Error: {{ error?.message }}
        </div>
        <div
            class="w-full flex flex-col items-start space-y-2"
            v-else
        >
            <div 
                v-for="post in data?.posts.data"
                :key="post.id"
                class="w-full"
            >
                <PostCard 
                    :post="post"
                />
            </div>
        </div>
    </div>
</template>

