<script lang="ts" setup>
import { useTecnologies } from '@/composables/useTecnologies'

const { tecnologies } = useTecnologies()

const tecnologiesList = ref([
    'vuejs', 'nuxtjs', 'tailwindcss', 'pinia', 'adonisjs'
])

</script>
<template>
    <div class="w-full flex justify-center transform -translate-y-1/2">
        <Avatar/>
    </div>

    <div class="w-full flex flex-col gap-2 items-center -mt-[60px]">
        <h2 class="font-semibold text-2xl">
            Cristian Camargo
        </h2>

        <div class="flex flex-col items-center">
            <p>Desenvolvedor Front End na</p>
            <a href="https://cygniagroscience.com/home" target="_blank">
                <span class="text-green-600">Cygni Agroscience</span>
            </a>
        </div>


        <div class="flex gap-2 items-center mt-4">
            <Tecnology 
                v-for="(tecnology, index) in tecnologiesList" 
                :key="index"
                :name="tecnologies[tecnology].name"
                :description="tecnologies[tecnology].description"
                :url="tecnologies[tecnology].url"
                :icon="tecnologies[tecnology].icon"
            />
        </div>
    </div>
</template>

