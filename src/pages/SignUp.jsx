import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { emailCheck } from "../shared/SignUpCheck";
import styled from "styled-components";
import { Grid, Input, Button } from "../loginelement/index";


const SignUp = () => {
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
        navigate("/Login");
      })
      .catch((error) => {
        window.alert("아이디, 닉네임 또는 비밀번호를 확인해주세요.");
        console.log("회원가입 DB Error", error);
      });
  };

  return (
    <>
      <Container>
        <div style={{ height: "100%" }}>
          <video autoPlay muted loop style={{ width: "100%" }}>
            <source src="../../videos/GoldenDuck.mp4" type="video/mp4" />
          </video>
        </div>
        <LoginBox>
          <FormContent>
            <Grid margin="20px" style={{ position: "relative" }}>
              <Input
                clickColor="#5DC2B1"
                type="email"
                label="이메일"
                value={email || ""}
                placeholder="🔑  이메일 형식으로 작성"
                _onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <DupButton
                style={{ position: "absolute", top: "35%", right: "10px" }}
                onClick={dupEmail}
              >
                중복확인
              </DupButton>
            </Grid>

            <Grid margin="20px" style={{ position: "relative" }}>
              <Input
                clickColor="#5DC2B1"
                type="text"
                label="닉네임"
                value={nickname || ""}
                placeholder="🙋   영어 or 한글만 가능"
                _onChange={(event) => {
                  setNickname(event.target.value);
                }}
              />
              <DupButton
                style={{ position: "absolute", top: "35%", right: "10px" }}
                onClick={dupNick}
              >
                중복확인
              </DupButton>
            </Grid>
            <Grid margin="20px">
              <Input
                clickColor="#5DC2B1"
                type="password"
                label="비밀번호"
                value={password || ""}
                placeholder="🔒    최소8글자"
                _onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Grid>
            <Grid margin="20px" style={{ position: "relative" }}>
              <Input
                clickColor="#5DC2B1"
                type="password"
                label="비밀번호 확인"
                value={confirmPassword || ""}
                placeholder="🔒    최소8글자"
                _onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />
              <span
                style={{
                  margin: "6px 0 0 0",
                  fontSize: "20px",
                  position: "absolute",
                  top: "30%",
                  right: "10px",
                }}
                ref={cfpw}
              ></span>
            </Grid>
            <Button
              margin="20px"
              width="250px"
              text="회원가입"
              onClick={Submit}
            >
              {" "}
              회원가입{" "}
            </Button>
          </FormContent>
        </LoginBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow-y: "hidden";
  height: "100vh";
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FormContent = styled.div`
  margin-bottom: 50px;
  width: 90%;
  padding: 20px;
  max-width: 350px;
  position: relative;
  border-radius: 30px;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: rgba(225, 225, 225, 0.3);
`;

const DupButton = styled.button`
  background-color: #212121;
  color: white;
  opacity: 0.8;
  border:0;
  padding: auto;
  &:hover {
    opacity: 1;
  }
`

export default SignUp;