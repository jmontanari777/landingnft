import { useState } from 'react'
 
import './App.css'
import Navbar from './components/navbar/Navbar'
import SplashScreen from './components/splash/SplashScreen'
import TypewriterText from './components/text/TypewriterText'
import Footer from './components/footer/Footer'
import Featured from './components/featured/Featured'

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
    <div className="App bg-azulino min-h-screen">
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <>
          <Navbar />
          <main className="bg-azulino min-h-screen w-full px-4 py-8">

            {startTypewriter && <TypewriterText />}
            <Featured />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}

export default App;