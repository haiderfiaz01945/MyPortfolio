// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav1 from "./Nav1";
 
import Main3 from "./Main3";
import "./App.css"; 
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { ToggleColorMode } from "./ToggleColorMode"; 
import ScrollToTop from "./ScrollToTop"; 

export default function App() {
  return (
    <ToggleColorMode>
      <Router>
        <Nav1 />
        <ScrollToTop /> {}
        
        <Routes>
          <Route path="/" element={<Main3 />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          
        </Routes>
      </Router>
    </ToggleColorMode>
  );
}
