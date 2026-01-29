import { useEffect, useState } from "react";

const PageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 30;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading && progress === 100) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-9999 h-1 bg-transparent">
      <div
        className="h-full bg-linear-to-r from-yellow-400 via-orange-400 to-yellow-400 transition-all duration-300 ease-out shadow-lg"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 10px rgba(250, 204, 21, 0.8)",
        }}
      />
    </div>
  );
};

export default PageLoader;
