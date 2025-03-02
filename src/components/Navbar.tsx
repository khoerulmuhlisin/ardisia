
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavLogo from './navigation/NavLogo';
import DesktopNav from './navigation/DesktopNav';
import MobileNav from './navigation/MobileNav';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/90 shadow-sm backdrop-blur-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-width px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <NavLogo />
        
        <DesktopNav 
          activeDropdown={activeDropdown} 
          toggleDropdown={toggleDropdown} 
        />
        
        <MobileNav 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />
      </div>
    </header>
  );
};

export default Navbar;
