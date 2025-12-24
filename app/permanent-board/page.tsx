'use client'

import { useState } from 'react'
import { FaUserTie, FaFacebook, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface BoardMember {
  id: string
  name: string
  designation: string
  phone?: string
  currentCityState?: string
  bangladeshDistrict?: string
  photo: string
  facebookUrl?: string
}

interface YearData {
  year: number
  members: BoardMember[]
}

export default function PermanentBoard() {
  const startYear = 2020
  const currentYear = new Date().getFullYear()
  const [selectedYear, setSelectedYear] = useState(currentYear)
  
  // Generate years from 2020 to 50 years in the future (2070)
  const years = Array.from({ length: 51 }, (_, i) => startYear + i)

  // Permanent Board Members - Same for all years (2020-2025)
  const permanentMembers: BoardMember[] = [
    {
      id: '1',
      name: 'Md Nasir Uddin',
      designation: 'Director',
      phone: '+1 (917) 957-8941',
      currentCityState: 'Queens, NY',
      bangladeshDistrict: 'Mymensingh',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '2',
      name: 'Mahabub Kabir',
      designation: 'Director',
      phone: '+1 (646) 266-1149',
      currentCityState: 'Queens, NY',
      bangladeshDistrict: 'Mymensingh',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '3',
      name: 'Md. Mahbubur Rahman Liton',
      designation: 'Director',
      phone: '+1 (917) 400-4882',
      currentCityState: 'Queens, NY',
      bangladeshDistrict: 'Mymensingh',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '4',
      name: 'AKM Shafiqul Haque',
      designation: 'Director',
      phone: '+1 (646) 244-3365',
      currentCityState: 'Queens, NY',
      bangladeshDistrict: 'Mymensingh',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '5',
      name: 'Md. Shah Alam',
      designation: 'Director',
      phone: '+1 (646) 206-9967',
      currentCityState: 'Queens, NY',
      bangladeshDistrict: 'Mymensingh',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '6',
      name: 'Md Samsul Alam (Khokon)',
      designation: 'Director',
      phone: '+1 (631) 676-1367',
      currentCityState: '',
      bangladeshDistrict: '',
      photo: '',
      facebookUrl: undefined,
    },
  ]

  // Create board data for years 2020-2025 with the same members
  const boardData: YearData[] = [2020, 2021, 2022, 2023, 2024, 2025].map(year => ({
    year,
    members: permanentMembers,
  }))

  const currentYearData = boardData.find(data => data.year === selectedYear) || { year: selectedYear, members: selectedYear >= 2020 && selectedYear <= 2025 ? permanentMembers : [] }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <FaUserTie className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">Permanent Board</h1>
          </div>
          <p className="text-xl text-primary-100 max-w-3xl">
            Our Permanent Board members who provide ongoing guidance and support to the organization
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
                    Permanent Board Members {selectedYear}
                  </h2>
                  <p className="text-gray-600">
                    Our dedicated permanent board members for {selectedYear}
                  </p>
                </div>

                {/* Table Format */}
                <div className="mb-12 overflow-x-auto">
                  <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden text-sm">
                    <thead className="bg-purple-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-center font-semibold w-12">No.</th>
                        <th className="px-4 py-3 text-left font-semibold">Designation</th>
                        <th className="px-4 py-3 text-left font-semibold">Name (English)</th>
                        <th className="px-4 py-3 text-left font-semibold">Cell Phone</th>
                        <th className="px-4 py-3 text-left font-semibold">Current City, State</th>
                        <th className="px-4 py-3 text-left font-semibold">Bangladesh (District)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentYearData.members.map((member, index) => (
                        <tr
                          key={member.id}
                          className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-4 py-3 text-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm">
                              {index + 1}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-purple-600 font-medium">{member.designation}</td>
                          <td className="px-4 py-3 text-gray-900 font-semibold">{member.name}</td>
                          <td className="px-4 py-3 text-gray-700">
                            {member.phone && member.phone !== 'N/A' ? (
                              <a href={`tel:${member.phone.replace(/\s/g, '').replace(/[()]/g, '').replace(/-/g, '')}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                                {member.phone}
                              </a>
                            ) : (
                              <span className="text-gray-400">{member.phone || 'N/A'}</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-gray-700">{member.currentCityState || '-'}</td>
                          <td className="px-4 py-3 text-gray-700">{member.bangladeshDistrict || '-'}</td>
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
                      <div className="relative aspect-square bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden">
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
                            <FaUserTie className="text-6xl text-purple-400 opacity-50" />
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
                        <p className="text-sm text-purple-600 font-semibold">{member.designation}</p>
                        {member.phone && member.phone !== 'N/A' && (
                          <p className="text-xs text-gray-500 mt-2">{member.phone}</p>
                        )}
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
                  <FaUserTie className="text-4xl text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Members Added Yet</h3>
                <p className="text-gray-600 mb-6">
                  Permanent board members for {selectedYear} will be displayed here once added.
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

