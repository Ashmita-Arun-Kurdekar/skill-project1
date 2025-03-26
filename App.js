import React from "react";
import NavigationBar from "./components/Navbar"; // Import Navbar
import HeroCarousel from "./components/HeroCarousel";
import RecommendedMovies from "./components/RecommendedMovies";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <NavigationBar /> {/* Use Navbar here */}
      <HeroCarousel />
      <RecommendedMovies />
    </div>
  );
};

export default App;
