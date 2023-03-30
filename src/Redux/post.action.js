import axios from "axios";
import {
  ADD_POST_FAILURE,
  ADD_POST_LOADING,
  ADD_POST_SUCCESS,
    POST_GET_DELETE,
  POST_GET_ERROR,
  POST_GET_LOADING,
  POST_GET_SUCCESS,
} from "./post.types";

import { addPostApi, postApi } from "./postApi";

export const getPosts = () => async(dispatch) => {
  dispatch({ type: POST_GET_LOADING });
  try {
    let data = await postApi();
    
    dispatch({ type: POST_GET_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: POST_GET_ERROR });
  }
};

export const deletePosts = (id) => async (dispatch) => {
 
  try {
    let response = await axios.delete(
      `https://busy-jade-bass-coat.cyclic.app/admin/delete/${id}`
    );
    dispatch({
      type: POST_GET_DELETE,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: POST_GET_ERROR,
      payload: e,
    });
  }
};
export const addProducts = (payload) => async(dispatch) => {
  dispatch({ type: ADD_POST_LOADING});
  try {
    let data = await addPostApi(payload);
     
    dispatch({ type: ADD_POST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ADD_POST_FAILURE});
  }
};


