import React from "react";

import { Link } from "react-router-dom";

import axios from "axios";

// import Header from "../components/Header";


const callAxios = async () => {
  await axios.get("http://localhost:5001/travel")
};


const Login = () => {

  React.useEffect(() => {
    callAxios();
  }, []);


  return (
    <div>
      <p>
        이메일 : <input />{" "}
      </p>
      <p>
        비밀번호 : <input />{" "}
      </p>
      <button> 로그인 </button>
      <br />
      <Link to="/SignUp">
        <button> 회원가입 </button>
      </Link>
    </div>
  );
};

export default Login;
