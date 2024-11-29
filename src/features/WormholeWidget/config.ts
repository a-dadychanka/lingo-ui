import { type WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect';
import { APP_CONFIG } from '@/settings';

export const WORMHOLE_WIDGET_CONFIG: WormholeConnectConfig = {
  tokensConfig: {
    LINGO: {
      key: 'LINGO',
      symbol: 'LINGO',
      // TODO: Replace with Base once address is available
      nativeChain: 'Solana',
      tokenId: {
        // TODO: Replace with Base once address is available
        chain: 'Solana',
        // TODO: Replace with LINGO_BASE_ADDRESS
        address: APP_CONFIG.LINGO_SOL_ADDRESS,
      },
      icon: '/$LINGO.svg',
      // TODO: Replace with actual value for LINGO coin
      coinGeckoId: 'solana',
      decimals: 9,
    },
  },
  // TODO: Uncomment once address of smart-contract on Base is available
  // wrappedTokens: {
  //   LINGO: {
  //     Solana: APP_CONFIG.LINGO_SOL_ADDRESS,
  //   },
  // },
  network: APP_CONFIG.WORMHOLE_NETWORK,
  chains: [
    'Solana',
    'Base',
    // Base testnet
    'BaseSepolia',
  ],
  rpcs: {
    Solana: APP_CONFIG.SOLANA_PROVIDER,
    Base: APP_CONFIG.BASE_PROVIDER,
    BaseSepolia: APP_CONFIG.BASE_TESTNET_PROVIDER,
  },
} as const;
