import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">VidyaSathi</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering education through AI-driven personalized learning.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/student" className="text-gray-400 hover:text-white">Student Dashboard</Link></li>
              <li><Link to="/teacher" className="text-gray-400 hover:text-white">Teacher Dashboard</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link to="/demo" className="text-gray-400 hover:text-white">Request Demo</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">AI-Powered Learning</li>
              <li className="text-gray-400">Multilingual Support</li>
              <li className="text-gray-400">Interactive Content</li>
              <li className="text-gray-400">Performance Analytics</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 VidyaSathi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;