
import React from 'react';
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <Link to="/" className="z-50">
      <h1 className="font-display font-semibold text-xl lg:text-2xl">
        ARDISIA<span className="text-primary/70">DESIGN</span>
      </h1>
    </Link>
  );
};

export default NavLogo;
