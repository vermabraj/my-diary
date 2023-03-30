import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import postReducer from "./post.reducer";

const rootReducer = combineReducers({
  post: postReducer,
});

const composeEnhancer = window.__REDUX_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
