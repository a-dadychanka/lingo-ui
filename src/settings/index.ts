export type WormholeNetwork = 'Mainnet' | 'Testnet' | 'Devnet';

export const APP_CONFIG = {
  LINGO_SOL_ADDRESS: import.meta.env.VITE_LINGO_SOLANA_ADDRESS as string,
  LINGO_BASE_ADDRESS: import.meta.env.VITE_LINGO_BASE_ADDRESS as string,

  // Providers
  SOLANA_PROVIDER: import.meta.env.VITE_SOLANA_PROVIDER_URL as string,
  BASE_PROVIDER: import.meta.env.VITE_BASE_PROVIDER_URL as string,
  BASE_TESTNET_PROVIDER: import.meta.env.VITE_BASE_TESTNET_PROVIDER_URL as string,

  WORMHOLE_NETWORK: import.meta.env.VITE_WORMHOLE_NETWORK as WormholeNetwork,
} as const;
