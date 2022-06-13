import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <Link to={'/Login'}>
        <img src='logo_1.png'
          back_size="100% 100%"
          height="100%"
          width="100%"
          alt='logo' />
      </Link>
      <div>여행의민족</div>
    </>




  );
};

export default Home;
