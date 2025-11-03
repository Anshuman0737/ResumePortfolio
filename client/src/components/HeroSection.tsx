import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, FileText } from 'lucide-react';
import LiquidEther from './LiquidEther';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY;
        sectionRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden" data-testid="hero-section">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther colors={['#5227FF', '#FF9FFC', '#B19EEF']} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Content */}
      <div ref={sectionRef} className="relative z-10 h-full flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          {/* Glassmorphic Card */}
          <div 
            className="relative mx-auto max-w-md px-8 py-12 rounded-lg"
            style={{
              background: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(82, 39, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(82, 39, 255, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
            }}
            data-testid="hero-card"
          >
            {/* Floating Animation Container */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              {/* Initials */}
              <div 
                className="mx-auto w-32 h-32 mb-6 rounded-full flex items-center justify-center text-6xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #5227FF 0%, #FF9FFC 100%)',
                  boxShadow: '0 0 60px rgba(82, 39, 255, 0.6)'
                }}
                data-testid="hero-initials"
              >
                AP
              </div>

              {/* Name */}
              <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Anshuman Pandey
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-lavender mb-2" data-testid="hero-tagline">
                AI/ML Enthusiast • Full Stack Developer
              </p>

              {/* Location */}
              <p className="text-sm text-gray-400 mb-8" data-testid="hero-location">
                📍 Bennett University • Noida, India
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-testid="hero-buttons">
                <Button
                  asChild
                  size="lg"
                  className="bg-purple-primary hover:bg-purple-primary/90 text-white font-medium rounded-md transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-primary/50"
                  data-testid="button-resume"
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />
                    View Resume
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-purple-primary text-white hover:bg-purple-primary/20 font-medium rounded-md backdrop-blur-sm transition-all hover:scale-105"
                  data-testid="button-email"
                >
                  <a href="mailto:pandeyanshuman212@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        data-testid="scroll-indicator"
      >
        <ChevronDown className="w-8 h-8 text-purple-primary" />
      </motion.div>
    </section>
  );
}
