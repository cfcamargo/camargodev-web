interface Technology {
    name: string;
    icon: string;
    url: string;
    description: string;
}

interface Technologies {
    [key: string]: Technology;
}

export function useTecnologies() {
    const tecnologies: Technologies = {
        vuejs: {
            name: 'Vue JS',
            icon : 'https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png',
            url: 'https://vuejs.org/',
            description: 'Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.'
        },
        nuxtjs:{
            name: 'Nuxt JS',
            icon : 'https://seeklogo.com/images/N/nuxt-logo-64E0472AA8-seeklogo.com.png',
            url : 'https://nuxt.com/',
            description : 'Nuxt is an open source framework that makes web development intuitive and powerful. Create performant and production-grade full-stack web apps and websites with confidence.'
        },
        tailwindcss: {
            name: 'Tailwind CSS',
            icon : 'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png',
            url : 'https://tailwindcss.com/',
            description : 'Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.'
        },
        pinia: {
            name: 'Pinia',
            icon : 'https://seeklogo.com/images/P/pinia-logo-51BF712FB0-seeklogo.com.png',
            url : 'https://pinia.vuejs.org/',
            description : 'Pinia is a store library for Vue, it allows you to share a state across components/pages. If you are familiar with the Composition API, you might be thinking you can already share a global state with a simple export const state = reactive({}).'
        },
        adonisjs: {
            name: 'Adonis JS',
            icon : 'https://seeklogo.com/images/A/adonis-logo-56A7844207-seeklogo.com.png',
            url : 'https://adonisjs.com/',
            description : 'AdonisJS is a TypeScript-first web framework for building web apps and API servers. It comes with support for testing, modern tooling, an ecosystem of official packages, and more.'
        }
    }


    return {
        tecnologies
    }
}
