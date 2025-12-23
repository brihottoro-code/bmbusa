import Link from 'next/link'
import { FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPhone, FaArrowRight } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Brihottor Mymensinghbashi USA Inc.</h3>
            <p className="text-gray-400 text-sm mb-4">
              A social, non-profit organization dedicated to preserving Mymensingh culture and traditions while supporting our community in New York City, USA.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/bmbusainc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/constitution" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Constitution
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">89-67 215th PL<br />Queens Village, NY 11427</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400 flex-shrink-0" />
                <a href="mailto:brihottoro@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  brihottoro@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary-400 flex-shrink-0" />
                <a href="tel:+16468240777" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  +1 (646) 824-0777
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 mt-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              <span>Contact Form</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* Mission */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Mission</h4>
            <p className="text-gray-400 text-sm">
              To preserve, nurture, and celebrate the culture and traditions of Mymensingh while providing support and assistance to our community members in the USA.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Brihottor Mymensinghbashi USA Inc. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            A registered non-profit organization in New York City, New York, USA
          </p>
        </div>
      </div>
    </footer>
  )
}

