<script lang="ts" setup>
import AppLayout from '@/layouts/AppLayout.vue'
import { useTecnologies } from '@/composables/useTecnologies'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Newspaper, SquareTerminal, Info } from 'lucide-vue-next';

const { tecnologies } = useTecnologies()

const tecnologiesList = ref([
    'vuejs', 'nuxtjs', 'tailwindcss', 'pinia', 'adonisjs'
])

</script>
<template>
    <app-layout>
        <Container class="flex gap-5 pt-2">
            <div class="w-3/12 bg-white dark:bg-zinc-700 px-2 rounded-md pb-6">
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


                    <div class="flex gap-2 items-center">
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
            </div>

            <div class="w-6/12 bg-white dark:bg-zinc-700 p-2 rounded-md">
                <ClientOnly>
                    <Tabs default-value="feed">
                        <TabsList class="w-full flex">
                            <TabsTrigger value="feed" class="flex-1 flex items-center gap-2">
                                <Newspaper/>
                                <span>Feed</span>
                            </TabsTrigger>
                            <TabsTrigger value="carrer" class="flex-1 flex items-center gap-2">
                                <SquareTerminal />
                                <span>Carreira</span>
                            </TabsTrigger>
                            <TabsTrigger value="about" class="flex-1 flex items-center gap-2">
                                <Info />
                                <span>Sobre Mim</span>
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="feed">
                            Make changes to your account here.
                        </TabsContent>
                        <TabsContent value="carrer">
                            Change your password here.
                        </TabsContent>
                        <TabsContent value="about">
                            Change your password here.
                        </TabsContent>
                    </Tabs>
                </ClientOnly>
            </div>

            <div class="w-3/12" >
                <Projects />
            </div>
        </Container>
    </app-layout>
</template>

