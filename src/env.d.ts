/// <reference types="astro/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly MAILJET_PUBLIC_KEY: string;
  readonly MAILJET_SECRET_KEY: string;
  readonly MAILJET_API: string;
  readonly INQUIRY_MAIL_FROM: string;
  readonly INQUIRY_MAIL_TO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}