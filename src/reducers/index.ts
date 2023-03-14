import { combineReducers } from "redux";
import counterReducer from "./counter";
import productReducer from "./products";

const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer,
});

export default rootReducer;