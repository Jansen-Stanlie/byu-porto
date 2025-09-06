import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../atoms/Logo';

const Footer = () => {
  return (
    <footer className="bg-ink border-t border-dark-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-dark-100 max-w-sm">We design, build, and grow digital that performs. From strategy to shipped product—BYU DIGITAL turns ideas into results.</p>
          </div>
          <div>
            <h3 className="font-semibold text-light-100">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-dark-100 hover:text-brand transition-colors">About</Link></li>
              <li><Link to="/services" className="text-dark-100 hover:text-brand transition-colors">Services</Link></li>
              <li><Link to="/work" className="text-dark-100 hover:text-brand transition-colors">Work</Link></li>
              <li><Link to="/contact" className="text-dark-100 hover:text-brand transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-light-100">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-dark-100">David Bayu</li>
              <li className="text-dark-100 hover:text-brand"><a href="https://wa.me/6285746363241" target="_blank" rel="noopener noreferrer">+62 857-4636-3241</a></li>
              <li className="text-dark-100 hover:text-brand"><a href="mailto:hello@byudigital.com">hello@byudigital.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-dark-200 pt-8 text-center text-dark-100">
          <p>&copy; {new Date().getFullYear()} BYU DIGITAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;