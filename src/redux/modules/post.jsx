import axios from "axios"
import { getCookie } from "../../shared/Cookie"

//액션 타입
const ADD_POST = "ADD_POST"
const LOAD_POST = "LOAD_POST"
const DELETE_POST = "DELETE_POST"
const UPDATE_POST = "UPDATE_POST"


//액션 크리에이터
const addPost = (payload) => {
  return {type : ADD_POST, payload}
}

const loadPost = (payload) => {
  return {type : LOAD_POST, payload}
}

const deletePost = (payload) => {
  return {type : DELETE_POST, payload}
}

export const updatePost = (payload) => {
  return {type : UPDATE_POST, payload}
}


//thunk 함수 작성 (thunk 함수는 async(여기 들어오는 값은 함수!! 변수 아님!!!))
export const __loadPosts = (token) => async(dispatch, getState) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
      headers : {
        Authorization : token
      }
    });
    console.log(response) 
    dispatch(loadPost(response.data))
  } catch(error){
    console.log(error)
  }
}

export const __addPost = (payload) => async (dispatch, getState) => {
  const myToken = getCookie("Authorization");
  try{
    const response = await axios.post('/posts', {
      postId : payload.postId,
      title: payload.title, 
      content : payload.content,
      imgUrl : payload.imgUrl},
      {headers : {
        Authorization : myToken
      }});
      dispatch(addPost(response.data));}
    catch(error){
      console.log(error)
  }
}


export const __deletePost = (payload) => async (dispatch, getState) => {
  await axios.delete(`/posts/${Number(payload)}`);
  dispatch(deletePost(payload));
}

export const __updatePost = (payload, index) => async (dispatch, getState) => {
  const request = await axios.put(`/posts/${Number(index)}`, payload );
  dispatch(updatePost(request.data))
}

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

    case ADD_POST : return { ...state, posts : [...state.posts, action.payload] }

    case LOAD_POST : return { ...state, posts : action.payload }

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