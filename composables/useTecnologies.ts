interface Technology {
    name: string;
    ico: string;
    url: string;
    description: string;
}

interface Technologies {
    [key: string]: Technology;
}

export function useTecnologies() {
    const tecnologies: Technologies = {
        vuejs: {
            name: 'vue',
            ico : 'iconVue',
            url: 'https://vuejs.org/',
            description: 'Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.'
        },
        nuxtjs:{
            name: 'nuxt',
            ico : 'iconNuxt',
            url : 'https://nuxt.com/',
            description : 'Nuxt is an open source framework that makes web development intuitive and powerful. Create performant and production-grade full-stack web apps and websites with confidence.'
        },
        tailwindcss: {
            name: 'tailwind',
            ico : 'iconTailwind',
            url : 'https://tailwindcss.com/',
            description : 'Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.'
        },
        pinia: {
            name: 'pinia',
            ico : 'iconPinia',
            url : 'https://pinia.vuejs.org/',
            description : 'Pinia is a store library for Vue, it allows you to share a state across components/pages. If you are familiar with the Composition API, you might be thinking you can already share a global state with a simple export const state = reactive({}).'
        },
        adonisjs: {
            name: 'adonis',
            ico : 'iconAdonis',
            url : 'https://adonisjs.com/',
            description : 'AdonisJS is a TypeScript-first web framework for building web apps and API servers. It comes with support for testing, modern tooling, an ecosystem of official packages, and more.'
        }
    }


    return {
        tecnologies
    }
}
