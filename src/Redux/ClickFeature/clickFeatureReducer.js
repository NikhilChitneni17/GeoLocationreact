import {ROW_CLICKED} from "./clickFeatureTypes";


const initialState = {
    clicked:false,
    formattedAddress:[],
    coords:[]
}

const clickFeatureReducer= (state=initialState,action) => {

    switch(action.type)
    {
        case ROW_CLICKED : 
                        return {
                            ...state,
                            clicked:true,
                            formattedAddress:[...state.formattedAddress,action.payload],
                            coords:[...state.coords,action.location]
                        }
        default: return state;
    }
}


export default clickFeatureReducer;