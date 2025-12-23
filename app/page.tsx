import Link from 'next/link'
import { FaHandshake, FaUsers, FaHeart, FaCalendarAlt, FaBook, FaArrowRight } from 'react-icons/fa'
import PhotoCarousel from '@/components/PhotoCarousel'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Brihottor Mymensinghbashi USA Inc.
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Preserving Culture • Supporting Community • Building Bonds
              </p>
              <p className="text-lg md:text-xl mb-10 text-primary-50 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                A social, non-profit organization in New York City dedicated to preserving Mymensingh culture and traditions while providing support and assistance to our community members.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/membership"
                  className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                >
                  <span>Join Us</span>
                  <FaArrowRight />
                </Link>
                <Link
                  href="/about"
                  className="bg-primary-500/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-500/30 transition-all duration-200 inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Side - Photo Carousel */}
            <div className="h-[400px] lg:h-[500px] xl:h-[600px]">
              <PhotoCarousel />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Objectives</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We are committed to serving our community with compassion and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                <FaHandshake className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural Preservation</h3>
              <p className="text-gray-700">
                Preserve, nurture, and celebrate the rich culture and traditions of Mymensingh while living abroad or upon returning home.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mb-6">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Support</h3>
              <p className="text-gray-700">
                Provide temporary shelter and employment assistance to immigrants from Greater Mymensingh arriving in the USA.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Humanitarian Aid</h3>
              <p className="text-gray-700">
                Assist with funeral arrangements, support during illness, and provide financial aid during natural disasters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our organization serves the community through various programs and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary-600">
              <div className="flex items-start space-x-4">
                <FaCalendarAlt className="text-primary-600 text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Annual Events</h3>
                  <p className="text-gray-700">
                    Organize Iftar parties, honor notable personalities, and arrange commemorative events throughout the year.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent-600">
              <div className="flex items-start space-x-4">
                <FaBook className="text-accent-600 text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Governance</h3>
                  <p className="text-gray-700">
                    Operate with a clear constitution, elected executive committee, and democratic processes ensuring transparency and accountability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600">
              <div className="flex items-start space-x-4">
                <FaUsers className="text-green-600 text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Member Benefits</h3>
                  <p className="text-gray-700">
                    Access to community support, voting rights, eligibility for assistance programs, and participation in all organizational activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-600">
              <div className="flex items-start space-x-4">
                <FaHeart className="text-purple-600 text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Welfare Services</h3>
                  <p className="text-gray-700">
                    Provide financial assistance, funeral support, and emergency aid to members and their families in times of need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Become a member and be part of a supportive community that celebrates our shared heritage and helps one another.
          </p>
          <Link
            href="/membership"
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  )
}

