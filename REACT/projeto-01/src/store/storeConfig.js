import { createStore, combineReducers } from "redux";

import numerosReducer from "./reducers/numeros";

const reducer = combineReducers({
  numeros: numerosReducer

});

function storeConfig() {
  return createStore(reducer);
}

export default storeConfig;
