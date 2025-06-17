import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-yellow-400">
      <div className="flex items-center">
          <img src="/assets/Smartsales.logos.jpg" alt="SmartSales Logo" className="h-10 mr-4" />
          <div className="font-bold text-xl">SmartSales</div>
      </div>
      <div className="space-x-6 hidden md:flex pr-8">
          <a
              href="#home"
              className="relative hover:text-yellow-300 transition-colors duration-300 group"
          >
              Home
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a
              href="#about"
              className="relative hover:text-yellow-300 transition-colors duration-300 group"
          >
              About
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a
              href="#services"
              className="relative hover:text-yellow-300 transition-colors duration-300 group"
          >
              Services
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a
              href="#contact"
              className="relative hover:text-yellow-300 transition-colors duration-300 group"
          >
              Contact
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
      </div>
    </nav>
  );
};

export default Navbar;