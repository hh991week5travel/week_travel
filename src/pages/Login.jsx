import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as userActions } from "../redux/modules/user";

import { emailCheck } from "../shared/SignUpCheck";
import styled from "styled-components";
import { Grid, Input, Button } from "../loginelement/index";

// import Header from "../components/Header";


const Login = () => {
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
    
  };

  useEffect(() => {
    console.log(user);
    if (user.user.is_login === true) {
      navigate("/Main");
    }
  }, [user.user.is_login]);

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
            <Grid margin="20px">
              <Input
                clickColor="#5DC2B1"
                type="email"
                label="이메일"
                value={email || ""}
                placeholder="🔑    아이디를 입력해주세요"
                _onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </Grid>
            <Grid margin="20px">
              <Input
                clickColor="#5DC2B1"
                type="password"
                label="비밀번호"
                value={password || ""}
                width="80%"
                placeholder="🔒    패스워드를 입력해주세요"
                _onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Grid>
            <Button margin="20px" width="250px" text="로그인" onClick={login}>
              로그인
            </Button>
            <Link to="/SignUp">
              <Button margin="20px" width="250px" text="회원가입">
                회원가입
              </Button>
            </Link>
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

export default Login;
