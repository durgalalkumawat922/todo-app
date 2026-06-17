import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/40"
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <h1 className="text-2xl font-bold text-indigo-600">TodoApp</h1>
          </Link>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Button */}
          <div className="hidden md:block">
            <Link
              to="/signup"
              className="inline-block mr-5 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition duration-300 shadow-md font-medium"
            >
              SignUp
            </Link>

            <Link
              to="/login"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition duration-300 shadow-md font-medium"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-gray-700 text-3xl">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
