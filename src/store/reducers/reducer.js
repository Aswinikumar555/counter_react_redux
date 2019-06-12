const initiaState = {
  age: 0,
};
const reducer = (state = initiaState, action) => {
  const newState = { ...state }

  switch (action.type) {
    case "AGE_UP":
      newState.age += action.value;
      break;
    case "AGE_DOWN":
      newState.age -= action.value;
      break;

    case "entered_Number":
      newState.age = action.value;
      break;
    case "reset_Number":
      newState.age = action.value;
      break;

    default:
      break;
  }

  return newState
}

export default reducer