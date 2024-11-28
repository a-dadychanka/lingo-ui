import WormholeWidget from './features/WormholeWidget/WormholeWidget';
import './App.css';

function App() {
  return (
    <div className={'h-full w-full bg-gradient-to-b from-gray-800 to-gray-950'}>
      <div className={'h-full w-full flex justify-center items-center'}>
        <WormholeWidget />
      </div>
    </div>
  );
}

export default App;
