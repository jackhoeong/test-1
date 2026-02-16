import React from 'react'
import ContactForm from '@/components/ContactForm'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us to schedule your appointment or ask any questions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our services? Want to book an appointment? 
              We're here to help! Contact us through any of the methods below.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaPhone className="text-2xl text-secondary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-gray-600">(555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaEnvelope className="text-2xl text-secondary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@premiumdetailing.com</p>
                  <p className="text-gray-600">booking@premiumdetailing.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaMapMarkerAlt className="text-2xl text-secondary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">123 Auto Detail Lane</p>
                  <p className="text-gray-600">Beverly Hills, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaClock className="text-2xl text-secondary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <p className="text-gray-600 font-semibold">Map Location</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-gradient-to-r from-secondary to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Same Day Service Available
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Need your car detailed urgently? We offer same-day service for most packages.
            Call us to check availability!
          </p>
          <a
            href="tel:5551234567"
            className="inline-block bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 text-lg"
          >
            Call Now: (555) 123-4567
          </a>
        </div>
      </div>
    </div>
  )
}
