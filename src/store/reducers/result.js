import * as actionTypes from'../action'

const initialState = {
  result: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,

        result: state.result.concat({ id: new Date(), value: action.result }),
      };
    case actionTypes.STORE_DELETE:
      // const id=3;
      // const newArray=[...state.result]
      // newArray.splice(id,1)
      const updateArray = state.result.filter(
        (result) => result.id !== action.resultRlId
      );
      return {
        ...state,

        result: updateArray,
      };
  }

  return state;
};

export default reducer;
