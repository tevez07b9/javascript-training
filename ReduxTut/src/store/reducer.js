import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from "./actions";

const intialState = {
  allIds: [],
  byIds: {},
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }

    case SET_FILTER: {
      return {
        ...state,
        visibilityFilter: action.payload.filter,
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }

    default:
      return state;
  }
}
