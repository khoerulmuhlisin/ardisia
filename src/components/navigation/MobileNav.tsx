
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, X, Menu, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const MobileNav = ({ mobileMenuOpen, setMobileMenuOpen }: MobileNavProps) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  
  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveSection(null);
  }, [location, setMobileMenuOpen]);
  
  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };
  
  return (
    <>
      <button
        className="lg:hidden z-50 relative p-2 rounded-md hover:bg-gray-100 transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6 text-primary animate-fade-in" />
        ) : (
          <Menu className="w-6 h-6 text-primary" />
        )}
      </button>

      {/* Backdrop overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-[85%] max-w-[320px] bg-white z-40 shadow-xl transition-all duration-300 ease-in-out transform",
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-90"
        )}
      >
        <div className="h-full flex flex-col py-6 px-6 overflow-y-auto">
          <div className="flex justify-end mb-6">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <nav className="space-y-6 staggered-fade-in">
            <Link
              to="/"
              className="block text-lg font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Portfolio Section */}
            <div className="space-y-3">
              <button 
                onClick={() => toggleSection('portfolio')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-base font-semibold text-foreground">
                  Portfolio
                </h3>
                <ChevronRight className={cn(
                  "w-4 h-4 text-muted-foreground transition-transform duration-200",
                  activeSection === 'portfolio' ? "rotate-90" : ""
                )} />
              </button>
              
              <div className={cn(
                "pl-2 space-y-3 border-l border-border overflow-hidden transition-all duration-300",
                activeSection === 'portfolio' ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}>
                <Link
                  to="/?category=Landscape#portfolio"
                  className="block hover:text-primary transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Landscape Design
                </Link>
                <Link
                  to="/?category=Interior#portfolio"
                  className="block hover:text-primary transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Interior Design
                </Link>
                <Link
                  to="/?category=3D Visualization#portfolio"
                  className="block hover:text-primary transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  3D Visualization
                </Link>
                <Link
                  to="/?category=Mixed#portfolio"
                  className="block hover:text-primary transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Mixed Projects
                </Link>
              </div>
            </div>
            
            {/* Services Section */}
            <div className="space-y-3">
              <button 
                onClick={() => toggleSection('services')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-base font-semibold text-foreground">
                  Services
                </h3>
                <ChevronRight className={cn(
                  "w-4 h-4 text-muted-foreground transition-transform duration-200",
                  activeSection === 'services' ? "rotate-90" : ""
                )} />
              </button>
              
              <div className={cn(
                "pl-2 space-y-3 border-l border-border overflow-hidden transition-all duration-300",
                activeSection === 'services' ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}>
                <Link
                  to="/services/landscape-architecture"
                  className="block hover:text-primary transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Landscape Architecture
                </Link>
                <Link
                  to="/services/interior-design"
                  className="block hover:text-primary transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Interior Design
                </Link>
                <Link
                  to="/services/3d-visualization"
                  className="block hover:text-primary transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  3D Visualization & Animation
                </Link>
              </div>
            </div>
            
            <Link
              to="/about"
              className="block text-lg font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            <Link
              to="/contact"
              className="block text-lg font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="mt-auto pt-6 flex justify-between items-center">
              <button className="text-primary p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <button className="text-sm font-medium text-primary">EN</button>
                <span className="text-muted-foreground">/</span>
                <button className="text-sm text-muted-foreground hover:text-primary transition-colors">ID</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
