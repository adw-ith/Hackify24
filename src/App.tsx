import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/home'
import ChatInterface from './pages/ChatInterface'
import SignupForm from './pages/signup'

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
