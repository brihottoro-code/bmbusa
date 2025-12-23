import { FaCalendarAlt, FaPrayingHands, FaHandshake, FaUsers, FaUtensils } from 'react-icons/fa'

export default function Events() {
  const events = [
    {
      title: 'Annual Iftar Party',
      description: 'Join us for our annual Iftar celebration bringing together the Mymensingh community in New York City.',
      icon: FaUtensils,
      date: 'During Ramadan',
      color: 'from-green-500 to-green-700',
    },
    {
      title: 'Honoring Notable Personalities',
      description: 'Honor and felicitate distinguished personalities from Mymensingh visiting the USA.',
      icon: FaHandshake,
      date: 'As Needed',
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Memorial Services',
      description: 'Arranging funeral/memorial services for deceased members and organizing prayers and commemorations.',
      icon: FaPrayingHands,
      date: 'As Needed',
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Annual Picnic & Social Event',
      description: 'Annual gathering featuring recognition of honorary/lifetime members with medals of recognition.',
      icon: FaUsers,
      date: 'Annual Event',
      color: 'from-accent-500 to-accent-700',
    },
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <FaCalendarAlt className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">Events & Activities</h1>
          </div>
          <p className="text-xl text-primary-100 max-w-3xl">
            Stay connected with our community through various events and activities throughout the year
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Annual Activities</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our organization hosts various events throughout the year to bring the community together, celebrate our culture, and honor our members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {events.map((event, index) => {
                const Icon = event.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                  >
                    <div className={`bg-gradient-to-r ${event.color} p-6 text-white`}>
                      <Icon className="text-4xl mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      <p className="text-white/90 font-semibold">{event.date}</p>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* General Meetings */}
            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">General Meetings</h2>
              <p className="text-gray-700 mb-4">
                According to our constitution, general meetings must be held every 90 days. These meetings provide an opportunity for all members to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Participate in organizational decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Stay informed about organizational activities and financial reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Voice concerns and suggestions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Vote on important matters</span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm mt-4 italic">
                In emergencies, a meeting can be called within 24 hours upon discussion between the President and General Secretary.
              </p>
            </div>

            {/* Upcoming Events */}
            <div className="bg-primary-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
              <p className="text-gray-700 mb-6">
                To stay informed about upcoming events and activities, please contact us or check back regularly for updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 text-center"
                >
                  Contact Us for Event Information
                </a>
                <a
                  href="/membership"
                  className="inline-block bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200 text-center"
                >
                  Become a Member
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

