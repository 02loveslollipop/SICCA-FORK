import { useState } from 'react'
import Header from '../components/Header'
import UserProfile from '../components/UserProfile'
import Panel from '../components/Panel'
import Sales from '../components/Sales'
import ProfileMenu from '../components/ProfileMenu'
import Imagen from '../assets/Perfil.jpeg'
import '../styles/DashboardAdmin.css'

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
    <div className="dashboard-layout">
      <div className="fixed-header">
        <div className="container">
          <div className="header-content">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="profile-menu-container">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="profile-button"
              >
                <img
                  className="profile-image"
                  src={Imagen}
                  alt="Profile"
                />
                <svg className="profile-arrow" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProfileMenuOpen && <ProfileMenu />}
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-content">
        <Header setCurrentPage={setCurrentPage} />
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}