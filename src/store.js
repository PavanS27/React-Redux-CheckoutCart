import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import rootreducer from "./components/reducers";

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootreducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
