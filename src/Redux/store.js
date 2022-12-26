import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/icecreamReducer";

const reducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxLogger))
);

export default store;
