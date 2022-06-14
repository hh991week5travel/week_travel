import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { actionCreators as userActions } from "../redux/modules/user";

import axios from "axios";

import { emailCheck } from "../shared/SignUpCheck";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [nickname, setNickname] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const cfpw = React.useRef();

  if (password && confirmPassword && password === confirmPassword) {
    cfpw.current.innerText = "✔️";
  } else if (password !== confirmPassword) {
    cfpw.current.innerText = "❌";
  }

  const Submit = () => {
    //빈칸 확인
    if (
      email === "" ||
      nickname === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      window.alert("아이디,비밀번호,닉네임을 모두 입력해주세요!");
      return;
    }

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

    dispatch(userActions.signUpDB(email, nickname, password, confirmPassword));
    navigate("/Login");
  };

  // 이메일 중복 체크
  const dupEmail = async () => {
    const dupEmailRes = await axios.get(
      `http://15.164.50.132/api/duplicatesemail/${email}`
    );
    console.log(dupEmailRes);
  };

  // 닉네임 중복 체크
  const dupNick = async () => {
    const dupNickRes = await axios.get(
      `http://15.164.50.132/api/duplicatesnick/${nickname}`
    );
    console.log(dupNickRes);
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
        />{" "}
        <button onClick={dupNick}>중복확인</button>
      </p>

      <p>
        비밀번호 :{" "}
        <input
          type="password"
          value={password || ""}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
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
        />{" "}
        <span
          style={{ margin: "6px 0 0 0", fontSize: "20px" }}
          ref={cfpw}
        ></span>
      </p>

      <button onClick={Submit}> 회원가입 </button>
    </div>
  );
};

export default SignUp;
