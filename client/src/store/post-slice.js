import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
  filter: "",
  auto:[],
  inputSearchValue:""
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      console.log('payload',action)
      state.filter = (!action.payload)?'':action.payload;
      //state.filter = action.payload.label;
    },
    editPost: (state, { payload }) => {
      let item = state.post.find((x) => x.id === payload.id);
      item.title = payload.title;
      item.body = payload.body;
      const updatedOptions = state.post.map((p) => {
        return { label: p.title };
      });
      state.auto = updatedOptions;
    },
    getPostSuccess: (state, { payload }) => {
      state.post = payload;
    },
    getPostFailure: (state) => {
      state.post = [];
    },
    setAuto: (state,{payload}) => {
      state.auto = payload;
    },
    setInputSearchValue: (state,{payload}) => {
      state.filter = payload;
    },
    postDelete:(state,{payload}) => {
      let item = state.post.find((x) => x.id == payload);
      state.post.splice(payload,1);
      const updatedOptions = state.post.map((p) => {
        return { label: p.title };
      });
      state.auto = updatedOptions;
    }
  }
});

export default postSlice;

export const {
  editPost,
  getPostSuccess,
  setFilter,
  getPostFailure,
  postDelete,
  setAuto,
  setInputSearchValue
} = postSlice.actions;

export function fetchPost() {
  return async (dispatch) => {
    try {
      const response = await fetch("post");
      const data = await response.json();
      const updatedOptions = data.posts.map((p) => {
        return { label: p.title };
      });
      dispatch(getPostSuccess(data.posts));
      dispatch(setAuto(updatedOptions));
    } catch (error) {
      dispatch(getPostFailure());
    }
  };
}
