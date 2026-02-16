import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Gallery />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your appointment today and experience the difference
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 text-lg"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}
