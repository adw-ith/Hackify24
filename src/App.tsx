import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/home'
import ChatInterface from './pages/ChatInterface'
import SignupForm from './pages/signup'
import Preferences from './pages/preferences'
import Contact from './pages/Contact'
import Chat from './pages/chat'

function App() {

  return (
    //HEX CODES:
    // #243127
    // #a46379
    // #feb640
    // #ffdf7c
    // #fdefc0
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/signup" Component={SignupForm} />
          <Route path="/chat" Component={ChatInterface} />
          <Route path="/preferences" Component={Preferences} />
          <Route path="/contact" Component={Contact} />
          <Route path="/chatB" Component={Chat} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
