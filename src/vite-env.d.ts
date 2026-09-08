/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_CONTACT_WHATSAPP?: string;
  readonly VITE_CONTACT_LOCATION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.PNG" {
  const src: string;
  export default src;
}

