<script lang="ts" setup>
import AppLayout from '@/layouts/AppLayout.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Newspaper, SquareTerminal, Info } from 'lucide-vue-next';



</script>
<template>
    <app-layout>
        <Container class="flex gap-5 pt-2">
            <div class="w-3/12 bg-white dark:bg-zinc-700 px-2 rounded-md pb-6">
                <ProfileResum />
            </div>

            <div class="w-6/12  p-2 d">
                <ClientOnly>
                    <Tabs default-value="career">
                        <TabsList class="w-full flex bg-white dark:bg-zinc-700 rounded-m">
                            <TabsTrigger value="feed" class="flex-1 flex items-center gap-2">
                                <Newspaper/>
                                <span>Feed</span>
                            </TabsTrigger>
                            <TabsTrigger value="career" class="flex-1 flex items-center gap-2">
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
                        <TabsContent value="career">
                            <Career />
                        </TabsContent>
                        <TabsContent value="about" class="py-2">
                            <About />
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

