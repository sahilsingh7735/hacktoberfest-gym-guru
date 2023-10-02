import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <h1>Welcome to Gym Guru application</h1>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/gallery">Gallery</Link>
      </div>
      <div>
        <Link to="/plans">Plans</Link>
      </div>

      <div>
        <Link to="/join">Join Now</Link>
      </div>
    </div>
  );
};

export default Home;
