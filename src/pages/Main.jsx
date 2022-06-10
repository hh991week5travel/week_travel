import React from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Link to="/Home">
        <ADDBUTTON>Home</ADDBUTTON>
      </Link>
      <Link to="/Login">
        <button>Login</button>
      </Link>
      <Link to="/Post">
        <button>Post</button>
      </Link>
      <Link to="/PostDetail">
        <button>PostDetail</button>
      </Link>
      <Link to="/SignUp">
        <button>SignUp</button>
      </Link>
    </>
  );
};

export default Main;

const ADDBUTTON = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
