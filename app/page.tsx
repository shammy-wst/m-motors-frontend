import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import FeaturedVehicles from "./components/home/FeaturedVehicles";
import Advertisement from "./components/home/Advertisement";
import About from "./components/home/About";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col p-0">
        <Hero />
        <FeaturedVehicles />
        <Advertisement />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
