import { DEFAULT_ROUTES, nttRoutes, type WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect';
import { APP_CONFIG } from '@/settings';

export const WORMHOLE_WIDGET_CONFIG: WormholeConnectConfig = {
  tokensConfig: {
    LINGO: {
      key: 'LINGO',
      symbol: 'LINGO',
      nativeChain: 'BaseSepolia',
      wrappedAsset: APP_CONFIG.LINGO_BASE_ADDRESS,
      tokenId: {
        chain: 'BaseSepolia',
        address: APP_CONFIG.LINGO_BASE_ADDRESS,
      },
      icon: '/$LINGO.svg',
      coinGeckoId: '',
      decimals: 18,
    },
  },
   routes: [
     ...DEFAULT_ROUTES,
     ...nttRoutes({
       tokens: {
         LINGO: [
           {
             chain: 'BaseSepolia',
             manager: '0x534C3ee6A744578430b29ccE0628568239F2206B',
             token: '0x1b0981608F8D5Fb22fa38Bd445a877938cBf90FA',
             transceiver: [
               {
                 address: '0x36D804A36ddb96fA81945100e1dB3Fbc26c1c037',
                 type: 'wormhole',
               },
             ],
           },
           {
             chain: 'Solana',
             manager: 'keyeyYo2ztQTeeMYkbMG661rSH6xWtSaooAGPRcnrxZ',
             token: APP_CONFIG.LINGO_SOL_ADDRESS,
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
  chains: ['BaseSepolia', 'Base', 'Solana'],
  rpcs: {
    Solana: APP_CONFIG.SOLANA_PROVIDER,
    Base: APP_CONFIG.BASE_PROVIDER,
    BaseSepolia: APP_CONFIG.BASE_TESTNET_PROVIDER,
  },
} as const;
