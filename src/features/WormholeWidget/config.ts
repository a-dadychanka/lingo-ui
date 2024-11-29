import { type WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect';
import { APP_CONFIG } from '@/settings';

export const WORMHOLE_WIDGET_CONFIG: WormholeConnectConfig = {
  tokensConfig: {
    LINGO: {
      key: 'LINGO',
      symbol: 'LINGO',
      nativeChain: 'BaseSepolia',
      // wrappedAsset: APP_CONFIG.LINGO_SOL_ADDRESS,
      tokenId: {
        chain: 'BaseSepolia',
        address: APP_CONFIG.LINGO_BASE_ADDRESS,
      },
      icon: '/$LINGO.svg',
      // TODO: Replace with actual value for LINGO coin
      coinGeckoId: '',
      decimals: 9,
    },
  },
  wrappedTokens: {
    LINGO: {
      Solana: APP_CONFIG.LINGO_SOL_ADDRESS,
    },
  },
  network: APP_CONFIG.WORMHOLE_NETWORK,
  chains: ['BaseSepolia', 'Base', 'Solana'],
  rpcs: {
    Solana: APP_CONFIG.SOLANA_PROVIDER,
    Base: APP_CONFIG.BASE_PROVIDER,
    BaseSepolia: APP_CONFIG.BASE_TESTNET_PROVIDER,
  },
} as const;
