'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaUserPlus, FaBook, FaCalendarAlt, FaEnvelope, FaBuilding, FaChevronDown, FaHeart, FaUsers, FaUserTie, FaAward } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOrgOpen, setIsOrgOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const orgDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (orgDropdownRef.current && !orgDropdownRef.current.contains(event.target as Node)) {
        setIsOrgOpen(false)
      }
    }

    if (isOrgOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOrgOpen])

  const navItems = [
    { href: '/', label: 'Home', icon: FaHome },
    { href: '/about', label: 'About', icon: FaInfoCircle },
    { href: '/events', label: 'Events', icon: FaCalendarAlt },
  ]

  const navItemsAfterOrg = [
    { href: '/membership', label: 'Join Us', icon: FaUserPlus, highlight: true },
    { href: '/donate', label: 'Donate', icon: FaHeart, highlight: true },
  ]

  const orgSubItems = [
    { href: '/constitution', label: 'Constitution', icon: FaBook },
    { href: '/executive-board', label: 'Executive Board', icon: FaUsers },
    { href: '/permanent-board', label: 'Permanent Board', icon: FaUserTie },
    { href: '/honorable-board', label: 'Honorable Board', icon: FaAward },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0">
              <img
                src="/logo.jpg"
                alt="Brihottor Mymensinghbashi USA Inc. Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Brihottor Mymensinghbashi</h1>
              <p className="text-xs text-gray-600">USA Inc. | New York City</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              const isHighlighted = item.highlight || false
              
              if (isHighlighted) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative flex items-center space-x-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                        : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md hover:shadow-lg hover:from-primary-600 hover:to-primary-700 transform hover:-translate-y-0.5'
                    }`}
                  >
                    <Icon className="text-sm" />
                    <span>{item.label}</span>
                    <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Link>
                )
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  <Icon className="text-sm" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
            
            {/* Org Dropdown */}
            <div className="relative" ref={orgDropdownRef}>
              <button
                onClick={() => setIsOrgOpen(!isOrgOpen)}
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                  pathname === '/constitution' || isOrgOpen
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <FaBuilding className="text-sm" />
                <span className="font-medium">Org</span>
                <FaChevronDown className={`text-xs transition-transform duration-200 ${isOrgOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isOrgOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {orgSubItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOrgOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-2 transition-all duration-200 ${
                          isActive
                            ? 'bg-primary-50 text-primary-600 font-semibold'
                            : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                        }`}
                      >
                        <Icon className="text-sm" />
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Donate - Modern Design */}
            {navItemsAfterOrg.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              const isHighlighted = item.highlight || false
              
              if (isHighlighted) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative flex items-center space-x-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-accent-600 to-accent-700 text-white shadow-lg'
                        : 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-md hover:shadow-lg hover:from-accent-600 hover:to-accent-700 transform hover:-translate-y-0.5'
                    }`}
                  >
                    <Icon className="text-sm" />
                    <span>{item.label}</span>
                    <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Link>
                )
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  <Icon className="text-sm" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                const isHighlighted = item.highlight || false
                
                if (isHighlighted) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`relative flex items-center justify-between px-5 py-3.5 rounded-lg font-semibold transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                          : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md active:scale-95'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-xs opacity-90">→</span>
                    </Link>
                  )
                }
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                  >
                    <Icon />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
              
              {/* Org Section in Mobile */}
              <div className="pt-2">
                <button
                  onClick={() => setIsOrgOpen(!isOrgOpen)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-200 ${
                    pathname === '/constitution' || isOrgOpen
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <FaBuilding />
                    <span className="font-medium">Org</span>
                  </div>
                  <FaChevronDown className={`text-xs transition-transform duration-200 ${isOrgOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isOrgOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {orgSubItems.map((item) => {
                      const Icon = item.icon
                      const isActive = pathname === item.href
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setIsOpen(false)
                            setIsOrgOpen(false)
                          }}
                          className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                            isActive
                              ? 'bg-primary-100 text-primary-700 font-semibold'
                              : 'text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                          }`}
                        >
                          <Icon />
                          <span>{item.label}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Donate - Modern Design */}
              {navItemsAfterOrg.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                const isHighlighted = item.highlight || false
                
                if (isHighlighted) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`relative flex items-center justify-between px-5 py-3.5 rounded-lg font-semibold transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-accent-600 to-accent-700 text-white shadow-lg'
                          : 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-md active:scale-95'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-xs opacity-90">→</span>
                    </Link>
                  )
                }
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                  >
                    <Icon />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

