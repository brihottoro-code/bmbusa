'use client'

import { useState } from 'react'
import { FaUsers, FaFacebook, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface BoardMember {
  id: string
  name: string
  designation: string
  phone?: string
  photo: string
  facebookUrl?: string
}

interface YearData {
  year: number
  members: BoardMember[]
}

export default function ExecutiveBoard() {
  const startYear = 2020
  const currentYear = new Date().getFullYear()
  const [selectedYear, setSelectedYear] = useState(currentYear)
  
  // Generate years from 2020 to 50 years in the future (2070)
  const years = Array.from({ length: 51 }, (_, i) => startYear + i)

  // Executive Board Members Data (2024-2026 Session - 2 years)
  const boardData: YearData[] = [
    {
      year: 2024,
      members: [
        { id: '1', name: 'M A Bari (Badal)', designation: 'President', phone: '+1 (347) 339-7721', photo: '', facebookUrl: undefined },
        { id: '2', name: 'Mashiur Rahman (Shapon)', designation: 'Senior Vice President', phone: '+1 (917) 500-5286', photo: '', facebookUrl: undefined },
        { id: '3', name: 'Md. Azizul Haque', designation: 'Vice President', phone: '+1 (929) 283-2847', photo: '', facebookUrl: undefined },
        { id: '4', name: 'Md. Alauddin', designation: 'Vice President', phone: '+1 (347) 299-2519', photo: '', facebookUrl: undefined },
        { id: '5', name: 'Kurshed Alam (Biplob)', designation: 'Vice President', phone: '+1 (347) 299-2519', photo: '', facebookUrl: undefined },
        { id: '6', name: 'Md. Shahnewaz Zaman (Santo)', designation: 'General Secretary', phone: '+1 (917) 561-6554', photo: '', facebookUrl: undefined },
        { id: '7', name: 'Shams Ahmed (Shubro)', designation: 'Joint General Secretary', phone: '+1 (347) 759-4120', photo: '', facebookUrl: undefined },
        { id: '8', name: 'Sayed Wahid Ullah', designation: 'Associate General Secretary', phone: '+1 (347) 761-6188', photo: '', facebookUrl: undefined },
        { id: '9', name: 'Md. Muzzammel Haque', designation: 'Associate General Secretary', phone: '+1 (646) 512-8067', photo: '', facebookUrl: undefined },
        { id: '10', name: 'Nilutpal Sarker (Drubo)', designation: 'Associate General Secretary', phone: '+1 (917) 774-5871', photo: '', facebookUrl: undefined },
        { id: '11', name: 'Nur Faisal (Moni)', designation: 'Treasurer', phone: '+1 (646) 824-0777', photo: '', facebookUrl: undefined },
        { id: '12', name: 'Md. Masudur Rahman (Shahin)', designation: 'Treasurer', phone: '+1 (347) 261-0562', photo: '', facebookUrl: undefined },
        { id: '13', name: 'Mizanur Rahman (Murad)', designation: 'Organizing Secretary', phone: '+1 (929) 365-4633', photo: '', facebookUrl: undefined },
        { id: '14', name: 'Pallob Sarker', designation: 'Organizing Secretary', phone: '+1 (609) 553-8953', photo: '', facebookUrl: undefined },
        { id: '15', name: 'Md. Shamim Hossain', designation: 'Publicity Secretary', phone: '+1 (929) 331-5906', photo: '', facebookUrl: undefined },
        { id: '16', name: 'Md. Abdul Halim', designation: 'Social Welfare Secretary', phone: '+1 (718) 673-7882', photo: '', facebookUrl: undefined },
        { id: '17', name: 'Dr. Fatim', designation: 'Education Secretary', phone: '+1 (332) 260-8749', photo: '', facebookUrl: undefined },
        { id: '18', name: 'Mohibur Rahman (Jewel)', designation: 'Religion Secretary', phone: '+1 (646) 944-6988', photo: '', facebookUrl: undefined },
        { id: '19', name: 'Akram Hossain', designation: 'Office Secretary', phone: '+1 (206) 571-8676', photo: '', facebookUrl: undefined },
        { id: '20', name: 'M A Mouli', designation: 'Female Secretary', phone: '+1 (347) 851-0458', photo: '', facebookUrl: undefined },
        { id: '21', name: 'Harun Al Momin (Sumon)', designation: 'Information & Technology Secretary', phone: '+1 (631) 245-2819', photo: '', facebookUrl: undefined },
        { id: '22', name: 'Fukrul Islam (Ananto)', designation: 'Literary & Cultural Secretary', phone: '+1 (347) 247-7341', photo: '', facebookUrl: undefined },
        { id: '23', name: 'Md. Rabiul Hasan', designation: 'Literary & Cultural Secretary', phone: '+1 (646) 321-0810', photo: '', facebookUrl: undefined },
        { id: '24', name: 'Ibrahim Rakib (Babu)', designation: 'Sports Secretary', phone: '+1 (929) 589-6511', photo: '', facebookUrl: undefined },
        { id: '25', name: 'Mubashir Ahmed (Rupon)', designation: 'Associate Sports Secretary', phone: '+1 (347) 280-8506', photo: '', facebookUrl: undefined },
        { id: '26', name: 'Md. Jahangir Alam', designation: 'Entertainment Secretary', phone: '+1 (347) 479-9816', photo: '', facebookUrl: undefined },
        { id: '27', name: 'Mahbubul Alam (Kosru)', designation: 'Honorable Member', phone: '+1 (929) 235-2368', photo: '', facebookUrl: undefined },
        { id: '28', name: 'Md. Ruhul Amin (Jewel)', designation: 'Member', phone: '+1 (347) 984-7247', photo: '', facebookUrl: undefined },
        { id: '29', name: 'Md. Mahbubur Rahman', designation: 'Member', phone: '+1 (917) 403-1595', photo: '', facebookUrl: undefined },
        { id: '30', name: 'Md. Hafizur Rahman (Chandan)', designation: 'Member', phone: 'N/A', photo: '', facebookUrl: undefined },
        { id: '31', name: 'Nirmol De', designation: 'Member', phone: '+1 (347) 744-4245', photo: '', facebookUrl: undefined },
        { id: '32', name: 'Kamrul Hasan (Mamun)', designation: 'Member', phone: '+1 (718) 219-3686', photo: '', facebookUrl: undefined },
        { id: '33', name: 'Mohammad Samsul Alam', designation: 'Member', phone: '+1 (929) 386-3856', photo: '', facebookUrl: undefined },
        { id: '34', name: 'Kazi Enam', designation: 'Member', phone: '+1 (410) 845-6493', photo: '', facebookUrl: undefined },
        { id: '35', name: 'K H Mehdi Hasan (Nahid)', designation: 'Member', phone: '+1 (347) 257-7070', photo: '', facebookUrl: undefined },
        { id: '36', name: 'Faisal Majumder', designation: 'Member', phone: '+1 (929) 422-3257', photo: '', facebookUrl: undefined },
        { id: '37', name: 'Josim Mia', designation: 'Member', phone: '+1 (347) 653-4802', photo: '', facebookUrl: undefined },
        { id: '38', name: 'Mohammad Anisur Rahman (Shuhag)', designation: 'Member', phone: '+1 (631) 408-2559', photo: '', facebookUrl: undefined },
        { id: '39', name: 'Anwar Hossain (Tofa)', designation: 'Member', phone: '+1 (646) 750-7317', photo: '', facebookUrl: undefined },
        { id: '40', name: 'Md. Mihaduzzaman Khan (Mizan)', designation: 'Member', phone: '+1 (631) 429-1431', photo: '', facebookUrl: undefined },
        { id: '41', name: 'ATM Numan', designation: 'Member', phone: '+1 (347) 261-5802', photo: '', facebookUrl: undefined },
        { id: '42', name: 'Md. Faisal Azad', designation: 'Member', phone: '+1 (347) 301-5810', photo: '', facebookUrl: undefined },
        { id: '43', name: 'Joyonto De', designation: 'Member', phone: '+1 (646) 229-1173', photo: '', facebookUrl: undefined },
      ],
    },
    {
      year: 2025,
      members: [
        { id: '1', name: 'M A Bari (Badal)', designation: 'President', phone: '+1 (347) 339-7721', photo: '', facebookUrl: undefined },
        { id: '2', name: 'Mashiur Rahman (Shapon)', designation: 'Senior Vice President', phone: '+1 (917) 500-5286', photo: '', facebookUrl: undefined },
        { id: '3', name: 'Md. Azizul Haque', designation: 'Vice President', phone: '+1 (929) 283-2847', photo: '', facebookUrl: undefined },
        { id: '4', name: 'Md. Alauddin', designation: 'Vice President', phone: '+1 (347) 299-2519', photo: '', facebookUrl: undefined },
        { id: '5', name: 'Kurshed Alam (Biplob)', designation: 'Vice President', phone: '+1 (347) 299-2519', photo: '', facebookUrl: undefined },
        { id: '6', name: 'Md. Shahnewaz Zaman (Santo)', designation: 'General Secretary', phone: '+1 (917) 561-6554', photo: '', facebookUrl: undefined },
        { id: '7', name: 'Shams Ahmed (Shubro)', designation: 'Joint General Secretary', phone: '+1 (347) 759-4120', photo: '', facebookUrl: undefined },
        { id: '8', name: 'Sayed Wahid Ullah', designation: 'Associate General Secretary', phone: '+1 (347) 761-6188', photo: '', facebookUrl: undefined },
        { id: '9', name: 'Md. Muzzammel Haque', designation: 'Associate General Secretary', phone: '+1 (646) 512-8067', photo: '', facebookUrl: undefined },
        { id: '10', name: 'Nilutpal Sarker (Drubo)', designation: 'Associate General Secretary', phone: '+1 (917) 774-5871', photo: '', facebookUrl: undefined },
        { id: '11', name: 'Nur Faisal (Moni)', designation: 'Treasurer', phone: '+1 (646) 824-0777', photo: '', facebookUrl: undefined },
        { id: '12', name: 'Md. Masudur Rahman (Shahin)', designation: 'Treasurer', phone: '+1 (347) 261-0562', photo: '', facebookUrl: undefined },
        { id: '13', name: 'Mizanur Rahman (Murad)', designation: 'Organizing Secretary', phone: '+1 (929) 365-4633', photo: '', facebookUrl: undefined },
        { id: '14', name: 'Pallob Sarker', designation: 'Organizing Secretary', phone: '+1 (609) 553-8953', photo: '', facebookUrl: undefined },
        { id: '15', name: 'Md. Shamim Hossain', designation: 'Publicity Secretary', phone: '+1 (929) 331-5906', photo: '', facebookUrl: undefined },
        { id: '16', name: 'Md. Abdul Halim', designation: 'Social Welfare Secretary', phone: '+1 (718) 673-7882', photo: '', facebookUrl: undefined },
        { id: '17', name: 'Dr. Fatim', designation: 'Education Secretary', phone: '+1 (332) 260-8749', photo: '', facebookUrl: undefined },
        { id: '18', name: 'Mohibur Rahman (Jewel)', designation: 'Religion Secretary', phone: '+1 (646) 944-6988', photo: '', facebookUrl: undefined },
        { id: '19', name: 'Akram Hossain', designation: 'Office Secretary', phone: '+1 (206) 571-8676', photo: '', facebookUrl: undefined },
        { id: '20', name: 'M A Mouli', designation: 'Female Secretary', phone: '+1 (347) 851-0458', photo: '', facebookUrl: undefined },
        { id: '21', name: 'Harun Al Momin (Sumon)', designation: 'Information & Technology Secretary', phone: '+1 (631) 245-2819', photo: '', facebookUrl: undefined },
        { id: '22', name: 'Fukrul Islam (Ananto)', designation: 'Literary & Cultural Secretary', phone: '+1 (347) 247-7341', photo: '', facebookUrl: undefined },
        { id: '23', name: 'Md. Rabiul Hasan', designation: 'Literary & Cultural Secretary', phone: '+1 (646) 321-0810', photo: '', facebookUrl: undefined },
        { id: '24', name: 'Ibrahim Rakib (Babu)', designation: 'Sports Secretary', phone: '+1 (929) 589-6511', photo: '', facebookUrl: undefined },
        { id: '25', name: 'Mubashir Ahmed (Rupon)', designation: 'Associate Sports Secretary', phone: '+1 (347) 280-8506', photo: '', facebookUrl: undefined },
        { id: '26', name: 'Md. Jahangir Alam', designation: 'Entertainment Secretary', phone: '+1 (347) 479-9816', photo: '', facebookUrl: undefined },
        { id: '27', name: 'Mahbubul Alam (Kosru)', designation: 'Honorable Member', phone: '+1 (929) 235-2368', photo: '', facebookUrl: undefined },
        { id: '28', name: 'Md. Ruhul Amin (Jewel)', designation: 'Member', phone: '+1 (347) 984-7247', photo: '', facebookUrl: undefined },
        { id: '29', name: 'Md. Mahbubur Rahman', designation: 'Member', phone: '+1 (917) 403-1595', photo: '', facebookUrl: undefined },
        { id: '30', name: 'Md. Hafizur Rahman (Chandan)', designation: 'Member', phone: 'N/A', photo: '', facebookUrl: undefined },
        { id: '31', name: 'Nirmol De', designation: 'Member', phone: '+1 (347) 744-4245', photo: '', facebookUrl: undefined },
        { id: '32', name: 'Kamrul Hasan (Mamun)', designation: 'Member', phone: '+1 (718) 219-3686', photo: '', facebookUrl: undefined },
        { id: '33', name: 'Mohammad Samsul Alam', designation: 'Member', phone: '+1 (929) 386-3856', photo: '', facebookUrl: undefined },
        { id: '34', name: 'Kazi Enam', designation: 'Member', phone: '+1 (410) 845-6493', photo: '', facebookUrl: undefined },
        { id: '35', name: 'K H Mehdi Hasan (Nahid)', designation: 'Member', phone: '+1 (347) 257-7070', photo: '', facebookUrl: undefined },
        { id: '36', name: 'Faisal Majumder', designation: 'Member', phone: '+1 (929) 422-3257', photo: '', facebookUrl: undefined },
        { id: '37', name: 'Josim Mia', designation: 'Member', phone: '+1 (347) 653-4802', photo: '', facebookUrl: undefined },
        { id: '38', name: 'Mohammad Anisur Rahman (Shuhag)', designation: 'Member', phone: '+1 (631) 408-2559', photo: '', facebookUrl: undefined },
        { id: '39', name: 'Anwar Hossain (Tofa)', designation: 'Member', phone: '+1 (646) 750-7317', photo: '', facebookUrl: undefined },
        { id: '40', name: 'Md. Mihaduzzaman Khan (Mizan)', designation: 'Member', phone: '+1 (631) 429-1431', photo: '', facebookUrl: undefined },
        { id: '41', name: 'ATM Numan', designation: 'Member', phone: '+1 (347) 261-5802', photo: '', facebookUrl: undefined },
        { id: '42', name: 'Md. Faisal Azad', designation: 'Member', phone: '+1 (347) 301-5810', photo: '', facebookUrl: undefined },
        { id: '43', name: 'Joyonto De', designation: 'Member', phone: '+1 (646) 229-1173', photo: '', facebookUrl: undefined },
      ],
    },
  ]

  const currentYearData = boardData.find(data => data.year === selectedYear) || { year: selectedYear, members: [] }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <FaUsers className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">Executive Board</h1>
          </div>
          <p className="text-xl text-primary-100 max-w-3xl">
            Meet our dedicated Executive Board members who lead and guide our organization
          </p>
        </div>
      </section>

      {/* Year Selection */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-2xl font-bold text-gray-900">Select Year</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSelectedYear(Math.max(startYear, selectedYear - 1))}
                  disabled={selectedYear <= startYear}
                  className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous year"
                >
                  <FaChevronLeft />
                </button>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(Number(e.target.value))}
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none font-semibold"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => setSelectedYear(Math.min(startYear + 50, selectedYear + 1))}
                  disabled={selectedYear >= startYear + 50}
                  className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next year"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {currentYearData.members.length > 0 ? (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Executive Board Members {selectedYear === 2024 || selectedYear === 2025 ? '2024-2026' : selectedYear}
                  </h2>
                  <p className="text-gray-600">
                    Our dedicated leadership team {selectedYear === 2024 || selectedYear === 2025 ? 'for the 2024-2026 session (2 years)' : `for ${selectedYear}`}
                  </p>
                </div>

                {/* Table Format */}
                <div className="mb-12 overflow-x-auto">
                  <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-primary-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-center font-semibold w-16">No.</th>
                        <th className="px-6 py-4 text-left font-semibold">Name</th>
                        <th className="px-6 py-4 text-left font-semibold">Designation</th>
                        <th className="px-6 py-4 text-center font-semibold">Facebook</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentYearData.members.map((member, index) => (
                        <tr
                          key={member.id}
                          className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm">
                              {index + 1}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-900 font-semibold">{member.name}</td>
                          <td className="px-6 py-4 text-primary-600">{member.designation}</td>
                          <td className="px-6 py-4 text-center">
                            {member.facebookUrl ? (
                              <a
                                href={member.facebookUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-200"
                                aria-label={`${member.name}'s Facebook`}
                              >
                                <FaFacebook />
                              </a>
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Photo Gallery */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Photo Gallery</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {currentYearData.members.map((member) => (
                    <div
                      key={member.id}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group"
                    >
                      <div className="relative aspect-square bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                        {member.photo && member.photo.startsWith('http') ? (
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                            }}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <FaUsers className="text-6xl text-primary-400 opacity-50" />
                          </div>
                        )}
                        {member.facebookUrl && (
                          <a
                            href={member.facebookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-2 right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-200 shadow-md"
                            aria-label={`${member.name}'s Facebook`}
                          >
                            <FaFacebook />
                          </a>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-sm text-primary-600 font-semibold">{member.designation}</p>
                        {member.facebookUrl && (
                          <a
                            href={member.facebookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 mt-3 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                          >
                            <FaFacebook className="text-xs" />
                            <span>Facebook</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaUsers className="text-4xl text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Members Added Yet</h3>
                <p className="text-gray-600 mb-6">
                  Executive board members for {selectedYear} will be displayed here once added.
                </p>
                <p className="text-sm text-gray-500">
                  Check back later or contact us for more information.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

