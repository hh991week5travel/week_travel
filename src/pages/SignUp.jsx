import { emailCheck } from "../shared/SignUpCheck";

import React from "react";
import { useState } from "react";

import axios from "axios";
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [email, setEmail] = useState();
  const [nickname, setNickname] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  // const navigate = useNavigate()

  const cfpw = React.useRef();

  if (password && confirmPassword && password === confirmPassword) {
    cfpw.current.innerText = "✔️";
  } else if (password !== confirmPassword) {
    cfpw.current.innerText = "❌";
  }

  const Submit = async () => {
    //빈칸 확인
    // if (
    //   email === "" ||
    //   nickname === "" ||
    //   password === "" ||
    //   confirmPassword === ""
    // ) {
    //   window.alert("아이디,비밀번호,닉네임을 모두 입력해주세요!");
    //   return;
    // }

    //이메일 형식 체크
    if (!emailCheck(email)) {
      window.alert("올바른 이메일 형식을 작성해주세요");
      return;
    }

    //비밀번호 일치 확인
    if (password !== confirmPassword) {
      window.alert("비밀번호가 일치하지 않습니다");
      return;
    }

    //axios post
    await axios.post("http://localhost:5001/travel", {
      email,
      nickname,
      password,
      confirmPassword,
    });
    // navigate("/Login")
  };

  //이메일 중복 체크
  const dupEmail = async () => {
    const res = await axios.get("http://localhost:5001/travel");
    console.log(res);
  };

  // 닉네임 중복 체크

  
  return (
    <div>
      <form action="/Login" onSubmit={Submit}>
        <p>
          이메일 :{" "}
          <input
            type="email"
            value={email || ""}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />{" "}
          <button onClick={dupEmail}>중복확인</button>
        </p>

        <p>
          닉네임 :{" "}
          <input
            type="text"
            value={nickname || ""}
            onChange={(event) => {
              setNickname(event.target.value);
            }}
            required
          />{" "}
          <button>중복확인</button>
        </p>

        <p>
          비밀번호 :{" "}
          <input
            type="password"
            value={password || ""}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
        </p>

        <p>
          비밀번호 확인 :{" "}
          <input
            type="password"
            value={confirmPassword || ""}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
            required
          />{" "}
          <span
            style={{ margin: "6px 0 0 0", fontSize: "20px" }}
            ref={cfpw}
          ></span>
        </p>

        <button type="submit"> 회원가입 </button>
      </form>
    </div>
  );
};

export default SignUp;
