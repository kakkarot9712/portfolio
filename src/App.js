import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import Main from "./components/UI/Main";

function App() {
  const Home = React.lazy(() => import("./pages/Home"));
  const About = React.lazy(() => import("./pages/About"));
  const Contacts = React.lazy(() => import("./pages/Contacts"));
  const NotFound = React.lazy(() => import("./pages/NotFound"));
  const Projects = React.lazy(() => import("./pages/Project"));
  const Resume = React.lazy(() => import("./pages/Resume"));
  return (
    <Main>
      <React.Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </Main>
  );
}

export default App;
