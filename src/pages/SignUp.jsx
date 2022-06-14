import React from "react";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { actionCreators as userActions } from "../redux/modules/user";

import axios from "axios";

import { emailCheck } from "../shared/SignUpCheck";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

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

  // 이메일 중복 체크
  const dupEmail = async () => {
    await axios
      .get(`http://15.164.50.132/api/duplicatesemail/${email}`)
      .then(() => {
        window.alert("사용 가능한 아이디입니다.");
      })
      .catch((error) => {
        window.alert("이미 사용중인 아이디입니다.");
        console.log("Login Error", error);
      });
  };

  // 닉네임 중복 체크
  const dupNick = async () => {
    await axios
      .get(`http://15.164.50.132/api/duplicatesnick/${nickname}`)
      .then(() => {
        window.alert("사용 가능한 닉네임입니다.");
      })
      .catch((error) => {
        window.alert("이미 사용중인 닉네임입니다.");
        console.log("Login Error", error);
      });
  };

  const Submit = async () => {
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

    await axios
      .post("http://15.164.50.132/api/signup", {
        email,
        nickname,
        password,
        confirmPassword,
      })
      .then((res) => {
        console.log(res);
        window.alert("회원가입을 축하합니다!");
        navigate("/Login")
      })
      .catch((error) => {
        window.alert("아이디, 닉네임 또는 비밀번호를 확인해주세요.");
        console.log("회원가입 DB Error", error);
      });
  };

  return (
    <div>
      <p>
        이메일 :{" "}
        <input
          type="email"
          value={email || ""}
          placeholder="이메일 형식으로 작성"
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
          placeholder="영어 or 한글만 가능"
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
          placeholder="최소8글자"
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
          placeholder="최소8글자"
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
