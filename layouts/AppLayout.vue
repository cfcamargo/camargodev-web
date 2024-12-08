<script lang="ts" setup>
import Toaster from '@/components/ui/toast/Toaster.vue'
</script>
<template>
    <Header />
    <Cover />
    <main class="bg-zinc-50 dark:bg-zinc-900">
        <slot/>
        <Toaster />
    </main>
</template>

