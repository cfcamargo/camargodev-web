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
            icon : '/icons/piniajs.svg',
            url : 'https://pinia.vuejs.org/',
            description : 'Pinia is a store library for Vue, it allows you to share a state across components/pages. If you are familiar with the Composition API, you might be thinking you can already share a global state with a simple export const state = reactive({}).'
        },
        adonisjs: {
            name: 'Adonis JS',
            icon : 'https://seeklogo.com/images/A/adonis-logo-56A7844207-seeklogo.com.png',
            url : 'https://adonisjs.com/',
            description : 'AdonisJS is a TypeScript-first web framework for building web apps and API servers. It comes with support for testing, modern tooling, an ecosystem of official packages, and more.'
        },
        typescript : {
            name: 'Typescript',
            icon : 'https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png',
            url: 'https://www.typescriptlang.org/',
            description: 'TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.'
        },
        vuetify: {
            name: 'Vuetify',
            icon : 'https://seeklogo.com/images/V/vuetify-logo-CC59D65FD3-seeklogo.com.png',
            url: 'https://vuetifyjs.com/en/',
            description : 'Vuetify is a no design skills required Open Source UI Library with beautifully handcrafted Vue Components.'
        },
        quasar: {
            name: 'Quasar',
            icon: 'https://cdn.quasar.dev/logo-v2/512/logo.png',
            url: 'https://quasar.dev/',
            description : 'Quasar is an MIT licensed open-source Vue.js based framework, which allows you as a web developer to quickly create responsive++ websites/apps in many flavours:'
        },
        chadcn: {
            name: 'Chad/CN',
            icon : 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4',
            url : 'https://www.shadcn-vue.com/',
            description : 'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.'
        },
        nodejs: {
            name: 'NodeJS',
            icon : 'https://seeklogo.com/images/N/nodejs-logo-54107C5EDD-seeklogo.com.png',
            url : 'https://nodejs.org/en',
            description : 'Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.'
        },
        mysql: {
            name: 'MySQL',
            icon : 'https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.png',
            url : 'https://www.mysql.com/',
            description : 'MySQL is a widely-used open-source relational database management system (RDBMS). It uses SQL (Structured Query Language) to manage and manipulate data. Known for its speed, reliability, and ease of use, MySQL is ideal for web applications, e-commerce, and other online services.'
        },
        postgres: {
            name: 'Postgres SQL',
            icon : 'https://seeklogo.com/images/P/postgraphile-logo-E38D86EF00-seeklogo.com.png',
            url : 'https://www.postgresql.org/',
            description : 'PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.'
        },
        supabase: {
            name: 'Supabase',
            icon : 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png',
            url : 'https://supabase.com/',
            description : 'Supabase is an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.'
        },
        docker: {
            name: 'Docker',
            icon : 'https://seeklogo.com/images/D/docker-logo-CF97D0124B-seeklogo.com.png',
            url : 'https://www.docker.com/',
            description : 'Docker helps developers build, share, run, and verify applications anywhere — without tedious environment configuration or management.'
        },
        storybook: {
            name: 'Storybook',
            icon : 'https://user-images.githubusercontent.com/18430599/38112659-491f9112-3368-11e8-8b65-1725f19a61fa.png',
            url : 'https://storybook.js.org/',
            description : 'Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation.'
        },
        cypress: {
            name: 'Cypress',
            icon : 'https://docs.cypress.io/img/logo/cypress-logo-circle-dark.png',
            url : 'https://www.cypress.io/',
            description : 'With Cypress, you can easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds.'
        },
        figma: {
            name: 'Figma',
            icon : 'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png',
            url : 'https://www.figma.com/pt-br//',
            description : 'Figma helps design and development teams build great products together.'
        },
        ionic: {
            name: 'Ionic',
            icon : 'https://cdn.iconscout.com/icon/free/png-256/free-ionic-3628853-3029993.png',
            url : 'https://ionicframework.com/',
            description : 'An open source mobile UI toolkit for building modern, high quality cross-platform mobile apps from a single code base in Vue.'
        },
    }

    return {
        tecnologies
    }
}
