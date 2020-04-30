export const exampleInitialState = {}

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case 'LOAD_DATA_SUCCESS':
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state
  }
}

export default reducer
