"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="glass sticky top-0 z-50 border-b border-white/10 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-gradient">Ignition</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 md:flex">
          <Link href="/" className="text-sm font-medium text-white hover:text-blue-400">
            Home
          </Link>
          <Link href="#features" className="text-sm font-medium text-white hover:text-blue-400">
            Features
          </Link>
          <Link href="#categories" className="text-sm font-medium text-white hover:text-blue-400">
            Categories
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-white hover:text-blue-400">
            How It Works
          </Link>
          <Link href="#faq" className="text-sm font-medium text-white hover:text-blue-400">
            FAQ
          </Link>
          <Link href="#contact" className="text-sm font-medium text-white hover:text-blue-400">
            Contact
          </Link>
        </div>

        {/* Login/Signup Button */}
        <div className="hidden md:block">
          <Link
            href="#"
            className="blue-gradient glow rounded-lg px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="glass border-t border-white/10 px-4 py-2 md:hidden">
          <div className="flex flex-col space-y-4 py-4">
            <Link
              href="/"
              className="text-sm font-medium text-white hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-white hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#categories"
              className="text-sm font-medium text-white hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-white hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-white hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-white hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#"
              className="blue-gradient glow rounded-lg px-4 py-2 text-center text-sm font-medium text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

