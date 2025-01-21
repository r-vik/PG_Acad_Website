import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '/Logo.png'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = [
      { label: 'Home', link: '#home' },
      { label: 'About', link: '#about' },
      { label: 'Team', link: '#team' },
      { label: 'Clubs', link: '#clubs' },
      { label: 'Events', link: '#events' },
      { label: 'Connect', link: '#connect' },
      //{ label: 'Contact', link: '#contact' },
    ];
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(true);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">

            <div className="flex items-center space-x-4">
            <Link
                to="/">
              <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />
              </Link>
              <h1 className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                <Link
                to="/">
                PG Academic Council
                </Link>
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {navLinks.map(({ label, link }) => (
                <HashLink
                  key={label}
                  smooth
                  to={link}
                  className={`${
                    isScrolled ? 'text-white hover:text-blue-300' : 'text-gray-900 hover:text-blue-600'
                  } transition-colors duration-300 font-medium`}
                >
                  {label}
                </HashLink>
              ))}
            </div>
            
            <button
              className="md:hidden text-white hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
        
        {/* Mobile menu */}
        <div
          className={`md:hidden bg-gray-900 ${
            isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="container mx-auto px-4 py-4">
            {['Home', 'About', 'Team', 'Clubs', 'Events', 'Connect'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-white hover:text-blue-300 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>
    );
  };

export default Header





