interface ImportMetaEnv {
    VITE_API_URL: string;  // Adicione suas variáveis de ambiente aqui
    // adicione outras variáveis conforme necessário
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}