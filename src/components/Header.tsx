"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Titre */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center gap-2">
            <Image src="/logo.png" alt="Korpai logo" width={32} height={32} />
            <span className="text-2xl font-bold text-violet-700">Korpai</span>
          </a>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="/#features" legacyBehavior>
            <a className="hover:text-violet-600">Fonctionnalités</a>
          </Link>
          <Link href="/#mecanisme" legacyBehavior>
            <a className="hover:text-violet-600">Méthode</a>
          </Link>
          <Link href="/#temoignages" legacyBehavior>
            <a className="hover:text-violet-600">Témoignages</a>
          </Link>
          <Link href="/a-propos" legacyBehavior>
            <a className="hover:text-violet-600">À propos</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-violet-600">Contact</a>
          </Link>
        </nav>

        {/* CTA Desktop */}
        <Link href="/rejoindre" legacyBehavior>
          <a className="hidden md:inline-block bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-800 transition">
            Rejoindre la bêta
          </a>
        </Link>

        {/* Menu Mobile Toggle */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden justify-center bg-white border-t border-gray-200 px-6 py-6 space-y-4 text-sm text-gray-700 flex flex-col">
          <Link href="/#features" legacyBehavior>
            <a onClick={() => setIsOpen(false)} className="hover:text-violet-700">Fonctionnalités</a>
          </Link>
          <Link href="/#mecanisme" legacyBehavior>
            <a onClick={() => setIsOpen(false)} className="hover:text-violet-700">Méthode</a>
          </Link>
          <Link href="/#temoignages" legacyBehavior>
            <a onClick={() => setIsOpen(false)} className="hover:text-violet-700">Témoignages</a>
          </Link>
          <Link href="/a-propos" legacyBehavior>
            <a onClick={() => setIsOpen(false)} className="hover:text-violet-700">À propos</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a onClick={() => setIsOpen(false)} className="hover:text-violet-700">Contact</a>
          </Link>
          <Link href="/rejoindre" legacyBehavior>
            <a
              onClick={() => setIsOpen(false)}
              className="bg-violet-700 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-violet-800 transition"
            >
              Rejoindre la bêta
            </a>
          </Link>
        </div>
      )}
    </header>
  );
}
