import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { Projects } from '@/pages/Projects'

export default function App() {
  return (
    <BrowserRouter>
      <div className="dot-grid min-h-screen">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
