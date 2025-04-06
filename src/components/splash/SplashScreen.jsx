import { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [curtainHeight, setCurtainHeight] = useState("100vh");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Incrementar el progreso de 0 a 100 durante 1 segundo
    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prevProgress + 2; // Incrementar 2% cada vez
      });
    }, 20); // 50 pasos para llegar a 100% en 1 segundo

    // Después de completar la barra de progreso, comenzamos a levantar la cortina
    setTimeout(() => {
      setCurtainHeight("0vh"); // La cortina se levanta (altura 0)
      
      // Esperamos a que termine la animación antes de llamar onComplete
      setTimeout(() => {
        onComplete();
      }, 800); // Duración de la transición + un pequeño margen
    }, 1000);

    return () => {
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div 
      className="fixed inset-0 w-full bg-blue-900 z-50 flex flex-col items-center justify-center"
      style={{ 
        height: curtainHeight, 
        transition: "height 0.8s ease-in-out"
      }}
    >
      {/* Contenedor de la barra de progreso con borde para mayor visibilidad */}
      <div className="w-64 bg-gray-800 rounded-full h-6 overflow-hidden border-2 border-white">
        {/* Barra de progreso con color brillante */}
        <div 
          className="bg-azulino h-full rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* Texto de porcentaje con tamaño más grande */}
      <div className="text-white text-lg font-bold mt-3">{progress}%</div>
    </div>
  );
};

export default SplashScreen;