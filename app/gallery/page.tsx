import React from 'react'
import Image from 'next/image'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800',
    alt: 'Luxury car exterior detailing',
    title: 'Exterior Detailing'
  },
  {
    src: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800',
    alt: 'Sports car wash',
    title: 'Premium Wash'
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    alt: 'BMW interior detailing',
    title: 'Interior Detailing'
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800',
    alt: 'Classic car restoration',
    title: 'Paint Correction'
  },
  {
    src: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800',
    alt: 'Mercedes detailing',
    title: 'Ceramic Coating'
  },
  {
    src: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800',
    alt: 'Supercar detailing',
    title: 'Full Detail Package'
  },
  {
    src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
    alt: 'Jeep exterior cleaning',
    title: 'SUV Detailing'
  },
  {
    src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
    alt: 'Car headlights restoration',
    title: 'Headlight Restoration'
  },
  {
    src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
    alt: 'Engine bay cleaning',
    title: 'Engine Bay Detail'
  },
  {
    src: 'https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?w=800',
    alt: 'Vintage car detailing',
    title: 'Classic Car Care'
  },
  {
    src: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',
    alt: 'Tesla model detailing',
    title: 'Electric Vehicle Care'
  },
  {
    src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
    alt: 'Car interior leather seats',
    title: 'Leather Treatment'
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Browse through our portfolio of detailed vehicles. Each car receives meticulous 
            attention to detail and professional care.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Want Your Car to Look Like This?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book an appointment today and let us transform your vehicle
          </p>
          <a
            href="/contact"
            className="inline-block bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent transition duration-300 text-lg"
          >
            Schedule Now
          </a>
        </div>
      </div>
    </div>
  )
}
