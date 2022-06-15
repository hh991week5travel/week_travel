import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { storage } from "../../shared/firebase";

//액션 타입
const UPLOADING = "UPLOADING"; //스토어에 이미지업로드
const UPLOAD_IMG = "UPLOAD_IMG";  //파베데이터베이스에 이미지 url업로드
const SET_PRE = "SET_PRE";

//액션 크리에이터
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMG, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PRE, (preview) => ({ preview }));

//초기값
const initialState = {
    image_url: '',
    uploading: false,
    preview: null,
}

//미들웨어
const uploadImageFB = (image) => {
    return function (dispatch, getState, { history }) {

        dispatch(uploading(true));
        const _upload = storage.ref(`images/${image.name}`).put(image);

        _upload.then((snapshot) => {
            console.log(snapshot);
            snapshot.ref.getDownloadURL().then((url) => {
                dispatch(uploadImage(url));
            }).catch(err => {
                dispatch(uploading(false));
            })
        })

    };
};


//reducer
export default handleActions({
    [UPLOAD_IMG]: (state, action) => produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
    }),
    [UPLOADING]: (state, action) => produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
    }),
    [SET_PRE]: (state, action) => produce(state, (draft) => {
        draft.preview = action.payload.preview;
    }),
}, initialState);

//action creators
const actionCreators = {
    uploadImage,
    uploadImageFB,
    setPreview,
}

export { actionCreators };