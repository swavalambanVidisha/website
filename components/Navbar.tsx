import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink as NavLinkType } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navLinks: NavLinkType[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Work', path: '/projects' },
  { label: 'Contact & Donate', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Mobile Menu Button */}
        <div className="md:hidden absolute left-4 top-8">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-700 hover:text-green-800 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center mb-6">
          <Link to="/" className="flex flex-col items-center group">
            {/* Logo Container - Large Size */}
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-green-600 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white flex items-center justify-center">
              {/* 
                NOTE: The source is set to "logo.png". 
                Please ensure you have renamed your logo file to "logo.png" and placed it in the public/root folder of the project.
              */}
              <img
                src="logo.png" 
                alt="Swavalamban Foundation Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if image is missing, just to keep layout stable
                  e.currentTarget.onerror = null; 
                  e.currentTarget.src = "https://via.placeholder.com/400x400?text=Logo.png+Missing";
                }}
              />
            </div>
            <div className="mt-4 text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-green-700 tracking-wide uppercase drop-shadow-sm">
                Swavalamban Foundation
              </h1>
              <p className="font-hindi text-gray-600 text-base md:text-lg font-medium mt-1">
                स्वावलम्बन फाउंडेशन: आओ आत्मनिर्भर बनें
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center space-x-8 border-t border-gray-100 pt-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium transition-colors duration-300 px-6 py-2 rounded-full ${
                isActive(link.path)
                  ? 'bg-green-50 text-green-700 font-bold shadow-sm'
                  : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-down">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-center ${
                    isActive(link.path)
                      ? 'bg-green-100 text-green-800 font-bold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;