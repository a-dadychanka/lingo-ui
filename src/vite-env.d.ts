/// <reference types="vite/client" />

import { WormholeNetwork } from '@/settings';

interface ImportMetaEnv {
  readonly VITE_LINGO_SOLANA_ADDRESS: string;
  readonly VITE_LINGO_BASE_ADDRESS: string;

  readonly VITE_SOLANA_PROVIDER_URL: string;
  readonly VITE_BASE_PROVIDER_URL: string;
  readonly VITE_BASE_TESTNET_PROVIDER_URL: string;

  readonly VITE_WORMHOLE_NETWORK: WormholeNetwork;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
