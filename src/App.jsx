
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import BlogPage from './components/BlogPage'

function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
        </Routes>
    </Router>
    
    </>
  )
}

export default App
