import { useState, useEffect } from 'react';
import { DotGroup, Landing } from './scenes';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Navbar } from './scenes';
import './App.css'

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isAboveMediumScreens} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
    </div>
  )
}

export default App
