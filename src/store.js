import createAPI from "./api/api";
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer/reducer";
import {compose} from "recompose";
import thunk from "redux-thunk";

export const api = createAPI((...args) => store.dispatch(...args));
export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);
