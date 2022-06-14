import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import { useNavigate } from "react-router-dom";

// action
const LOG_IN = "LOGIN";
const LOG_OUT = "LOG_OUT";
const LOAD_TOKEN = "LOAD_TOKEN";
const GET_USER = "GET_USER";

// initialState
const initialState = {
  userInfo: {
    email: "",
    password: "",
  },
  is_login: false,
};

// action creator
const login = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const loadToken = createAction(LOAD_TOKEN, (token) => ({ token }));
const getUser = createAction(GET_USER, () => ({}));

// 토큰로드 액션
const loadTokenFB = () => {
  return function (dispatch) {
    if (getCookie("Authorization")) {
      dispatch(loadToken());
    }
  };
};

// 회원가입
const signUpDB = (email, nickname, password, confirmPassword) => {
  return function (dispatch, getState) {
    axios
      .post("http://15.164.50.132/api/signup", {
        email,
        nickname,
        password,
        confirmPassword,
      })
      .then((res) => {
        console.log(res);
        window.alert("회원가입을 축하합니다!");
      })
      .catch((error) => {
        console.log("회원가입 DB Error", error);
      });
  };
};

// 로그인
const loginDB = (email, password) => {
  console.log(email)
  console.log(password)
  return function (dispatch) {
    axios
      .post("http://15.164.50.132/api/login", {
        email : email,
        password : password,
      })
      .then((response) => {
        console.log(response);
        dispatch(
          login({
            is_login: true,
            token: response.data.token,
          })
        );

        setCookie(
          "Authorization",
          response.data.token.split(" ")[1]
        );
        setCookie("email", email);
      })
      .catch((error) => {
        window.alert("아이디 또는 비밀번호를 확인해주세요.");
        console.log("Login Error", error);
      });
  };
};

//-----------------------reducer------------------------
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        // setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;

        console.log("action.payload.user", action.payload.user);
      }),
  },
  initialState
);

//action creator export
const actionCreators = {
    login,
    logOut,

    loginDB,

    loadTokenFB,

    signUpDB,

  };

export { actionCreators };
