import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// 액션

const LOGIN = "LOG_IN";
const LOGOUT = "LOG_OUT";
const LOAD_TOKEN = "LOAD_TOKEN";

// 초기값

const initialState = {
  travel: {
    email: "",
    password: "",
  },
    is_login: false,
  };

// 액션 생성 함수
const logIn = createAction(LOGIN, (user) => ({user}));
const logOut = createAction(LOGOUT, (user) => ({user}));
const loadToken = createAction(LOADTOKEN, (token) => ({token}));


// 토큰로드 액션
const loadTokenFB = () => {
  return function (dispatch) {
    if (getCookie("Authorization")) {
      dispatch(loadToken());
    }
  };
};

// 로그인 액션
const loginDB = (email, password) => {
  return function (dispatch, getState, {history}) {
    axios
      .post("http://localhost:5001/travel", {
        email,
        password,
      })
      .then(response => {
        console.log(response);
        console.log(response.config.data.split(":"))
        dispatch(
          logIn({
            is_login: true,
          })
        );
        setCookie("Authorization", response.headers.authorization.split(" ")[1]);
        setCookie("email", email);
        history.replace("/Main");
      })
      .catch(error => {
        window.alert("아이디 또는 비밀번호를 확인해주세요.")
        console.log("Login Error", error)
      })
  }
}


// 리듀서
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.token = action.payload.user.token;
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("Authorization");
        deleteCookie("userId");
        deleteCookie("is_login");
				draft.is_login = false;
      }),
    [LOAD_TOKEN]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = true;
      }),
      
  },
  initialState
);

const actionCreators = {
  logIn,
  logOut,
  withdrawal,
  loginDB,
  loadTokenFB,
  withdrawalAC,
};

export { actionCreators };