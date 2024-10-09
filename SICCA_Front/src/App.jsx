//import { useState } from 'react'
import './styles/LoginPage.css'
//import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';


function App() {
  //const [count, setCount] = useState(0)
  console.log('LoginPage component is being rendered');
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <LoginPage />
        </header>
      </div>
    </>
  )
}

export default App
