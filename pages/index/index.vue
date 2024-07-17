<script lang="ts" setup>
import AppLayout from '@/layouts/AppLayout.vue'
import { useTecnologies } from '@/composables/useTecnologies'

const { tecnologies } = useTecnologies()

const tecnologiesList = ref([
    'vuejs', 'nuxtjs', 'tailwindcss', 'pinia', 'adonisjs'
])

</script>
<template>
    <app-layout>
        <Container class="flex gap-5 pt-2">
            <div class="w-3/12 bg-white px-2 rounded-md">
                <div class="w-full flex justify-center transform -translate-y-1/2">
                    <Avatar/>
                </div>

                <div class="w-full flex flex-col gap-2 items-center -mt-[60px]">
                    <h2 class="font-semibold text-2xl">
                        Cristian Camargo
                    </h2>

                    <div class="flex flex-col items-center">
                        <p>Desenvolvedor Full Stack</p>
                        <span class="text-xs text-green-600">Cygni Agroscience</span>
                    </div>


                    <div>
                        <Tecnology 
                            v-for="(tecnology, index) in tecnologiesList" 
                            :key="index"
                            :name="tecnologies[tecnology].name"
                            :description="tecnologies[tecnology].description"
                            :url="tecnologies[tecnology].url"
                        >
                            <a>{{  tecnologies[tecnology].name }}</a>
                        </Tecnology>
                    </div>
                </div>
            </div>

            <div class="w-6/12">

            </div>

            <div class="w-3/12" >

            </div>
        </Container>
    </app-layout>
</template>

