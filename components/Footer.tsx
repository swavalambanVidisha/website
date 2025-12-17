import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-green-400 mb-4">Swavalamban Foundation</h3>
            <p className="text-gray-300 text-sm mb-4 font-hindi">
              आओ आत्मनिर्भर बनें
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to empowering communities through education, women empowerment, and environmental sustainability.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              Reg No: 01/05/01/38444/22 <br/>
              CSR Registration: CSR00095903
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-green-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition">Our Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Donate</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-green-400 mb-4">Get in Touch</h3>
            <div className="flex flex-col items-center md:items-end space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <span>Plot No. 35, RMP Nagar Phase-1, Vidisha (M.P.)</span>
                <MapPin size={16} className="text-green-500" />
              </div>
              <div className="flex items-center gap-2">
                <span>+91 9752899000</span>
                <Phone size={16} className="text-green-500" />
              </div>
              <div className="flex items-center gap-2">
                <span>swavalamban2022@gmail.com</span>
                <Mail size={16} className="text-green-500" />
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end gap-4 mt-6">
              <a href="https://www.facebook.com/swavalambanfoundationvidisha" target="_blank" rel="noreferrer" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/swavalambanfoundation" target="_blank" rel="noreferrer" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@swavalambanfoundation" target="_blank" rel="noreferrer" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Swavalamban Foundation Vidisha. All rights reserved.</p>
          <p className="mt-2 text-xs">All donations are tax-exempt under Section 80G of the Income Tax Act.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;