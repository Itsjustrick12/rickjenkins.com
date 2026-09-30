import './App.css'
import { Home } from './pages/home'
import { Travel } from './pages/travel'
import { Hobbies } from './pages/hobbies'
import { Blog } from './pages/blog'
import { Typography } from './pages/typography'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { BlogPostPage } from './pages/BlogPostPage'

/* Hash router is what is needed to make the routing environment */
/* Router is where we specify the routes */
/* Multiple Pages Video Reference: https://www.youtube.com/watch?v=qi32YwjoN2U */
function App() {
  return (
    <Router>
      <Routes>
        {/* Parent Route Renders as nav bar layout */}
        <Route element={<Layout/>}>
          {/* / route is the default path when the program is launched */}
          <Route path="/" element={<Home/>}/>
          <Route path="/Travel" element={<Travel/>}/>
          <Route path="/Hobbies" element={<Hobbies/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
