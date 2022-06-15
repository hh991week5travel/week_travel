import { createAction, handleActions } from "redux-actions";

import { produce } from "immer";

import axios from "axios";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// action
const LOG_IN = "LOGIN";
const LOG_OUT = "LOG_OUT";
const LOAD_TOKEN = "LOAD_TOKEN";

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

// 토큰로드 액션
const loadTokenFB = () => {
  return function (dispatch) {
    if (getCookie("Authorization")) {
      dispatch(loadToken());
    }
  };
};

// 로그인
const loginDB = (email, password) => {
  console.log(email);
  console.log(password);
  return function (dispatch) {
    axios
      .post("http://15.164.50.132/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        dispatch(
          login({
            is_login: true,
            token: response.data.token,
          })
        );
        setCookie("Authorization", response.data.token);
        setCookie("nickname", response.data.nickname);
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
        setCookie("is_login", "true");
        draft.token = action.payload.user.token;
        draft.user = action.payload.user;
        draft.is_login = true;

        console.log("action.payload.user", action.payload.user);
      }),

    [LOG_OUT]: (state) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        localStorage.removeItem("nickname");
        localStorage.removeItem("token");
        draft.user = null;
        draft.is_login = false;
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
};

export { actionCreators };
