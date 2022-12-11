import {ADD_ADDRESS} from "./savedAddressTypes";


const initialState={
    Addresses:[]
}

const savedAddressReducer= (state=initialState,action)=> {
    switch(action.type)
    {
        case ADD_ADDRESS: 
        return {
            ...state,
            Addresses:[...state.Addresses,action.payload]
        }
        default: return state;
    }
}


export default savedAddressReducer;