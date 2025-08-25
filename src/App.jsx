import { useState } from "react";
import "./App.css";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="bg-[#32a4c3] dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
