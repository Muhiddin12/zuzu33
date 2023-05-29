// import data from "./data.js";
const ADD = "ADD";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const DELETE = "DELETE";
const TRASH = "TRASH";

const initialState = [];

export const zuzuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      console.log(state);
      const updateItem = state.find((el) => el.id == action.itemId);
      if (updateItem) {
        return state.map((el) =>
          el.id == action.itemId
            ? { ...el, number: el.number + action.itemNumber }
            : el
        );
      } else {
        return [action.item, ...state];
      }
    case INCREMENT:
      return state.map((el) =>
        el.id == action.id ? { ...el, number: el.number + 1 } : el
      );
    case DECREMENT:
      return state.map((el) =>
        el.id == action.id ? { ...el, number: el.number - 1 } : el
      );
    case DELETE:
      return state.filter((el) => el.id !== action.id);
    case TRASH:
      return (state = []);
    default:
      return state;
  }
};

export const addActionCreator = (item, itemId, itemNumber) => {
  return {
    type: ADD,
    item,
    itemId,
    itemNumber,
  };
};

export const addIncrement = (id) => {
  return {
    type: INCREMENT,
    id,
  };
};

export const addDecrement = (id) => {
  return {
    type: DECREMENT,
    id,
  };
};

export const addRemoveList = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const addDeleteBasket = () => {
  return {
    type: TRASH,
  };
};
