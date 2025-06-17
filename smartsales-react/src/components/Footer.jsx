import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-yellow-600 mb-2 flex">
            <img src="/assets/Smartsales.logos.jpg" alt="SmartSales Logo" className="h-10 mr-4" />
            SmartSales
          </h3>
          <p>Building B2B sales teams for Africa's SMEs and startups.</p>
        </div>
        <div>
          <h4 className="uppercase text-sm font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase text-sm font-semibold mb-4">Contact</h4>
          <p>Phone: <a href="tel:0734516091" className="hover:text-yellow-400">0734516091 | 0777516091</a></p>
          <p>Email: <a href="mailto:contact@smartsales.com" className="hover:text-yellow-400">@MasteringBusinessGrowth | @EdwardNdegwa | @SmartsalesKenya</a></p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-yellow-400 hover:text-yellow-600">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="" className="text-yellow-400 hover:text-yellow-600">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-600">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © 2025 SmartSales Kenya - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;