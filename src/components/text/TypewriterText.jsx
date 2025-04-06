import { useState, useEffect, useMemo } from 'react';

const TypewriterText = () => {
  const texts = useMemo(() => [
    "Discover",
    "and Collect",
    "rare NTFs",
    "The most secure markrtplace for buying ",
    "and selling unique cripto assets "
  ], []);

  const [displayedText, setDisplayedText] = useState(['', '', '', '', '']);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(0);

  useEffect(() => {
    if (isComplete) return;

    if (currentLine < texts.length) {
      if (currentChar < texts[currentLine].length) {
        const timer = setTimeout(() => {
          setDisplayedText(prevText => {
            const newText = [...prevText];
            newText[currentLine] = texts[currentLine].substring(0, currentChar + 1);
            return newText;
          });
          setCurrentChar(prev => prev + 1);
        }, 10);

        return () => clearTimeout(timer);
      } else {
        // Línea completa, pasar a la siguiente
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }
    } else {
      setIsComplete(true);
    }
  }, [currentLine, currentChar, isComplete, texts]);

  // Efecto para controlar la aparición gradual de la imagen
  useEffect(() => {
    if (isComplete) {
      // Cuando el texto está completo, aumentamos gradualmente la opacidad
      let opacity = 0;
      const fadeInInterval = setInterval(() => {
        opacity += 0.05;
        if (opacity >= 1) {
          clearInterval(fadeInInterval);
          opacity = 1;
        }
        setImageOpacity(opacity);
      }, 50);

      return () => clearInterval(fadeInInterval);
    }
  }, [isComplete]);

  return (
    <div className="p-6 flex flex-row items-center justify-center gap-4">
    {/* Columna de texto */}
    <div className="flex-1 flex flex-col justify-center pl-40">
      {displayedText.map((text, index) => (
        <p 
          key={index} 
          className={`text-left ${index < 3 ? 'text-[42px] font-arial' : 'text-base'}`}
        >
          {text}
        </p>
      ))}
    </div>
      
      {/* Imagen que aparece gradualmente */}
      <div 
        className="transition-opacity duration-500"
        style={{ 
          opacity: imageOpacity,
          transform: "translateX(-150px)" 
        }}
      >
        <img 
          src="/pc.jpg" 
          alt="Imagen" 
          width="360" 
          height="360" 
          className="rounded shadow-lg"
        />
      </div>
    </div>
  );
};

export default TypewriterText;