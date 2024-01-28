import { NUN_MIN_ALTERADO, NUN_MAX_ALTERADO } from "../actions/actionsTypes"


const initialState = {
  min: 1,
  max: 10,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NUN_MIN_ALTERADO:
      return {
        ...state,
        min: action.payload,
      };
    case NUN_MAX_ALTERADO:
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
}
