import { type WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect';
import { APP_CONFIG } from '@/settings';

export const WORMHOLE_WIDGET_CONFIG: WormholeConnectConfig = {
  tokensConfig: {
    LINGO: {
      key: 'LINGO',
      symbol: 'LINGO',
      nativeChain: 'Solana',
      tokenId: {
        chain: 'Solana',
        address: APP_CONFIG.LINGO_SOL_ADDRESS,
      },
      // TODO: Replace with actual value for LINGO coin
      icon: 'https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756',
      // TODO: Replace with actual value for LINGO coin
      coinGeckoId: 'solana',
      decimals: 9,
    },
  },
  chains: ['Solana', 'Ethereum', 'Bsc'],
  rpcs: {
    Solana: APP_CONFIG.SOLANA_PROVIDER,
    Ethereum: APP_CONFIG.ETH_PROVIDER,
    Bsc: APP_CONFIG.BSC_PROVIDER,
  },
} as const;
