import { combineReducers } from "redux";
import { todoReducer } from "./reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todo"],
};
export const rootReducer = combineReducers({
  todo: todoReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default persistReducer(persistConfig, rootReducer);
