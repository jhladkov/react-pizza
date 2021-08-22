import filters from "./filters";
import pizzas from "./pizzas";
import card from "./card";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    filters,
    pizzas,
    card
})

export default rootReducer


