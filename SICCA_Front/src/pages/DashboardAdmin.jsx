import { useState } from 'react'
import Header from '../components/Header'
import UserProfile from '../components/UserProfile'
import Panel from '../components/Panel'
import Sales from '../components/Sales'
import RegistrerPage from './RegistrerPage'
import ProfileMenu from '../components/ProfileMenu'
import '../styles/DashboardAdmin.css'
import Informes from '../components/Informes'

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
      case 'register':
        return <RegistrerPage/>
      case 'informes':
        return <Informes />
      default:
        return <Panel />
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <div className="relative">
          <button
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className="flex items-center focus:outline-none"
          >
            <span className="text-gray-500 font-medium">Perfil</span>
            <svg className="h-4 w-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

            {isProfileMenuOpen && <ProfileMenu />}
          </div>
        </div>
      </div>
      <div className="flex flex-1 mt-16">
        <Header setCurrentPage={setCurrentPage} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}