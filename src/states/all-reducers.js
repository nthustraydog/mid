const initialState = {
    id: '',

};
export function id(state = initialState, action) {
    switch (action.type) {
      case '@ALL/SETID':
          return {
              id: action.ID
          };
      default:
          return state;
    }
}
