
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = Math.max(1 - scrollPosition / 700, 0);
        const translateY = scrollPosition * 0.3;
        
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-20"></div>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-4000" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')", transform: 'scale(1.05)' }}>
      </div>
      
      {/* Hero Content */}
      <div 
        ref={heroRef}
        className="relative h-full w-full flex flex-col justify-center items-center text-center z-30 px-4 sm:px-6 lg:px-8"
      >
        <div className={`max-w-4xl transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-white font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8 animate-fade-in">
            Crafting Timeless, Elegant Spaces with Expertise and Vision
          </h1>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8">
            <Link 
              to="/portfolio" 
              className="button-primary bg-white hover:bg-white/95 text-primary inline-flex items-center group"
            >
              Explore Our Portfolio
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/contact" 
              className="button-secondary bg-transparent border-white text-white hover:bg-white/10"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
