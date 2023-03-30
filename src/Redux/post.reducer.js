import {
  ADD_POST_SUCCESS,
    POST_GET_DELETE,
  POST_GET_ERROR,
  POST_GET_LOADING,
  POST_GET_SUCCESS,
} from "./post.types";
import { deletePostApi } from "./postApi";

let initState = {
  loading: false,
  error: false,
  data: [],
};

  const postReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_POST_SUCCESS: {
      return {
        ...state,
        payload,
      };
    }
    case POST_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case POST_GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case POST_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case POST_GET_DELETE: {
      const filterDeleteProducts = state.data.filter(
        (product) => product._id !== payload
      );
      return {
        ...state,
        data: filterDeleteProducts,
      };
    }
    default: {
      return state;
    }
  }
};

export  default postReducer