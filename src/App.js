import Navbar from "./components/navbar/Navbar";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";
import Skills from "./pages/skills/Skills";
import Work from "./pages/work/Work";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/education" exact element={<Education />}></Route>
        {/* <Route path="/skills" exact>
          <Skills></Skills>
        </Route>
        <Route path="/work" exact>
          <Work></Work>
        </Route> */}

        <Navigate to="/" />
      </Routes>
    </Router>
  );
}

export default App;
