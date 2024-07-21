<script lang="ts" setup>
import { useTecnologies } from '@/composables';
const { tecnologies } = useTecnologies()

const frontEndList = ref([
    'vuejs',
    'nuxtjs',
    'tailwindcss',
    'pinia',
    'typescript',
    'chadcn',
    'vuetify',
    'quasar'
])
const backEndList = ref([
    'nodejs',
    'adonisjs',
    'mysql',
    'postgres',
    'supabase'
])
const utilsList = ref([
    'docker',
    'figma',
    'storybook',
    'cypress',
    'ionic',
])

</script>
<template>
    <div class="flex flex-col gap-4 py-4 text-justify bg-white dark:bg-zinc-700 p-4 rounded-md">
        <h3 class="font-bold text-2xl">Minhas Skills</h3>

        <div class="mt-6">
            <h4 class="font-bold text-xl">Front End</h4>

            <div class="flex gap-4 mt-4 flex-wrap">
                <Tecnology 
                    v-for="(tecnology, index) in frontEndList" 
                    :key="index"
                    :name="tecnologies[tecnology].name"
                    :description="tecnologies[tecnology].description"
                    :url="tecnologies[tecnology].url"
                    :icon="tecnologies[tecnology].icon"
                    :size="'large'"
                />
            </div>
        </div>

        <div class="mt-6">
            <h4 class="font-bold text-xl">Back End</h4>

            <div class="flex gap-4 mt-4 flex-wrap">
                <Tecnology 
                    v-for="(tecnology, index) in backEndList" 
                    :key="index"
                    :name="tecnologies[tecnology].name"
                    :description="tecnologies[tecnology].description"
                    :url="tecnologies[tecnology].url"
                    :icon="tecnologies[tecnology].icon"
                    :size="'large'"
                />
            </div>
        </div>

        <div class="mt-6">
            <h4 class="font-bold text-xl">Ferramentas</h4>

            <div class="flex gap-4 mt-4 flex-wrap">
                <Tecnology 
                    v-for="(tecnology, index) in utilsList" 
                    :key="index"
                    :name="tecnologies[tecnology].name"
                    :description="tecnologies[tecnology].description"
                    :url="tecnologies[tecnology].url"
                    :icon="tecnologies[tecnology].icon"
                    :size="'large'"
                />
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-4 py-4 text-justify bg-white dark:bg-zinc-700 p-4 rounded-md mt-4">
        <h3 class="font-bold text-2xl">Soft Skills</h3>

    </div>
</template>
