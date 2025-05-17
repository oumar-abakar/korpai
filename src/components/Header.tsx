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
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Korpai logo" width={32} height={32} />
          <span className="text-2xl font-bold text-violet-700">Korpai</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="/#features" className="hover:text-violet-600">Fonctionnalités</a>
          <a href="/#mecanisme" className="hover:text-violet-600">Méthode</a>
          <a href="/#temoignages" className="hover:text-violet-600">Témoignages</a>
          <a href="/a-propos" className="hover:text-violet-600">À propos</a>
          <Link href="/contact" className="hover:text-violet-600">Contact</Link>
        </nav>

        {/* CTA Desktop */}
        <a
          href="/rejoindre"
          className="hidden md:inline-block bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-800 transition"
        >
          Rejoindre la bêta
        </a>

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
          <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-violet-700">
            Fonctionnalités
          </a>
          <a href="#mecanisme" onClick={() => setIsOpen(false)} className="hover:text-violet-700">
            Méthode
          </a>
          <a href="#temoignages" onClick={() => setIsOpen(false)} className="hover:text-violet-700">
            Témoignages
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-violet-700">
            À propos
          </a>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-violet-700">
            Contact
          </Link>
          <a
            href="/rejoindre"
            onClick={() => setIsOpen(false)}
            className="bg-violet-700 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-violet-800 transition"
          >
            Rejoindre la bêta
          </a>
        </div>
      )}
    </header>
  );
}
