
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import NavDropdown from './NavDropdown';

interface DesktopNavProps {
  activeDropdown: string | null;
  toggleDropdown: (name: string) => void;
}

const DesktopNav = ({ activeDropdown, toggleDropdown }: DesktopNavProps) => {
  const location = useLocation();
  
  const portfolioItems = [
    { to: '/?category=Landscape#portfolio', text: 'Landscape Design' },
    { to: '/?category=Interior#portfolio', text: 'Interior Design' },
    { to: '/?category=3D Visualization#portfolio', text: '3D Visualization' },
    { to: '/?category=Mixed#portfolio', text: 'Mixed Projects' }
  ];
  
  const servicesItems = [
    { to: '/services/landscape-architecture', text: 'Landscape Architecture' },
    { to: '/services/interior-design', text: 'Interior Design' },
    { to: '/services/3d-visualization', text: '3D Visualization & Animation' }
  ];

  return (
    <>
      <nav className="hidden lg:flex items-center space-x-8">
        <Link
          to="/"
          className={`nav-link ${
            location.pathname === '/' ? 'text-primary font-medium' : 'text-primary/80 hover:text-primary'
          }`}
        >
          Home
        </Link>

        <NavDropdown 
          name="portfolio"
          label="Portfolio"
          isActive={activeDropdown === 'portfolio'}
          toggleDropdown={toggleDropdown}
          items={portfolioItems}
        />

        <NavDropdown 
          name="services"
          label="Services"
          isActive={activeDropdown === 'services'}
          toggleDropdown={toggleDropdown}
          items={servicesItems}
        />

        <Link
          to="/about"
          className={`nav-link ${
            location.pathname === '/about' ? 'text-primary font-medium' : 'text-primary/80 hover:text-primary'
          }`}
        >
          About Us
        </Link>

        <Link
          to="/contact"
          className={`nav-link ${
            location.pathname === '/contact' ? 'text-primary font-medium' : 'text-primary/80 hover:text-primary'
          }`}
        >
          Contact
        </Link>
      </nav>

      <div className="hidden lg:flex items-center space-x-6">
        <button className="text-primary/80 hover:text-primary">
          <Search className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-2">
          <button className="text-sm font-medium text-primary">EN</button>
          <span className="text-muted-foreground">/</span>
          <button className="text-sm text-muted-foreground hover:text-primary">ID</button>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
