/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string
  readonly VITE_GRAPHQL_URL: string
  readonly VITE_NODE_ENV: string
//   readonly SENTRY_AUTH_TOKEN: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}