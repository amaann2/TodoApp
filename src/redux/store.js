import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./rootReducer";

const middleware = [logger];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);
export const persistor = persistStore(store);
export default store;
