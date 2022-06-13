import axios from "axios"

//액션 타입
//[SERVER]

//[POST]
const ADD_POST = "ADD_POST"
const LOAD_POST = "LOAD_POST"
// const DELETE_POST = "DELETE_POST"
// const UPDATE_POST = "UPDATE_POST"


//액션 크리에이터
//[SERVER]

// [POST]
const addPost = (payload) => {
  return {type : ADD_POST, payload}
}

const loadPost = (payload) => {
  return {type : LOAD_POST, payload}
}

// const deletePost = (payload) => {
//   return {type : DELETE_POST, payload}
// }

// export const updatePost = (payload) => {
//   return {type : UPDATE_POST, payload}
// }

//thunk 함수 작성 (thunk 함수는 async(여기 들어오는 값은 함수!! 변수 아님!!!))
export const __loadPosts = () => async(dispatch, getState) => { 
  const data = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch(loadPost(data))
}

export const __addPost = (payload) => async (dispatch, getState) =>{
  const data = await axios.post('/posts', {title: payload.title, content : payload.content});
  dispatch(addPost(data))
}

// export const __deletePost = (payload) => async (dispatch, getState) => {
//   await axios.delete(`/posts/${Number(payload)}`);
//   dispatch(deletePost(payload));
// }

// export const __updatePost = (payload, index) => async (dispatch, getState) =>{
//   const request = await axios.put(`/posts/${Number(index)}`, payload );
//   dispatch(updatePost(request.data))
// }

//초깃값
const initialState = {
  posts : [
    // {
    //   nickname : null,
    //   imageUrl : "",
    //   postid : "1234",
    //   title : "travel",
    //   desc : "happy travel"
    // }
  ],
  loading: false,
  error: null
};

//리듀서
const postReducer = (state = initialState, action) => {
  switch(action.type) {

    case ADD_POST : return { ...state, posts : action.payload }

    case LOAD_POST : return { posts : action.payload }

    // case DELETE_POST:
    //   const newDeletedPost = state.posts.filter((_, index) => { return index!== Number(action.payload);
    //   }); return { ...state, list: [...newDeletedPost] };

    //   case UPDATE_POST:
    //     const newChangePost = state.posts.map((value) => {
    //         return value.id === Number(action.payload.id) ? action.payload : value;
    //     });
    //     return { ...state, list: newChangePost };
    
    default:
      return state;
  }
}



export default postReducer;