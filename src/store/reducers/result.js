import * as actionType from '../actions';

const initialState = {
    results : []
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            return {
                ...state,
               results : state.results.concat({id : new Date(),value : action.result})
            }
            case actionType.DELETE_RESULT:
                const updatedArray = state.results.filter((ele) => ele.id !== action.eleId)
            return {
                ...state,
               results : updatedArray
            }
            
    }
     return state;
};

export default resultReducer;