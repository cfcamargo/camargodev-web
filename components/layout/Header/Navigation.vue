<script setup lang="ts">

</script>
<template>
    <nav class="flex flex-row space-x-4 items-center text-white">
        <NuxtLink to="/">
            Página Inicial
        </NuxtLink>

        <NuxtLink to="/">
            Projetos
        </NuxtLink>

        <NuxtLink to="/">
            Contato
        </NuxtLink>

        <div>
            <UserMenu />
        </div>
    </nav>
</template>