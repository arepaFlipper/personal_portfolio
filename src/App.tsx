import { useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import './App.css'

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery
  return (
    <>
      App
    </>
  )
}

export default App
