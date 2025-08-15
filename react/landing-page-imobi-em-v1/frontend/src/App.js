import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import WebsiteFeatures from "./components/WebsiteFeatures";
import Integrations from "./components/Integrations";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <main>
        <Hero />
        <Stats />
        <Features />
        <WebsiteFeatures />
        <Integrations />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;