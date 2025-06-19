// layout.tsx profesional (con íconos en sección de contactos)

import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ZHouse - Home Repair & Renovation',
  description: 'Professional home repair and renovation services in Washington, USA.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="w-full bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/logo.png" alt="ZHouse Logo" width={120} height={60} />
              </Link>
            </div>
            <nav className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <Link href="/contact" className="ml-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
              Get a Quote
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image src="/logo3.png" alt="ZHouse Logo" width={100} height={50} />
              <p className="mt-4">Your dream home, made a reality.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
              <div className="flex items-center gap-2 mb-2">
                <FaMapMarkerAlt />
                <p>1234 Evergreen St, Seattle, WA 98101</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaPhoneAlt />
                <p>(202) 555-0199</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <p>contact@zhousewashington.com</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-4 text-2xl">
                <Link href="#"><FaFacebookF /></Link>
                <Link href="#"><FaInstagram /></Link>
                <Link href="#"><FaTwitter /></Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">© 2025 ZHouse. All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}
