const INITIAL_STATE = [
    
];

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_MEME":
      return [...state, action.payload ];


    case "REMOVE_MEME":
        return state.filter((meme) => meme.id !== action.payload);

    default:
      return state;
  }
}

export default rootReducer;