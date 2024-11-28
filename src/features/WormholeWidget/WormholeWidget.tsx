import WormholeConnect from '@wormhole-foundation/wormhole-connect';
import { WORMHOLE_WIDGET_CONFIG } from './config';
import { WORMHOLE_WIDGET_THEME } from './theme';

const WormholeWidget = () => {
  return (
    <div className={'border-2 bg-black rounded-md border-white px-3'}>
      <WormholeConnect config={WORMHOLE_WIDGET_CONFIG} theme={WORMHOLE_WIDGET_THEME} />
    </div>
  );
};

export default WormholeWidget;
