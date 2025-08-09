import NavBar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Playist from './Pages/Playist.jsx'
import DownloaderPage from './Pages/DownloaderPage.jsx'
import Contact from './Pages/Contact.jsx'
import PlayerBar from './components/Playerbar.jsx'
import SongChoiser from './components/SongChoiser.jsx'

function App() {
  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <>
      <NavBar />
      {isHome && (
        <div>
          <SongChoiser></SongChoiser>
          <PlayerBar></PlayerBar>
        </div>
      )}
      <Routes>
        <Route path="/" element={null} />
        <Route path="/Playist" element={<Playist />} />
        <Route path="/DownloaderPage" element={<DownloaderPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
