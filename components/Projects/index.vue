<script lang="ts" setup>

</script>

<template>
    <div class="p-2 rounded bg-white dark:bg-zinc-700">
        <h2>Projetos</h2>
        <div class="grid grid-cols-3 gap-2 mt-4">
            <div 
                v-for="object in 9"
                class="bg-zinc-800 aspect-square w-full rounded grid place-content-center"
            >
                {{ object }}
            </div>
        </div>
    </div>
</template>

