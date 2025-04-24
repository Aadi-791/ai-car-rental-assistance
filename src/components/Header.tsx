import React from 'react';
import { Car } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Car className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-semibold text-gray-900">AutoRent AI</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Vehicles</a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Locations</a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Help</a>
        </nav>
        <button className="md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;