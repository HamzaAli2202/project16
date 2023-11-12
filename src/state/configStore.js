import {
    createStore,
    combineReducers
} from "redux";
import {
    categoryReducer
} from "./reducer/categoryReducer";
import {
    greetReducer
} from "./reducer/greetReducer";
import {
    foodsReducer
} from "./reducer/foodsReducer";
import {
    colorReducer
} from "./reducer/colorReducer";

export const configStore = () => {
    const store = createStore(
        combineReducers({
            categoryReducer,
            greetReducer,
            foodsReducer,
            colorReducer

        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};