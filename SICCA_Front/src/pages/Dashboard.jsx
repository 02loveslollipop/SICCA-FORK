import React, { useState } from 'react'
import Header from '../components/Header'
import UserProfile from '../components/UserProfile'
import Panel from '../components/Panel'
import Sales from '../components/Sales'
import ProfileMenu from '../components/ProfileMenu'


export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState('panel')
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case 'users':
        return <UserProfile />
      case 'panel':
        return <Panel />
      case 'sales':
        return <Sales />
      default:
        return <Panel />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Header setCurrentPage={setCurrentPage} />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center focus:outline-none"
              >
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="/placeholder.svg"
                  alt="Profile"
                />
                <svg className="h-4 w-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProfileMenuOpen && <ProfileMenu />}
            </div>
          </div>
          {renderPage()}
        </div>
      </main>
    </div>
  )
}