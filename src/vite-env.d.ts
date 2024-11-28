/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LINGO_SOLANA_ADDRESS: string;
  readonly VITE_SOLANA_PROVIDER_URL: string;
  readonly VITE_ETH_PROVIDER_URL: string;
  readonly VITE_BSC_PROVIDER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
