
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import { Menu, X } from '../atoms/Icons';

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const links = [
    { to: '/services', label: 'Services' },
    { to: '/work', label: 'Work' },
    { to: '/about', label: 'About' },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={onClick}
          className={({ isActive }) =>
            `font-medium transition-colors duration-300 ${
              isActive ? 'text-brand' : 'text-light-200 hover:text-brand'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-ink/80 backdrop-blur-lg border-b border-dark-200' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <Logo />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>
        <div className="hidden md:block">
          <Button to="/contact" variant="primary">Get a Quote</Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-light-100">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden bg-ink/95 backdrop-blur-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col items-center space-y-4">
            <NavLinks onClick={() => setIsMenuOpen(false)} />
            <Button to="/contact" variant="primary" className="w-full" onClick={() => setIsMenuOpen(false)}>
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
