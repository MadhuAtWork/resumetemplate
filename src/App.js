import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Carts from "./components/Carts";
import { Routes, Route, HashRouter } from "react-router-dom";
import Skills from "../src/components/Skills";
import Achivments from "../src/components/Achivments";
import Summary from "../src/components/Summary";
import Experience from "../src/components/Experience";
import Education from "../src/components/Education";
import Profile from "../src/components/Profile";
import { SectionContent } from "../src/components/sectionContent";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Carts />}>
          <Route index element={<SectionContent />} />
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Achivments" element={<Achivments />}></Route>
          <Route path="/Summary" element={<Summary />}></Route>
          <Route path="/Experince" element={<Experience />}></Route>
          <Route path="/Education" element={<Education />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
