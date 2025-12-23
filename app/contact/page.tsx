import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaClock, FaUsers } from 'react-icons/fa'

export default function Contact() {
  const contactMethods = [
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: '89-67 215th PL',
      subContent: 'Queens Village, NY 11427',
      link: null,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'brihottoro@gmail.com',
      subContent: 'Send us an email anytime',
      link: 'mailto:brihottoro@gmail.com',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+1 (646) 824-0777',
      subContent: 'Call us during business hours',
      link: 'tel:+16468240777',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 5:00 PM',
      subContent: 'Saturday: 10:00 AM - 2:00 PM',
      link: null,
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const socialLinks = [
    {
      icon: FaFacebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/bmbusainc/',
      color: 'hover:bg-blue-600 hover:text-white',
    },
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <FaEnvelope className="text-6xl opacity-90" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-4">
              We&apos;re here to help and answer any questions you may have
            </p>
            <p className="text-lg text-primary-200">
              Whether you have questions about membership, events, or need assistance, our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose your preferred method to reach out to us. We&apos;re committed to responding to all inquiries promptly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                const content = (
                  <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full ${
                    method.link ? 'cursor-pointer group' : ''
                  }`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-lg text-gray-700 font-medium mb-2">{method.content}</p>
                    <p className="text-sm text-gray-500">{method.subContent}</p>
                  </div>
                )

                return method.link ? (
                  <a key={index} href={method.link} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                )
              })}
            </div>

            {/* Social Media Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Follow Us on Social Media</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Stay connected with our community and get the latest updates on events, activities, and news.
                </p>
              </div>

              <div className="flex justify-center">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color} shadow-md hover:shadow-lg`}
                      aria-label={social.name}
                    >
                      <Icon size={24} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Membership Inquiries</h3>
                <p className="text-gray-700 mb-4">
                  Interested in becoming a member? We&apos;d love to have you join our community. Contact us to learn more about membership benefits and the application process.
                </p>
                <a
                  href="/membership"
                  className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Learn More About Membership →
                </a>
              </div>

              <div className="bg-accent-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Event Information</h3>
                <p className="text-gray-700 mb-4">
                  Want to know about upcoming events and activities? Get in touch with us for the latest schedule and event details.
                </p>
                <a
                  href="/events"
                  className="inline-block text-accent-600 font-semibold hover:text-accent-700 transition-colors"
                >
                  View Upcoming Events →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

