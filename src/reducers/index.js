const reducer = (state, action) => {
  const todas = [...state.trends, ...state.originals];
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    case 'SEARCH_VIDEO':
      return {
        ...state,
        searchList: todas.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase())),
      };
    case 'CLEAR_SEARCH_VIDEO':
      return {
        ...state,
        searchList: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
