import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GenreLoaderProps {
  onComplete: () => void;
}

export default function GenreLoader({ onComplete }: GenreLoaderProps) {
  const genres = ['AI/ML', 'Full Stack', 'NLP', 'Deep Learning', 'Web3'];
  const [currentGenre, setCurrentGenre] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const genreInterval = setInterval(() => {
      setCurrentGenre(prev => {
        if (prev < genres.length - 1) {
          return prev + 1;
        }
        clearInterval(genreInterval);
        return prev;
      });
    }, 900);

    const completeTimer = setTimeout(() => {
      setShowLoader(false);
      setTimeout(onComplete, 500);
    }, 5000);

    return () => {
      clearInterval(genreInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!showLoader) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="genre-loader"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-primary rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.2
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGenre}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
            data-testid={`genre-text-${genres[currentGenre]}`}
          >
            <h1
              className="text-5xl md:text-7xl font-bold tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #5227FF 0%, #FF9FFC 50%, #B19EEF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(82, 39, 255, 0.5)'
              }}
            >
              {genres[currentGenre]}
            </h1>
            <div className="mt-4 flex justify-center gap-2">
              {genres.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 w-12 rounded-full transition-all duration-300 ${
                    idx === currentGenre ? 'bg-purple-primary' : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
