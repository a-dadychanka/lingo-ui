export const APP_CONFIG = {
  LINGO_SOL_ADDRESS: import.meta.env.VITE_LINGO_SOLANA_ADDRESS,
  SOLANA_PROVIDER: import.meta.env.VITE_SOLANA_PROVIDER_URL,
  ETH_PROVIDER: import.meta.env.VITE_ETH_PROVIDER_URL as string,
  BSC_PROVIDER: import.meta.env.VITE_BSC_PROVIDER_URL as string,
} as const;
