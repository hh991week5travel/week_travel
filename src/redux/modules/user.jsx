import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";


// action
const LOGIN = "LOGIN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creator
const login = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, () => ({}));

// initialState
const initialState = {
    user: [],
    is_login: false,
};

//-----------------------reducer------------------------
export default handleActions(
    {
        [LOGIN]: (state, action) =>
            produce(state, (draft) => {
                // setCookie("is_login", "success");
                draft.user = action.payload.user;
                draft.is_login = true;

                console.log("action.payload.user", action.payload.user);
            }),
        [LOG_OUT]: (state, action) =>
            produce(state, (draft) => {
                localStorage.removeItem("nickname");
                localStorage.removeItem("token");
                // deleteCookie("is_login");
                draft.user = null;

                draft.is_login = false;
                // window.location.replace("/");
                // console.log("로그아웃합니다")
            }),
        [GET_USER]: (state, action) => produce(state, (draft) => { }),
    },
    initialState
);





//action creator export
const actionCreators = {
    login,

    getUser,

    logOut,


};

export { actionCreators };