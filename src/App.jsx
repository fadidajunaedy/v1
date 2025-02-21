import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProjectsArchive from "./pages/ProjectsArchive";
import Project from "./pages/Project";

const App = () => {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/*" element={<MainLayout />} />
          <Route path="/archive" element={<ProjectsArchive />} />
          <Route path="/archive/:project" element={<Project />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
