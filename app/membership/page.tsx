'use client'

import { useState } from 'react'
import { FaCheckCircle, FaUser, FaDollarSign, FaGift, FaTimesCircle, FaUserCheck, FaFileAlt, FaCamera, FaCheck } from 'react-icons/fa'
import Link from 'next/link'

export default function Membership() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    age: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA',
    originDistrict: '',
    originUpazila: '',
    maritalStatus: '',
    spouseName: '',
    paymentMethod: 'monthly',
    paymentType: 'zelle',
    zelleReference: '',
    photoUpload: null as File | null,
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Google Apps Script Web App URL - Replace with your deployed script URL
  // Get this URL after deploying the Google Apps Script (see google-apps-script.js for instructions)
  const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    const files = (e.target as HTMLInputElement).files

    if (type === 'file' && files) {
      setFormData({
        ...formData,
        [name]: files[0],
      })
    } else {
      // Clear Zelle reference when switching away from Zelle payment
      const updatedData = {
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      }
      
      // If payment type changes and it's not Zelle, clear the Zelle reference
      if (name === 'paymentType' && value !== 'zelle') {
        updatedData.zelleReference = ''
      }
      
      setFormData(updatedData)
    }

    // Auto-calculate age from date of birth
    if (name === 'dateOfBirth' && value) {
      const birthDate = new Date(value)
      const today = new Date()
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      setFormData(prev => ({ ...prev, age: age.toString() }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate Zelle reference number if Zelle is selected
    if (formData.paymentType === 'zelle' && !formData.zelleReference?.trim()) {
      alert('Please enter your Zelle Reference Number to proceed.')
      return
    }

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.')
      return
    }

    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions to proceed.')
      return
    }
    
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Convert photo to base64 if exists
      let photoBase64 = null
      let photoFileName = null
      let photoMimeType = null
      
      if (formData.photoUpload) {
        const file = formData.photoUpload
        photoFileName = file.name
        photoMimeType = file.type || 'image/jpeg'
        
        photoBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => {
            const result = reader.result as string
            // Remove data:image/...;base64, prefix
            const base64 = result.split(',')[1]
            resolve(base64)
          }
          reader.onerror = reject
          reader.readAsDataURL(file)
        })
      }

      // Prepare submission data
      const submissionData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        age: formData.age,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
        originDistrict: formData.originDistrict,
        originUpazila: formData.originUpazila,
        maritalStatus: formData.maritalStatus,
        spouseName: formData.spouseName,
        paymentMethod: formData.paymentMethod,
        paymentType: formData.paymentType,
        zelleReference: formData.zelleReference,
        photoBase64: photoBase64 || null,
        photoFileName: photoFileName || null,
        photoMimeType: photoMimeType || null,
        agreeToTerms: formData.agreeToTerms,
      }

      // Check if Google Script URL is configured
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error('Google Apps Script URL is not configured. Please set NEXT_PUBLIC_GOOGLE_SCRIPT_URL environment variable. See GOOGLE_SHEETS_SETUP.md for setup instructions.')
      }

      // Submit to Google Apps Script
      // Using no-cors mode because Google Apps Script requires it for public access
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script public access
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      // Note: With no-cors mode, we can't read the response status
      // But if the fetch completes without throwing, we assume success
      // The actual submission happens server-side in Google Apps Script
      
      // Small delay to ensure submission is processed
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        age: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'USA',
        originDistrict: '',
        originUpazila: '',
        maritalStatus: '',
        spouseName: '',
        paymentMethod: 'monthly',
        paymentType: 'zelle',
        zelleReference: '',
        photoUpload: null,
        agreeToTerms: false,
      })

    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      setSubmitError(error instanceof Error ? error.message : 'An error occurred while submitting your application. Please try again.')
    }
  }
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Membership</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Join our community and become part of a supportive network dedicated to preserving Mymensingh culture
          </p>
        </div>
      </section>

      {/* Membership Eligibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Membership Eligibility</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <FaCheckCircle className="text-green-600 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Eligibility Requirements</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Permanent residents of Greater Mymensingh (marital connections accepted)</li>
                  <li>• Minimum age: 18 years</li>
                  <li>• Submit completed membership form with photo</li>
                  <li>• Pay prescribed membership fee</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <FaUser className="text-blue-600 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Membership Benefits</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Voting rights in organizational elections</li>
                  <li>• Access to community support services</li>
                  <li>• Eligibility for assistance programs</li>
                  <li>• Participation in all events and activities</li>
                </ul>
              </div>
            </div>

            {/* Membership Fees */}
            <div className="bg-primary-50 p-8 rounded-xl mb-12">
              <div className="flex items-center mb-6">
                <FaDollarSign className="text-primary-600 text-3xl mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Membership Fees</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Monthly Payment</h3>
                  <p className="text-3xl font-bold text-primary-600 mb-2">$10/month</p>
                  <p className="text-gray-600">Payable monthly via Zelle</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Annual Payment</h3>
                  <p className="text-3xl font-bold text-primary-600 mb-2">$120/year</p>
                  <p className="text-gray-600">One-time annual payment (save $0)</p>
                </div>
              </div>
              <p className="mt-6 text-gray-700">
                <strong>Payment Method:</strong> Zelle Payment (Zelle: +1 (646) 824-0777) payable to &quot;Brihottor Mymensinghbashi USA Inc.&quot;
              </p>
            </div>

            {/* Honorary Lifetime Membership */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl mb-12">
              <div className="flex items-center mb-6">
                <FaGift className="text-purple-600 text-3xl mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Honorary Lifetime Membership</h2>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  Distinguished individuals can become honorary lifetime members by donating at least <strong>$1,000</strong> to the organization.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lifetime membership status</li>
                    <li>• Recognition at annual picnic and social events</li>
                    <li>• Medal of recognition for contribution to the community</li>
                    <li>• Special acknowledgment for distinguished service</li>
                  </ul>
                </div>
                <p className="mt-4 text-sm text-gray-600 italic">
                  Note: This recognition program must not be discontinued under any circumstances.
                </p>
              </div>
            </div>

            {/* Membership Rules */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Membership Rules</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
                  <div className="flex items-start">
                    <FaTimesCircle className="text-yellow-600 text-xl mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Membership Revocation</h3>
                      <p className="text-gray-700">
                        Members who do not pay dues for over 2 years will have their membership revoked and lose all associated benefits and eligibility for candidacy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                  <div className="flex items-start">
                    <FaTimesCircle className="text-red-600 text-xl mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Criminal Conviction</h3>
                      <p className="text-gray-700">
                        Any member convicted or found guilty of a crime in the USA will lose their membership. If a member is sentenced to at least 6 months or fined $20,000 or more, their membership will be canceled without explanation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <div className="flex items-start">
                    <FaUserCheck className="text-blue-600 text-xl mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Voting Rights</h3>
                      <p className="text-gray-700">
                        All general members are eligible to vote. In the interest of the organization, the Executive Committee may be formed through selection. If elections are held, all members can exercise their voting rights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Apply</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Submit Payment</h3>
                    <p className="text-gray-700">Pay the membership fee ($10/month or $120/year) via Zelle (Zelle: +1 (646) 824-0777).</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Complete Application Form</h3>
                    <p className="text-gray-700">Fill out the membership application form with all required information and attach a recent photograph.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Submit to Organization</h3>
                    <p className="text-gray-700">Submit your completed form and payment to the organization&apos;s office or designated representative.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form Section */}
            <div className="mt-12">
              {!showForm && !isSubmitted && (
                <div className="text-center bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl">
                  <div className="flex items-center justify-center mb-4">
                    <FaFileAlt className="text-primary-600 text-4xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join?</h2>
                  <p className="text-gray-700 mb-6 text-lg">
                    Fill out our membership application form to become a part of our community.
                  </p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <FaFileAlt />
                    <span>Start Application Form</span>
                  </button>
                </div>
              )}

              {isSubmitted && (
                <div className="bg-green-50 border-2 border-green-500 p-8 rounded-xl text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheck className="text-white text-3xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
                  <p className="text-gray-700 mb-6">
                    Thank you for your interest in joining Brihottor Mymensinghbashi USA Inc. We have received your application and will review it shortly.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Please ensure you have attached your photo and are ready to submit your membership fee. Our team will contact you soon with next steps.
                  </p>
                  <button
                    onClick={() => {
                      setShowForm(false)
                      setIsSubmitted(false)
                      setFormData({
                        firstName: '',
                        lastName: '',
                        dateOfBirth: '',
                        age: '',
                        email: '',
                        phone: '',
                        address: '',
                        city: '',
                        state: '',
                        zipCode: '',
                        country: 'USA',
                        originDistrict: '',
                        originUpazila: '',
                        maritalStatus: '',
                        spouseName: '',
                        paymentMethod: 'monthly',
                        paymentType: 'zelle',
                        zelleReference: '',
                        photoUpload: null,
                        agreeToTerms: false,
                      })
                    }}
                    className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              )}

              {showForm && !isSubmitted && (
                <div className="bg-white border-2 border-primary-200 p-8 rounded-xl shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 flex items-center space-x-3">
                      <FaFileAlt className="text-primary-600" />
                      <span>Membership Application Form</span>
                    </h2>
                    <button
                      onClick={() => {
                        setShowForm(false)
                        setSubmitError(null)
                      }}
                      className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                    >
                      ×
                    </button>
                  </div>

                  {submitError && (
                    <div className="mb-6 bg-red-50 border-l-4 border-red-600 p-4 rounded-lg">
                      <div className="flex items-start">
                        <FaTimesCircle className="text-red-600 text-xl mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-red-900 mb-1">Submission Error</h3>
                          <p className="text-red-700">{submitError}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                            Date of Birth *
                          </label>
                          <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            required
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                            Age *
                          </label>
                          <input
                            type="number"
                            id="age"
                            name="age"
                            required
                            min="18"
                            value={formData.age}
                            onChange={handleChange}
                            readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          />
                          <p className="text-xs text-gray-500 mt-1">Minimum age: 18 years</p>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (646) 824-0777"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Address Information */}
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Address Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                            Street Address *
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            required
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                              City *
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              required
                              value={formData.city}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                            />
                          </div>
                          <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                              State *
                            </label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              required
                              value={formData.state}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                            />
                          </div>
                          <div>
                            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                              ZIP Code *
                            </label>
                            <input
                              type="text"
                              id="zipCode"
                              name="zipCode"
                              required
                              value={formData.zipCode}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                            Country *
                          </label>
                          <select
                            id="country"
                            name="country"
                            required
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          >
                            <option value="USA">United States of America</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Origin Information */}
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Origin Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="originDistrict" className="block text-sm font-medium text-gray-700 mb-2">
                            District/Region in Greater Mymensingh *
                          </label>
                          <input
                            type="text"
                            id="originDistrict"
                            name="originDistrict"
                            required
                            value={formData.originDistrict}
                            onChange={handleChange}
                            placeholder="e.g., Mymensingh, Netrokona, Jamalpur"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="originUpazila" className="block text-sm font-medium text-gray-700 mb-2">
                            Upazila/Thana
                          </label>
                          <input
                            type="text"
                            id="originUpazila"
                            name="originUpazila"
                            value={formData.originUpazila}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700 mb-2">
                            Marital Status
                          </label>
                          <select
                            id="maritalStatus"
                            name="maritalStatus"
                            value={formData.maritalStatus}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          >
                            <option value="">Select</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                          </select>
                        </div>
                        {formData.maritalStatus === 'married' && (
                          <div>
                            <label htmlFor="spouseName" className="block text-sm font-medium text-gray-700 mb-2">
                              Spouse Name (if applicable)
                            </label>
                            <input
                              type="text"
                              id="spouseName"
                              name="spouseName"
                              value={formData.spouseName}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">Payment Frequency *</label>
                          <div className="grid grid-cols-2 gap-4">
                            <label className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              formData.paymentMethod === 'monthly' ? 'border-primary-600 bg-primary-50' : 'border-gray-300 hover:border-primary-300'
                            }`}>
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="monthly"
                                checked={formData.paymentMethod === 'monthly'}
                                onChange={handleChange}
                                className="text-primary-600"
                              />
                              <div>
                                <div className="font-semibold text-gray-900">Monthly</div>
                                <div className="text-sm text-gray-600">$10/month</div>
                              </div>
                            </label>
                            <label className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              formData.paymentMethod === 'annual' ? 'border-primary-600 bg-primary-50' : 'border-gray-300 hover:border-primary-300'
                            }`}>
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="annual"
                                checked={formData.paymentMethod === 'annual'}
                                onChange={handleChange}
                                className="text-primary-600"
                              />
                              <div>
                                <div className="font-semibold text-gray-900">Annual</div>
                                <div className="text-sm text-gray-600">$120/year</div>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method *</label>
                          <div className="grid grid-cols-1 gap-4">
                            <label
                              className={`flex items-center space-x-2 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                                formData.paymentType === 'zelle' ? 'border-primary-600 bg-primary-50' : 'border-gray-300 hover:border-primary-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="paymentType"
                                value="zelle"
                                checked={formData.paymentType === 'zelle'}
                                onChange={handleChange}
                                className="text-primary-600"
                              />
                              <span className="text-sm font-medium text-gray-700">Zelle</span>
                            </label>
                          </div>
                          
                          {/* Zelle Payment Information - Always render but conditionally show */}
                          <div className={`mt-4 space-y-4 transition-all duration-300 ${formData.paymentType === 'zelle' ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                              <p className="text-sm text-gray-700 mb-2">
                                <strong>Zelle Payment Information:</strong>
                              </p>
                              <p className="text-sm text-gray-700">
                                Send payment to: <strong className="text-primary-600">+1 (646) 824-0777</strong>
                              </p>
                              <p className="text-xs text-gray-600 mt-2">
                                Please include your name and &quot;Membership Fee&quot; in the memo/note when sending payment.
                              </p>
                            </div>
                            <div className="bg-white p-4 border-2 border-blue-200 rounded-lg shadow-sm">
                              <label htmlFor="zelleReference" className="block text-sm font-medium text-gray-700 mb-2">
                                Zelle Reference Number <span className="text-red-600">*</span>
                              </label>
                              <input
                                type="text"
                                id="zelleReference"
                                name="zelleReference"
                                required={formData.paymentType === 'zelle'}
                                value={formData.zelleReference || ''}
                                onChange={handleChange}
                                placeholder="Enter your Zelle transaction reference number"
                                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                                aria-required="true"
                                disabled={formData.paymentType !== 'zelle'}
                              />
                              <p className="text-xs text-gray-500 mt-1">
                                Please enter the reference number from your Zelle payment confirmation. This field is required when using Zelle payment.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Photo Upload */}
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Photo Upload</h3>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <label htmlFor="photoUpload" className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Recent Photograph *
                          </label>
                          <input
                            type="file"
                            id="photoUpload"
                            name="photoUpload"
                            accept="image/*"
                            required
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          />
                          <p className="text-xs text-gray-500 mt-1">Please upload a recent passport-size photograph (JPG, PNG, max 5MB)</p>
                        </div>
                        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FaCamera className="text-gray-400 text-2xl" />
                        </div>
                      </div>
                    </div>

                    {/* Terms and Agreement */}
                    <div>
                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          required
                          className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500 mt-1"
                        />
                        <span className="text-sm text-gray-700">
                          I certify that all information provided is true and accurate. I understand that membership is subject to approval by the organization and agree to abide by the constitution and bylaws of Brihottor Mymensinghbashi USA Inc. *
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting || !formData.agreeToTerms}
                        className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <FaCheck />
                            <span>Submit Application</span>
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

