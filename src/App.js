import Navbar from "./components/navbar/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";
import Skills from "./pages/skills/Skills";
import Work from "./pages/work/Work";

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/education" exact element={<Education />} />
          <Route path="/skills" exact element={<Skills />} />
          <Route path="/work" exact element={<Work />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
