import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-secondary">Premium</span> Detailing
            </h3>
            <p className="text-gray-400 mb-4">
              Professional car detailing services that bring out the best in your vehicle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition duration-300">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition duration-300">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition duration-300">
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-secondary transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-secondary transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-secondary transition duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-secondary transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Exterior Detailing</li>
              <li>Interior Detailing</li>
              <li>Paint Correction</li>
              <li>Ceramic Coating</li>
              <li>Engine Bay Cleaning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <FaPhone className="mr-3 text-secondary" />
                (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <FaEnvelope className="mr-3 text-secondary" />
                info@premiumdetailing.com
              </li>
              <li className="flex items-start text-gray-400">
                <FaMapMarkerAlt className="mr-3 text-secondary mt-1" />
                <span>
                  123 Auto Detail Lane<br />
                  Beverly Hills, CA 90210
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Premium Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
