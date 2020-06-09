import {combineReducers, createStore} from "redux";
import drinksReducer from "./reducers/drinks-reducers";
import filtersReducer from "./reducers/filters-reducers";

let reducers=combineReducers({
    drinksPage: drinksReducer,
    filtersPage: filtersReducer
})

let store = createStore(reducers);
window.store = store;

export default store;
