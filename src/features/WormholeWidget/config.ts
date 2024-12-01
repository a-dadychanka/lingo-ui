import {
  type WormholeConnectConfig,
  nttRoutes,
} from '@wormhole-foundation/wormhole-connect';
import { APP_CONFIG } from '@/settings';

export const WORMHOLE_WIDGET_CONFIG: WormholeConnectConfig = {
  tokensConfig: {
    LINGO: {
      key: 'LINGO',
      symbol: 'LINGO',
      // wrappedAsset: APP_CONFIG.LINGO_SOL_ADDRESS,
      nativeChain: 'BaseSepolia',
      tokenId: {
        chain: 'BaseSepolia',
        address: APP_CONFIG.LINGO_BASE_ADDRESS,
      },
      icon: '/$LINGO.svg',
      // TODO: Replace with actual value for LINGO coin
      coinGeckoId: '',
      decimals: 18,
    },
  },
  routes: [
    ...nttRoutes({
      tokens: {
        LINGO: [
          {
            chain: 'BaseSepolia',
            manager: '0x6aD1422533Ff4BC90706511374F3b591dd9A7BaE',
            token: '0x1b0981608F8D5Fb22fa38Bd445a877938cBf90FA',
            transceiver: [
              {
                address: '0xeA8D34fa9147863e486d2d07AB92b8218CF58C0E',
                type: 'wormhole',
              },
            ],
          },
          {
            chain: 'Solana',
            manager: 'keyeyYo2ztQTeeMYkbMG661rSH6xWtSaooAGPRcnrxZ',
            token: 'supq9XjVD9nJHQ5vaTpxA1yXeSUvgWQXzaSkJr6THWv',
            transceiver: [
              {
                address: '0x76516c0b966B4D4cFEFB107755562b16427dAE52',
                type: 'wormhole',
              },
            ],
          },
        ],
      },
    }),
  ],
  wrappedTokens: {
    LINGO: {
      Solana: APP_CONFIG.LINGO_SOL_ADDRESS,
    },
  },
  network: APP_CONFIG.WORMHOLE_NETWORK,
  chains: ['BaseSepolia', 'Solana'],
  rpcs: {
    Solana: APP_CONFIG.SOLANA_PROVIDER,
    Base: APP_CONFIG.BASE_PROVIDER,
    BaseSepolia: APP_CONFIG.BASE_TESTNET_PROVIDER,
  },
} as const;
