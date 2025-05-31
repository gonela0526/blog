
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import BlogPage from './components/BlogPage'
import Blog1 from './posts/Blog1'
import AllBlogs from './pages/AllBlogs'

function App() {

  return (
    <>
        <Routes >
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/java8-features-explained-with-examples" element={<Blog1 />} />
          <Route path="/Sampleblog" element={<BlogPage />} />
          
        </Routes>
   
    
    </>
  )
}

export default App
