import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const duration = 1000;
    const intervalTime = 100;
    const totalSteps = duration / intervalTime;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setProgress((step / totalSteps) * 100);

      if (step >= totalSteps) {
        clearInterval(interval);
        setAnimateOut(true); // inicia animación
        setTimeout(() => {
          onComplete(); // quita splash después de animar
        }, 3200); // animación dura 3.2s
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-azul flex items-center justify-center transition-all duration-[3200ms] ease-in-out
        ${animateOut ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      <div className="w-1/2">
        <progress
          className="progress progress-primary w-full h-4"
          value={progress}
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default SplashScreen;
