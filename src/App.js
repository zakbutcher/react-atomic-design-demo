import React, { useEffect, useState } from 'react';
import { WatchLater, Home, Trending } from './6_pages';

const pages = [WatchLater, Home, Trending];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ActivePage, setActivePage] = useState(pages[activeIndex]);
  const switchPage = () => {
    if (activeIndex === pages.length - 1) {
      console.log('setting active index to 0');
      setActiveIndex(0);
      return;
    }
    setActiveIndex(activeIndex + 1);
    return;
  };

  useEffect(() => {
    setActivePage(pages[activeIndex]);
  }, [activeIndex]);

  return <div onClick={switchPage}>{ActivePage}</div>;
}

export default App;
