// { "email":"test1234@google.com", "nickname":"테스트", "password":"qwer12345", "confirmPassword": "qwer12345" }

import { emailCheck } from "../shared/SignUpCheck";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

// import Header from "../components/Header";
  const Login = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((user) => user);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const login = () => {
    if (email === "" || password === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    if (!emailCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다.");
      return;
    }
    
    dispatch(userActions.loginDB(email, password));
    console.log(user)
  };

  useEffect (() => {
    (user.user.is_login === true) ? navigate("/Main") : navigate("/Login")
  }, [user.user.is_login])

  return (
    <div>
      <p>
        이메일 :{" "}
        <input
          type="text"
          value={email || ""}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />{" "}
      </p>
      <p>
        비밀번호 :{" "}
        <input
          type="text"
          value={password || ""}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />{" "}
      </p>
      <button onClick={login}> 로그인 </button>
      <br />
      <Link to="/SignUp">
        <button> 회원가입 </button>
      </Link>
    </div>
  );
};
export default Login;