import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './views/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  const [view, setView] = useState('home') // 'home', 'login', 'register'

  const renderView = () => {
    switch (view) {
      case 'login':
        return <Login/>
      case 'register':
        return <Register />
      default:
        return <Home />
    }
  }

  return (
    <>
      <Navbar setView={setView} />
      {renderView()}
      <Footer />
    </>
  )
}

export default App
