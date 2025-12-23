'use client'

import { useState } from 'react'
import { FaUsers, FaFacebook, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface BoardMember {
  id: string
  name: string
  designation: string
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

  // Sample data structure - in production, this would come from an API or database
  // Add members for each year as needed (from 2020 onwards)
  const boardData: YearData[] = [
    {
      year: 2020,
      members: [
        {
          id: '1',
          name: 'Mohammad Rahman',
          designation: 'President',
          photo: '',
          facebookUrl: 'https://www.facebook.com',
        },
        {
          id: '2',
          name: 'Abdul Karim',
          designation: 'Vice President',
          photo: '',
          facebookUrl: 'https://www.facebook.com',
        },
        {
          id: '3',
          name: 'Fatema Begum',
          designation: 'Secretary',
          photo: '',
          facebookUrl: 'https://www.facebook.com',
        },
        {
          id: '4',
          name: 'Hasan Ali',
          designation: 'Treasurer',
          photo: '',
          facebookUrl: 'https://www.facebook.com',
        },
      ],
    },
    {
      year: currentYear,
      members: [
        {
          id: '1',
          name: 'Ahmed Hossain',
          designation: 'President',
          photo: '',
          facebookUrl: 'https://www.facebook.com',
        },
        {
          id: '2',
          name: 'Nurul Islam',
          designation: 'Vice President',
          photo: '',
          facebookUrl: 'https://www.facebook.com',
        },
        {
          id: '3',
          name: 'Rashida Khatun',
          designation: 'General Secretary',
          photo: '',
          facebookUrl: 'https://www.facebook.com',
        },
        {
          id: '4',
          name: 'Kamal Uddin',
          designation: 'Treasurer',
          photo: '',
          facebookUrl: 'https://www.facebook.com',
        },
        {
          id: '5',
          name: 'Shamima Akter',
          designation: 'Joint Secretary',
          photo: '',
          facebookUrl: 'https://www.facebook.com',
        },
        {
          id: '6',
          name: 'Mizanur Rahman',
          designation: 'Organizing Secretary',
          photo: '',
          facebookUrl: 'https://www.facebook.com',
        },
        {
          id: '7',
          name: 'Salma Begum',
          designation: 'Cultural Secretary',
          photo: '',
          facebookUrl: 'https://www.facebook.com',
        },
        {
          id: '8',
          name: 'Rafiqul Islam',
          designation: 'Member',
          photo: '',
          facebookUrl: 'https://www.facebook.com',
        },
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
                    Executive Board Members {selectedYear}
                  </h2>
                  <p className="text-gray-600">
                    Our dedicated leadership team for {selectedYear}
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
                            className="absolute top-2 right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-200 shadow-md opacity-0 group-hover:opacity-100"
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

