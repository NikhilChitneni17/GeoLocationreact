import { FETCH_SEARCH_FAILURE, FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS } from "./searchTypes"



const initialState={
    
        locations:[],
}

const searchReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_SEARCH_SUCCESS:
            
            return {
                ...state,
                locations:action.payload,
                //searches:[...state.searches, JSON.parse(action.payload).results]
            }
            default:return state;
    }
}

export default searchReducer;
