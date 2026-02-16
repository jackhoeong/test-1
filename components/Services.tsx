import React from 'react'
import { FaCar, FaSprayCan, FaShieldAlt } from 'react-icons/fa'

const services = [
  {
    icon: <FaCar className="text-5xl" />,
    title: 'Exterior Detailing',
    description: 'Complete exterior wash, wax, and polish to restore your vehicle\'s shine and protect the paint.',
  },
  {
    icon: <FaSprayCan className="text-5xl" />,
    title: 'Interior Detailing',
    description: 'Deep cleaning of interior surfaces, upholstery, and carpet with premium products and techniques.',
  },
  {
    icon: <FaShieldAlt className="text-5xl" />,
    title: 'Paint Protection',
    description: 'Advanced ceramic coating and paint protection films to keep your car looking new for years.',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional detailing services tailored to your vehicle's needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
            >
              <div className="text-secondary mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href="/services"
                className="text-secondary font-semibold hover:text-accent transition duration-300"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent transition duration-300 text-lg"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  )
}
