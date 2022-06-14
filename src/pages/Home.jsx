import React from "react";
import { Link } from "react-router-dom";
import './Home.css'



const Home = () => {

  return (
    <>
      <div className="bg">
        <video autoPlay muted loop>
          <source src='../../videos/GoldenDuck.mp4' type="video/mp4" />
        </video>
        <div className="text">
          <Link to='/Login'>
            <p>여행의민족</p>
            <h3>-Click-</h3>
          </Link>
        </div>
      </div>
    </>






  );
};

export default Home;
