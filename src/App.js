import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/UI/Main";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Project";
import Resume from "./pages/Resume";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Main>
  );
}

export default App;
