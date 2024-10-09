import { useState } from 'react'
import Header from '../components/Header';
import UserProfile from './components/UserProfile'
import Panel from './components/Panel'
import Sales from './components/Sales'
import ProfileMenu from './components/ProfileMenu'

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
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="relative z-10 block p-2 bg-white rounded-md"
            >
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            {isProfileMenuOpen && <ProfileMenu />}
          </div>
          {renderPage()}
        </div>
      </main>
    </div>
  )
}