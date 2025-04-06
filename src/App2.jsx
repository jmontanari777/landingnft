import { useState } from 'react'
 
import './App.css'
import Navbar from './components/navbar/Navbar'
import SplashScreen from './components/splash/SplashScreen'
import TypewriterText from './components/text/TypewriterText'

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [startTypewriter, setStartTypewriter] = useState(false);

  // Función que se llama cuando la cortina termina de levantarse
  const handleSplashComplete = () => {
    setShowSplash(false);
    // Iniciamos el efecto de máquina de escribir después de que la cortina desaparece completamente
    setStartTypewriter(true);
  };

  return (
   <div>
       
 
    </div>
  );
}

export default App;