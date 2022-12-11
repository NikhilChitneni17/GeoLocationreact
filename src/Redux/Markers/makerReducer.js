import {ADD_MARKER} from "./markerTypes";

const initialState ={
    markers:[]
}

const markerReducer = (state=initialState,action)=> {
    switch(action.type)
    {
        case ADD_MARKER: 
        return {
            markers:[...state.markers,action.payload]
        }
        default : return state;
    }
}

export default markerReducer;