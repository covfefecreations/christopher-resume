import React, { useState } from 'react';
import Header from './components/Header/Header';
import Dock from './components/Dock/Dock';
import Window from './components/Window';

const App: React.FC = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const toggleWindow = () => {
    setIsWindowOpen(!isWindowOpen);
  };

  return (
    <div className="bg-gray-800 h-screen w-screen">
      <Header />
      <Dock onIconClick={toggleWindow} />
      {isWindowOpen && <Window onClose={toggleWindow} />}
    </div>
  );
};

export default App;