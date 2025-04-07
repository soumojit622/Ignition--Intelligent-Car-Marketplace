import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const socialIcons = {
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
};
export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#0a0a0c] py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gradient">Ignition</h3>
            </div>
            <p className="mb-4 mt-4 text-gray-400">
              Revolutionizing the car buying experience with advanced AI
              technology.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "instagram", "linkedin"].map(
                (social) => {
                  const Icon = socialIcons[social];
                  return (
                    <Link
                      key={social}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-blue-500 hover:text-blue-400"
                      aria-label={`${social} link`}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                }
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold uppercase text-white">About</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold uppercase text-white">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold uppercase text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                contact@ignition.in
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 98765 43210
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                1B AJC Bose Road, Kolkata,700020
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">
            Made with <span className="text-red-500">💙</span> by{" "}
            <span className="text-white font-medium">Soumojit Banerjee</span>
          </p>
          <p>© {new Date().getFullYear()} Ignition . All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="#" className="hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-400">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-blue-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
