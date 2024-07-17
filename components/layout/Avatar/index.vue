<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
    <div class="w-44 h-44 rounded-full p-1 bg-white">
        <div class=" bg-green-600 w-full h-full rounded-full p-1">
            <Avatar class="w-full h-full rounded-full">
                <AvatarImage src="https://avatars.githubusercontent.com/u/56233205?v=4"/>
            </Avatar>
        </div>
    </div>
</template>
