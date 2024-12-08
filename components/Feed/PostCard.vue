<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'


</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>
                Titulo do Card
            </CardTitle>
            <CardDescription>
                08/12/2024
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi non vel enim aperiam veniam iusto, placeat, et natus labore pariatur blanditiis, dolores obcaecati quas? Laudantium vitae in illo fuga!

                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium soluta, expedita itaque inventore cupiditate odio qui esse sit facere odit reprehenderit nisi, a dicta eligendi impedit nulla iusto, quas at?

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta laborum nemo doloribus cumque, animi atque autem dolore beatae vitae amet, illo, quidem maxime. Dolores quasi animi aliquam labore id!
            </div>
            <NuxtImg 
                src="/cover.png"
                class="w-full"
            />
        </CardContent>
    </Card>
</template>

