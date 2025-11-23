import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      <Loader onLoadingComplete={handleLoadingComplete} />
      {!isLoading && (
        <>
          <Header />
          <Hero />
          <Project />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
