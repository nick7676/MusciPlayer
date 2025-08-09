import { Outlet } from 'react-router-dom'
import NavBar from './components/Navbar'

function MainLayout() {
  return (
    <>
      <NavBar />
      <main className="p-4">
        <Outlet /> {/* Qui verranno renderizzate le pagine */}
      </main>
    </>
  )
}

export default MainLayout
