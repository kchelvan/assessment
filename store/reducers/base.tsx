const initialState = {};

export default (state = initialState, action: any) => {
  let new_state = {...state};
  const payload = action.payload;

  switch (action.type) {
    default:
      return state;
  }
};
