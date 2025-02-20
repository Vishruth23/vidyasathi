import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="ml-2 text-white text-xl font-bold">VidyaSathi</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">Home</Link>
              <Link to="/student" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">Student</Link>
              <Link to="/teacher" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">Educator</Link>
              <Link to="/pricing" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">Pricing</Link>
              <Link to="/demo" className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium">Get Demo</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-indigo-500 p-2 rounded-md"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white block hover:bg-indigo-500 px-3 py-2 rounded-md">Home</Link>
            <Link to="/student" className="text-white block hover:bg-indigo-500 px-3 py-2 rounded-md">Student</Link>
            <Link to="/teacher" className="text-white block hover:bg-indigo-500 px-3 py-2 rounded-md">Educator</Link>
            <Link to="/pricing" className="text-white block hover:bg-indigo-500 px-3 py-2 rounded-md">Pricing</Link>
            <Link to="/demo" className="bg-white block text-indigo-600 px-3 py-2 rounded-md">Get Demo</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;