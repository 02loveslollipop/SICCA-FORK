//import { useState } from 'react'
import './styles/LoginPage.css'
import Dashboard from './pages/Dashboard';
//import LoginPage from './pages/LoginPage';


function App() {
  //const [count, setCount] = useState(0)
  console.log('LoginPage component is being rendered');
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <Dashboard />
        </header>
      </div>
    </>
  )
}

export default App
