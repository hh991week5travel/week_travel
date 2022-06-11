import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate("");
   const [email, setEmail] = useState();
   const [nickname, setNickname] = useState();
   const [password, setPassword] = useState();

  const Submit = async () => {
    await axios.post("http://localhost:5001/travel", {
      email,
      nickname,
      password,
    });
    navigate("/Login");
  };


  return (
    <div>
      <p>
        <span>
          이메일 : <input type="text" value={email||""} onChange={(event) => {
            setEmail(event.target.value)
          }} /> <button>중복확인</button>
        </span>
      </p>
      <p>
        <span>
          닉네임 : <input type="text" value={nickname||""} onChange={(event) => {
            setNickname(event.target.value)
          }}/> <button>중복확인</button>
        </span>
      </p>
      <p>
        비밀번호 : <input type="text" value={password||""} onChange={(event) => {
            setPassword(event.target.value)
          }}/>
      </p>
      <p>
        비밀번호 확인 : <input />
      </p>
      <button onClick={Submit}> 회원가입 </button>
    </div>
  );
};

export default SignUp;
