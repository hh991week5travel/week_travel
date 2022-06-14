import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import PostAdd from "./pages/PostAdd";
import PostDetail from "./pages/PostDetail";
import PostUpdate from "./pages/PostUpdate"
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/PostAdd" element={<PostAdd />} />
          <Route path="/PostDetail" element={<PostDetail />} />
          <Route path="/PostUpdate" element={<PostUpdate />} />
          <Route path="/Error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
