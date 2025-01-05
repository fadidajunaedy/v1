import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ProjectsArchive from './pages/ProjectsArchive'

const App = () => {
  return (
    <>
      <Router basename='/'>
        <Routes>
          <Route path="/*" element={<MainLayout />} />
          <Route path="/archive" element={<ProjectsArchive />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
