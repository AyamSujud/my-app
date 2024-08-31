import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-ungu p-4">
      <div className="flex items-center">
        <div className="h-10">
          <img src="Bootstrap.png" alt="Logo" className="h-full" />
        </div>
        <div className="ml-4 text-white text-lg font-mono">PortoFolio</div>
      </div>
      <ul className="flex space-x-6 text-white text-xl">
        <li><a href="https://example.com" className="hover:text-gray-400">Home</a></li>
        <li><a href="https://example.com" className="hover:text-gray-400">About Me</a></li>
        <li><a href="https://example.com" className="hover:text-gray-400">SNS</a></li>
        <li><a href="https://example.com" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

