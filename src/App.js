import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}