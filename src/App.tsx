import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import { Route, Routes } from 'react-router'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Services from './components/Services.tsx'
import Features from './components/Features.tsx'

function App() {

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='overflow-y-auto h-[88vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/Services" element={<Services />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App