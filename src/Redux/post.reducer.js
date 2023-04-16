import {
  ADD_GALLERY_SUCCESS,
  ADD_POST_SUCCESS,
    FILTER_BY_MR,
    FILTER_BY_MRS,
    POST_GET_DELETE,
  POST_GET_ERROR,
  POST_GET_LOADING,
  POST_GET_SUCCESS,
  GALLERY_GET_SUCCESS
} from "./post.types";


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
    case FILTER_BY_MR: {
      console.log("FILTER_BY_MR callled");
      let filteredMr = state.data.filter((product) => product.person === "mr");
      console.log(filteredMr);
      return { ...state, data: filteredMr };
    }
    case FILTER_BY_MRS: {
      console.log("FILTER_BY_MRS callled");
      let filteredMrs = state.data.filter(
        (product) => product.person === "mrs"
      );
      console.log(filteredMrs);
      return { ...state, data: filteredMrs };
    }
    case ADD_GALLERY_SUCCESS: {
      return {
        ...state,
        payload,
      };
    }
    case GALLERY_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export  default postReducer