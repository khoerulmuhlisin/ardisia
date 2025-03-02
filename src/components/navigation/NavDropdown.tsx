
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  to: string;
  text: string;
}

interface NavDropdownProps {
  name: string;
  label: string;
  isActive: boolean;
  toggleDropdown: (name: string) => void;
  items: DropdownItem[];
}

const NavDropdown = ({ 
  name, 
  label, 
  isActive, 
  toggleDropdown, 
  items 
}: NavDropdownProps) => {
  return (
    <div className="relative">
      <button
        className={`flex items-center nav-link ${
          isActive ? 'text-primary font-medium' : 'text-primary/80 hover:text-primary'
        }`}
        onClick={() => toggleDropdown(name)}
      >
        {label}
        <ChevronDown className="ml-1 w-4 h-4" />
      </button>
      <div
        className={`nav-dropdown absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md border border-border overflow-hidden ${
          isActive ? 'active' : ''
        }`}
      >
        <div className="p-4 space-y-2">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="block p-2 hover:bg-secondary rounded-md transition-colors"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
