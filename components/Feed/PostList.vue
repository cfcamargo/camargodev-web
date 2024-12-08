<script setup lang="ts">
import { useQuery, useQueryClient, type QueryFunctionContext } from '@tanstack/vue-query';
import { LoaderCircle } from 'lucide-vue-next';
import PostCard from './PostCard.vue';
import type { Posts } from '~/@types/Posts';
import type { MetaDataProps } from '~/@types/MetaDataProps';

const queryClient = useQueryClient()
const token = useAuthToken()

interface PostResponse {
    posts: {
        meta: MetaDataProps
        data: Posts[]
    }
}

const fetchPosts = async ({
    pageParam = 1,  
    signal,
}: QueryFunctionContext): Promise<PostResponse> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/posts?page=${pageParam}`, { 
        method: 'GET', 
        signal,
    });
    const data: PostResponse = await response.json();
    return data;
};

const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  isError,
  error,
} = useInfiniteQuery<PostResponse>({
    initialPageParam: 1,
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage: PostResponse) => {
        return lastPage.posts.meta.nextPageUrl ? lastPage.posts.meta.currentPage + 1 : null;
    },
});

const loadMore = () => {
    if (isFetchingNextPage.value || !hasNextPage.value) return; 
    fetchNextPage();
};

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !isFetchingNextPage.value
    ) {
      loadMore();
    }
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', loadMore);
});

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
                v-for="post in data?.pages.flatMap(page => page.posts.data)"
                :key="post.id"
                class="w-full"
            >
                <PostCard 
                    :post="post"
                />
            </div>
        </div>
        <div 
            v-if="isFetchingNextPage"
            class="w-full py-4 flex justify-center items-center"
        >
            <LoaderCircle 
                :size="30"
                class="animate-spin"
            />
        </div>
    </div>
</template>

