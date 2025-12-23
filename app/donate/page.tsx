'use client'

import { useState } from 'react'
import { FaHeart, FaDollarSign, FaCheckCircle, FaInfoCircle, FaMoneyBillWave, FaMobileAlt } from 'react-icons/fa'

export default function Donate() {
  const [formData, setFormData] = useState({
    amount: '',
    customAmount: '',
    paymentMethod: 'cash',
    zelleReference: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA',
    purpose: 'general',
    customPurpose: '',
    anonymous: false,
    recurring: false,
    comments: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const presetAmounts = [25, 50, 100, 250, 500, 1000]

  const purposes = [
    { value: 'general', label: 'General Support' },
    { value: 'cultural', label: 'Cultural Activities & Events' },
    { value: 'welfare', label: 'Social Welfare & Assistance' },
    { value: 'funeral', label: 'Funeral & Memorial Services' },
    { value: 'education', label: 'Education Programs' },
    { value: 'immigrant', label: 'Immigrant Support Services' },
    { value: 'disaster', label: 'Disaster Relief' },
    { value: 'other', label: 'Other (specify)' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    const updatedData = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    }

    // Clear Zelle reference when switching away from Zelle payment
    if (name === 'paymentMethod' && value !== 'zelle') {
      updatedData.zelleReference = ''
    }

    setFormData(updatedData)
  }

  const handleAmountClick = (amount: number) => {
    setFormData({
      ...formData,
      amount: amount.toString(),
      customAmount: '',
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate Zelle reference number if Zelle is selected
    if (formData.paymentMethod === 'zelle' && !formData.zelleReference?.trim()) {
      alert('Please enter your Zelle Reference Number to proceed.')
      return
    }
    
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // In a real application, you would send this data to your payment processor
      console.log('Donation data:', formData)
    }, 2000)
  }

  const selectedAmount = formData.customAmount || formData.amount

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-12">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-white text-4xl" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Donation!</h1>
              <p className="text-lg text-gray-700 mb-6">
                Your generous contribution of <strong>${selectedAmount}</strong> will help support our community and social activities.
              </p>
              <p className="text-gray-600 mb-8">
                You will receive a confirmation email shortly. Your donation is tax-deductible, and we will send you a receipt for your records.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Return to Home
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      amount: '',
                      customAmount: '',
                      paymentMethod: 'cash',
                      zelleReference: '',
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      address: '',
                      city: '',
                      state: '',
                      zipCode: '',
                      country: 'USA',
                      purpose: 'general',
                      customPurpose: '',
                      anonymous: false,
                      recurring: false,
                      comments: '',
                    })
                  }}
                  className="inline-block bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Make Another Donation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <FaHeart className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">Donate</h1>
          </div>
          <p className="text-xl text-primary-100 max-w-3xl">
            Support our social activities and community programs. Your generous contribution helps us serve the Mymensingh community in New York City.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-8">
                  {/* Donation Amount */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-4">
                      <FaDollarSign className="inline mr-2" />
                      Donation Amount
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handleAmountClick(amount)}
                          className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                            formData.amount === amount.toString()
                              ? 'bg-primary-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-700 font-medium">Or enter custom amount:</span>
                      <div className="flex-1 max-w-xs">
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                          <input
                            type="number"
                            name="customAmount"
                            value={formData.customAmount}
                            onChange={handleChange}
                            placeholder="0.00"
                            min="1"
                            step="0.01"
                            className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                            onFocus={() => setFormData({ ...formData, amount: '' })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Purpose */}
                  <div>
                    <label htmlFor="purpose" className="block text-sm font-semibold text-gray-900 mb-2">
                      Purpose of Donation
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    >
                      {purposes.map((purpose) => (
                        <option key={purpose.value} value={purpose.value}>
                          {purpose.label}
                        </option>
                      ))}
                    </select>
                    {formData.purpose === 'other' && (
                      <input
                        type="text"
                        name="customPurpose"
                        value={formData.customPurpose}
                        onChange={handleChange}
                        placeholder="Please specify..."
                        className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      />
                    )}
                  </div>

                  {/* Donor Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Donor Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
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
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-4">Payment Method</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.paymentMethod === 'cash' ? 'border-primary-600 bg-primary-50' : 'border-gray-300 hover:border-primary-300'
                      }`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={formData.paymentMethod === 'cash'}
                          onChange={handleChange}
                          className="text-primary-600"
                        />
                        <FaMoneyBillWave className="text-xl text-gray-700" />
                        <span className="font-medium">Cash</span>
                      </label>
                      <label className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.paymentMethod === 'zelle' ? 'border-primary-600 bg-primary-50' : 'border-gray-300 hover:border-primary-300'
                      }`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="zelle"
                          checked={formData.paymentMethod === 'zelle'}
                          onChange={handleChange}
                          className="text-primary-600"
                        />
                        <FaMobileAlt className="text-xl text-gray-700" />
                        <span className="font-medium">Zelle</span>
                      </label>
                    </div>
                    
                    {/* Zelle Payment Information */}
                    {formData.paymentMethod === 'zelle' && (
                      <div className="mt-4 space-y-4">
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <p className="text-sm text-gray-700 mb-2">
                            <strong>Zelle Payment Information:</strong>
                          </p>
                          <p className="text-sm text-gray-700">
                            Send payment to: <strong className="text-primary-600">+1 (646) 824-0777</strong>
                          </p>
                          <p className="text-xs text-gray-600 mt-2">
                            Please include your name and &quot;Donation&quot; in the memo/note when sending payment.
                          </p>
                        </div>
                        <div className="bg-white p-4 border-2 border-blue-200 rounded-lg">
                          <label htmlFor="zelleReference" className="block text-sm font-medium text-gray-700 mb-2">
                            Zelle Reference Number <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            id="zelleReference"
                            name="zelleReference"
                            required
                            value={formData.zelleReference}
                            onChange={handleChange}
                            placeholder="Enter your Zelle transaction reference number"
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                            aria-required="true"
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            Please enter the reference number from your Zelle payment confirmation. This field is required.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Options */}
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="anonymous"
                        checked={formData.anonymous}
                        onChange={handleChange}
                        className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-gray-700">Make this donation anonymous</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="recurring"
                        checked={formData.recurring}
                        onChange={handleChange}
                        className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-gray-700">Make this a recurring monthly donation</span>
                    </label>
                  </div>

                  {/* Comments */}
                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Comments (Optional)
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      rows={4}
                      value={formData.comments}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                      placeholder="Any additional information or message..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !selectedAmount}
                    className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <FaHeart />
                        <span>Donate ${selectedAmount || '0'}</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaHeart className="text-primary-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Your Impact</h3>
                    <p className="text-gray-600 text-sm">
                      Your donation supports our community&apos;s social activities and programs.
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="bg-primary-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">What Your Donation Supports:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Cultural events & celebrations</li>
                        <li>• Social welfare & assistance</li>
                        <li>• Funeral & memorial services</li>
                        <li>• Immigrant support programs</li>
                        <li>• Education initiatives</li>
                        <li>• Disaster relief efforts</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <FaInfoCircle className="text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Tax Deductible</h4>
                          <p className="text-sm text-gray-700">
                            Brihottor Mymensinghbashi USA Inc. is a registered non-profit organization. All donations are tax-deductible to the extent allowed by law.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 text-center">
                      For questions about donations, please contact us at{' '}
                      <a href="mailto:brihottoro@gmail.com" className="text-primary-600 hover:underline">
                        brihottoro@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

