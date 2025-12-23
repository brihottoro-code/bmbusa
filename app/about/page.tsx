import { FaHandshake, FaUsers, FaHeart, FaFlag, FaGlobeAmericas } from 'react-icons/fa'

export default function About() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Learn about our mission, values, and commitment to serving the Mymensingh community in New York City
          </p>
        </div>
      </section>

      {/* Organization Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Organization Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  <strong>Brihottor Mymensinghbashi USA Inc.</strong> is a duly registered, entirely non-political, and social organization based in New York City, New York, USA. Our organization serves as a bridge connecting the Mymensingh community living in the United States, helping preserve our rich cultural heritage while providing essential support services to our members.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We are committed to maintaining the traditions, language, and cultural practices of Greater Mymensingh while fostering a sense of community, mutual support, and brotherhood among our members.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-primary-50 p-6 rounded-lg">
                <FaFlag className="text-primary-600 text-3xl mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cultural Preservation</h3>
                <p className="text-gray-700">
                  We are dedicated to preserving and celebrating the unique culture and traditions of Mymensingh, ensuring they thrive for future generations.
                </p>
              </div>

              <div className="bg-accent-50 p-6 rounded-lg">
                <FaUsers className="text-accent-600 text-3xl mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community First</h3>
                <p className="text-gray-700">
                  Our community members are at the heart of everything we do. We prioritize their welfare, support, and success.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <FaHeart className="text-green-600 text-3xl mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Compassion & Support</h3>
                <p className="text-gray-700">
                  We provide humanitarian assistance, financial support, and emotional care to members during times of need, including illness, natural disasters, and bereavement.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <FaGlobeAmericas className="text-purple-600 text-3xl mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unity & Respect</h3>
                <p className="text-gray-700">
                  We foster brotherly relationships, treating all members with respect and empathy regardless of race, religion, or background.
                </p>
              </div>
            </div>

            {/* Key Objectives */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Key Objectives</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Heritage</h3>
                  <p className="text-gray-700">
                    Preserve, nurture, and celebrate the culture and traditions of Mymensingh while living abroad or upon returning home.
                  </p>
                </div>

                <div className="border-l-4 border-accent-600 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Immigrant Support</h3>
                  <p className="text-gray-700">
                    Provide temporary shelter and employment assistance (based on qualification) to any immigrant from Greater Mymensingh arriving in the USA, with sympathy and cooperation.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Funeral & Memorial Services</h3>
                  <p className="text-gray-700">
                    Assist in sending bodies back home or arranging funeral services locally, and support bereaved families with compassion and financial aid when needed.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Humanitarian Aid</h3>
                  <p className="text-gray-700">
                    Provide humanitarian and financial assistance to members suffering from severe illness or affected by natural disasters resulting in loss of property.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Bonds</h3>
                  <p className="text-gray-700">
                    Maintain brotherly and friendly relationships, treating one another with respect and empathy, and supporting each other in times of happiness and sorrow.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Honoring Distinguished Guests</h3>
                  <p className="text-gray-700">
                    Honor and felicitate any distinguished personality or notable individual from Mymensingh visiting the USA for official or social purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h2>
              <p className="text-gray-700 text-lg mb-2">
                <strong>Brihottor Mymensinghbashi USA Inc.</strong>
              </p>
              <p className="text-gray-600">
                89-67 215th PL<br />
                Queens Village, NY 11427<br />
                United States of America
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

