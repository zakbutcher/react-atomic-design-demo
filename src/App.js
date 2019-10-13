import React, { useState } from 'react';
import { WatchLater, Home, Trending } from './6_pages';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const switchPage = () => {
    if (activeIndex === 2) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex(activeIndex + 1);
    return;
  };

  console.log('activeIndex: ', activeIndex);

  switch (activeIndex) {
    case 0:
      return <WatchLater togglePage={switchPage} />;
    case 1:
      return <Home togglePage={switchPage} />;
    default:
      return <Trending togglePage={switchPage} />;
  }
}

export default App;
