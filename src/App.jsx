
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import BlogPage from './components/BlogPage'
import Blog1 from './posts/Blog1'
import AllBlogs from './pages/AllBlogs'
import Blog2 from './posts/Blog2'

function App() {

  return (
    <>
        <Routes >
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/java8-features-explained-with-examples" element={<Blog1 />} />
          <Route path="/streams-vs-loops-in-java:performance-and-readability" element={<Blog2 />} />
          <Route path="/Sampleblog" element={<BlogPage />} />
          
        </Routes>
   
    
    </>
  )
}

export default App
