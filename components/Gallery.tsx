import React from 'react'
import Image from 'next/image'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800',
    alt: 'Detailed luxury car',
  },
  {
    src: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800',
    alt: 'Sports car exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    alt: 'Car interior detailing',
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800',
    alt: 'Classic car restoration',
  },
]

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the results of our professional detailing services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 text-lg"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  )
}
