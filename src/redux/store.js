import { applyMiddleware } from "redux";
import { rootreducer } from "./rootReducer";
import { legacy_createStore as createStore } from "redux";
import logger from 'redux-logger'
const middleware = [logger]
export const store = createStore(rootreducer, applyMiddleware(...middleware));

export default store;