import React from 'react'
import { FaCar, FaSprayCan, FaWater, FaShieldAlt, FaGem, FaCogs } from 'react-icons/fa'

const servicesData = [
  {
    icon: <FaWater className="text-5xl" />,
    title: 'Exterior Wash & Wax',
    description: 'Complete exterior hand wash with premium wax application for lasting shine and protection.',
    price: '$79',
    features: ['Hand wash', 'Clay bar treatment', 'Premium wax', 'Tire shine', 'Window cleaning']
  },
  {
    icon: <FaCar className="text-5xl" />,
    title: 'Interior Detailing',
    description: 'Deep cleaning of interior surfaces, upholstery, and carpet with sanitization.',
    price: '$129',
    features: ['Vacuum & shampoo', 'Leather conditioning', 'Dashboard treatment', 'Air freshening', 'Steam cleaning']
  },
  {
    icon: <FaGem className="text-5xl" />,
    title: 'Premium Full Detail',
    description: 'Our most comprehensive package combining exterior and interior perfection.',
    price: '$249',
    features: ['Everything from above', 'Paint correction', 'Engine bay cleaning', 'Headlight restoration', 'Odor elimination']
  },
  {
    icon: <FaShieldAlt className="text-5xl" />,
    title: 'Ceramic Coating',
    description: 'Long-lasting paint protection with hydrophobic properties and UV resistance.',
    price: '$599',
    features: ['Paint preparation', '3-year protection', 'Hydrophobic coating', 'UV protection', 'Enhanced gloss']
  },
  {
    icon: <FaSprayCan className="text-5xl" />,
    title: 'Paint Correction',
    description: 'Professional paint restoration to remove swirls, scratches, and oxidation.',
    price: '$399',
    features: ['Multi-stage polishing', 'Scratch removal', 'Swirl elimination', 'Paint enhancement', 'Professional finish']
  },
  {
    icon: <FaCogs className="text-5xl" />,
    title: 'Engine Bay Detailing',
    description: 'Thorough cleaning and dressing of your engine compartment.',
    price: '$89',
    features: ['Degreasing', 'Pressure washing', 'Component dressing', 'Protection treatment', 'Show-ready finish']
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional car detailing services tailored to your vehicle's needs. 
            From basic maintenance to premium protection packages.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <div className="text-secondary mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
              <p className="text-3xl font-bold text-secondary mb-4">{service.price}</p>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-secondary mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="block w-full bg-secondary text-white text-center py-3 rounded-lg font-semibold hover:bg-accent transition duration-300"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2">Premium Products</h3>
              <p className="text-gray-600">We use only the highest quality detailing products</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all our services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
