import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">
        <Link href="/">Watch World</Link>
      </h1>
      <nav className="flex items-center space-x-6">
        <Link href="/" className="hover:text-blue-400 transition duration-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-400 transition duration-300">
          About
        </Link>
        <Link href="/watches" className="hover:text-blue-400 transition duration-300">
          Watches
        </Link>
        <Link href="/contact" className="hover:text-blue-400 transition duration-300">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
