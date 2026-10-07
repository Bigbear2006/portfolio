interface ImportMetaEnv {
  readonly VITE_BASE_API_URL: string
  readonly VITE_UMAMI_SCRIPT: string
  readonly VITE_UMAMI_WEBSITE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
