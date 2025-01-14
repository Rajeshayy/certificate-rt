// src/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-green-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
            <div className="flex-shrink-0">
              
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-gray-200 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/faculty"
                  className="text-gray-200 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
                >
                  Faculty
                </Link>
                <Link
                  to="/student"
                  className="text-gray-200 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
                >
                  Students
                </Link>
                <Link
                  to="/search"
                  className="text-gray-200 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-gray-200 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-2xl font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-200 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-2xl font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-200 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-2xl font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
