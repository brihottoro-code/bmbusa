'use client'

import { useState } from 'react'
import { FaAward, FaFacebook, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

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

export default function HonorableBoard() {
  const startYear = 2020
  const currentYear = new Date().getFullYear()
  const [selectedYear, setSelectedYear] = useState(currentYear)
  
  // Generate years from 2020 to 50 years in the future (2070)
  const years = Array.from({ length: 51 }, (_, i) => startYear + i)

  // Honorable Board Members - Same for 2024-2026 session (2 years: 2024 and 2025)
  const honorableMembers: BoardMember[] = [
    {
      id: '1',
      name: 'Md. Hafizur Rahman',
      designation: 'Chief Advisor',
      phone: '+1 (646) 546-2250',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '2',
      name: 'Agriculturalist Maqbul Hossain Talukder',
      designation: 'Advisor',
      phone: 'N/A',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '3',
      name: 'Roise Uddin',
      designation: 'Advisor',
      phone: '+1 (929) 312-7691',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '4',
      name: 'Titu Khan',
      designation: 'Advisor',
      phone: '+1 (347) 301-2585',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '5',
      name: 'Anwar Alam Bhuiya',
      designation: 'Advisor',
      phone: 'N/A',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '6',
      name: 'Aktaruzzaman Happy',
      designation: 'Advisor',
      phone: '+1 (646) 236-9371',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '7',
      name: 'Md. Nurul Islam',
      designation: 'Advisor',
      phone: '+1 (347) 720-5613',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '8',
      name: 'Azahar Ali Khan',
      designation: 'Advisor',
      phone: '+1 (917) 494-5316',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '9',
      name: 'Md. Himel',
      designation: 'Advisor',
      phone: '+1 (917) 412-7090',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '10',
      name: 'Mahbubur Rahman (Manu)',
      designation: 'Advisor',
      phone: 'N/A',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '11',
      name: 'Habibur Rahman (Harun)',
      designation: 'Advisor',
      phone: 'N/A',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '12',
      name: 'Hedayetul Islam',
      designation: 'Advisor',
      phone: '+1 (646) 554-3632',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '13',
      name: 'Md. Ashraf Ali',
      designation: 'Advisor',
      phone: 'N/A',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '14',
      name: 'Abdul Mannaf Talukdar',
      designation: 'Advisor',
      phone: '+1 (347) 476-2302',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '15',
      name: 'Md. Amirul Islam (Kamal)',
      designation: 'Advisor',
      phone: 'N/A',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '16',
      name: 'Shek Al Hadi',
      designation: 'Advisor',
      phone: 'N/A',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '17',
      name: 'Advocate Abu Taher (Hiro)',
      designation: 'Advisor',
      phone: '+1 (832) 978-2446',
      photo: '',
      facebookUrl: undefined,
    },
    {
      id: '18',
      name: 'Md. Shajahan Akondho',
      designation: 'Advisor',
      phone: 'N/A',
      photo: '',
      facebookUrl: undefined,
    },
  ]

  // Create board data for years 2024 and 2025 with the same members (2024-2026 session)
  const boardData: YearData[] = [2024, 2025].map(year => ({
    year,
    members: honorableMembers,
  }))

  const currentYearData = boardData.find(data => data.year === selectedYear) || { year: selectedYear, members: selectedYear === 2024 || selectedYear === 2025 ? honorableMembers : [] }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <FaAward className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">Honorable Board</h1>
          </div>
          <p className="text-xl text-primary-100 max-w-3xl">
            Our distinguished Honorable Board members who contribute their expertise and wisdom
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
                    Honorable Board Members {selectedYear === 2024 || selectedYear === 2025 ? '2024-2026' : selectedYear}
                  </h2>
                  <p className="text-gray-600">
                    Our distinguished honorable board members {selectedYear === 2024 || selectedYear === 2025 ? 'for the 2024-2026 session (2 years)' : `for ${selectedYear}`}
                  </p>
                </div>

                {/* Table Format */}
                <div className="mb-12 overflow-x-auto">
                  <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden text-sm">
                    <thead className="bg-yellow-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-center font-semibold w-12">No.</th>
                        <th className="px-4 py-3 text-left font-semibold">Designation</th>
                        <th className="px-4 py-3 text-left font-semibold">Name (English)</th>
                        <th className="px-4 py-3 text-left font-semibold">Cell Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentYearData.members.map((member, index) => (
                        <tr
                          key={member.id}
                          className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-4 py-3 text-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm">
                              {index + 1}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-yellow-600 font-medium">{member.designation}</td>
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
                      <div className="relative aspect-square bg-gradient-to-br from-yellow-100 to-yellow-200 overflow-hidden">
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
                            <FaAward className="text-6xl text-yellow-400 opacity-50" />
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
                        <p className="text-sm text-yellow-600 font-semibold">{member.designation}</p>
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
                  <FaAward className="text-4xl text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Members Added Yet</h3>
                <p className="text-gray-600 mb-6">
                  Honorable board members for {selectedYear} will be displayed here once added.
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

