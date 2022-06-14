import { emailCheck } from "../shared/SignUpCheck";

import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { actionCreators as userActions } from '../redux/modules/user';

// import axios from "axios";

// import Header from "../components/Header";

const Login = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    if (email === "" || password === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
    }

    if (!emailCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다.");
    }
    dispatch(userActions.loginDB(email, password));
  };

  return (


    <div>
      <p>
        이메일 :{" "}
        <input
          type="email"
          value={email || ""}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />{" "}
      </p>

      <p>
        비밀번호 :{" "}
        <input
          type="password"
          value={password || ""}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />{" "}
      </p>

      <button onClick={login} > 로그인 </button>
      <br />

      <Link to="/SignUp">
        <button> 회원가입 </button>
      </Link>
    </div>


  );
};

export default Login;
