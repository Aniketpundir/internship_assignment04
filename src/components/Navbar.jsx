import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState("");

  const toggleDropdown = (name) => {
    setDropdown(dropdown === name ? "" : name);
  };

  return (
    <nav className="bg-gradient-to-r from-[#001153] to-[#00278a] text-white text-sm font-medium">
      <div className="flex justify-between items-center px-6 py-2">
        {/* Logo and Top Controls */}
        <div className="flex items-center space-x-2">
          <img
            src="https://www.postdicom.com/assets/img/logo-white.png"
            alt="postDICOM logo"
            className="h-6"
          />
        </div>
        <div className="flex items-center space-x-4">
          <select className="bg-transparent border border-white px-2 py-1 rounded">
            <option>🇺🇸 English - EN</option>
          </select>
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <span className="inline-block w-4 h-4 bg-white text-[#001153] text-xs font-bold rounded-full text-center">
              ✉
            </span>
            <span>Contact</span>
          </a>
          <Link
            to="/login"
            className="flex items-center space-x-1 border border-white px-3 py-1 rounded hover:bg-white hover:text-[#001153]"
          >
            <span className="inline-block w-4 h-4 bg-white text-[#001153] text-xs font-bold rounded-full text-center">
              ⇨
            </span>
            <span>Login</span>
          </Link>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded font-semibold">
            Start Free Trial
          </button>
        </div>
      </div>

      {/* Bottom Nav Menu */}
      <div className="flex justify-center space-x-8 py-2 border-t border-white border-opacity-30">
        <Link to="/" className="hover:underline">
          Home
        </Link>

        <div className="relative">
          <button
            onClick={() => toggleDropdown("products")}
            className="hover:underline"
          >
            Products ▾
          </button>
          {dropdown === "products" && (
            <div className="absolute bg-white text-black mt-2 py-2 rounded shadow-lg w-40 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Product 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Product 2
              </a>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => toggleDropdown("solutions")}
            className="hover:underline"
          >
            Solutions ▾
          </button>
          {dropdown === "solutions" && (
            <div className="absolute bg-white text-black mt-2 py-2 rounded shadow-lg w-40 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Solution A
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Solution B
              </a>
            </div>
          )}
        </div>

        <Link to="#" className="hover:underline">
          Security
        </Link>
        <Link to="#" className="hover:underline">
          Pricing
        </Link>

        <div className="relative">
          <button
            onClick={() => toggleDropdown("resources")}
            className="hover:underline"
          >
            Resources ▾
          </button>
          {dropdown === "resources" && (
            <div className="absolute bg-white text-black mt-2 py-2 rounded shadow-lg w-40 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Docs
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Guides
              </a>
            </div>
          )}
        </div>

        <Link to="#" className="hover:underline">
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
