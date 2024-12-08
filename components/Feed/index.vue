<script lang="ts" setup>
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { PencilLine, Image, LoaderCircle } from 'lucide-vue-next'
import { useToast } from "~/components/ui/toast/use-toast";
import PostList from './PostList.vue';

const token = useAuthToken()
const { isAuthenticated } = useAuthCheck()

const isOpen = ref(false)
const loading = ref(false)

const postTitle = ref<string>('')
const postContent = ref<string>('')
const midia = ref<File | null>(null)
const fileInputRef = ref<HTMLInputElement | null>(null);

const { toast } = useToast();

const triggerFileInput = () => {
    fileInputRef.value?.click();
};

const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
        midia.value = file;
    } else {
        toast({
            description: "Preencha o Titulo, e o Conteudo da mensagem",
            variant: "destructive",
        });
    }
};


const handleSubmit = async() => {
    const formData = new FormData();
    if(midia.value && postContent.value !== ''){
        formData.append("title", postTitle.value);
        formData.append("content", postContent.value);
        formData.append("file", midia.value);
    }

    loading.value = true

    try {
        const response: any = await $fetch(
            `${import.meta.env.VITE_API_URL}/posts`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            },
        );

        if (response.error) {
            console.log(response);
            toast({
                description: response.error,
                variant: "destructive",
            });
            return;
        }

        postTitle.value = '',
        postContent.value = '',
        midia.value = null
        isOpen.value = false;
        toast({
            description: "Post Criado com sucesso",
        });

    } catch(e){
        console.log(e)
    } finally {
        loading.value = false
    }
}

</script>
<template>
    <Card v-if="isAuthenticated()">
        <CardContent class="p-4">
            <Dialog v-model:open="isOpen">
                <DialogTrigger class="w-full">
                    <div class="w-full rounded-full p-4 border border-zinc-700 flex justify-between bg-zinc-100 dark:bg-zinc-800 hover:brightness-110 cursor-pointer">
                        <span class="text-zinc-900 dark:text-white">Escreva um Post</span>
                        <PencilLine />
                    </div>
                </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        O que voce esta pensando ?
                    </DialogTitle>
                    <DialogDescription>
                        Insira uma midia, e conte  o que esta pensando hoje.
                    </DialogDescription>
                </DialogHeader>
                <div class="flex flex-col space-y-4">
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="title">Titulo</Label>
                        <Input 
                            v-model="postTitle"
                            id="title" 
                            type="title" 
                            placeholder="Titulo" 
                        />
                    </div>
                    <div class="grid w-full gap-1.5">
                        <Label for="content">Conteudo</Label>
                        <Textarea 
                            v-model="postContent"
                            id="contet" 
                            placeholder="Escreva seu post." 
                            rows="10" 
                        />
                    </div>
                    <div class="relative">
                            <input
                                type="file"
                                accept="image/*"
                                @change="handleFileChange"
                                ref="fileInputRef"
                                class="sr-only"
                                id="audio-upload"
                                aria-label="Selecionar arquivo de áudio"
                            />
                            <Button
                                @click="triggerFileInput"
                                variant="outline"
                                class="p-6"
                            >
                                <Image />
                            </Button>
                        </div>
                    <div>
                        
                        
                    </div>
                </div>
                <DialogFooter>
                   <Button @click="handleSubmit">
                        <LoaderCircle 
                            v-if="loading"
                            class="animate-spin"    
                        />
                        <span v-else>
                            Criar Post
                        </span>
                   </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        </CardContent>
    </Card>
    <PostList />
</template>

