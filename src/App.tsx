import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useMediaQuery from '@/hooks/useMediaQuery';
import { LineGradient } from '@/components';
import { Navbar, Projects, Contact, Footer, DotGroup, Landing, MySkills, Technologies } from './scenes';
import CV from './cv/CV';
import "./index.css";

const Home = () => {
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
  }, [])

  return (
    <>
      <Navbar isTopOfPage={isAboveMediumScreens} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient width="w-full" />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>

      <LineGradient width="w-full" />
      <div className="w-5/6 mx-auto">
        <Technologies />
      </div>

      <LineGradient width="w-full" />
      <div className="w-5/6 mx-auto">
        <MySkills />
      </div>

      <LineGradient width="w-full" />
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>

      <Footer />
    </>
  )
};

const App = () => {
  return (
    <div className="h-full bg-deep-blue">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </div>
  )
}

export default App
