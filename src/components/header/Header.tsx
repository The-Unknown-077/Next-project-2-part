'use client'
import Link from 'next/link';
import { memo } from 'react';

const Header = () => {
  const handleSignIn = () => {
    open("https://lesson-8-3-loyiha.vercel.app/");
  };

  return (
    <header className="bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h2 className="text-xl font-bold text-white tracking-wide">E-commerce</h2>
        <nav className="flex space-x-6 text-gray-200 font-medium">
          <Link href="/" className="pb-1 border-b-2 border-transparent">
            Home
          </Link>
          <Link href="/about" className="pb-1 border-b-2 border-transparent">
            About
          </Link>
          <Link href="/contact" className="pb-1 border-b-2 border-transparent">
            Contact
          </Link>
          <Link href="/login" className="pb-1 border-b-2 border-transparent">
            Login
          </Link>
        </nav>

        <button
          onClick={handleSignIn}
          className="ml-4 px-4 py-2 bg-indigo-600 duration-300 hover:bg-indigo-500 hover:shadow-2xs text-white rounded-md font-semibold shadow-md"
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default memo(Header);
