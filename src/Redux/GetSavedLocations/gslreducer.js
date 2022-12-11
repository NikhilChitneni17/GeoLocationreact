import { FETCH_GSL_SUCCESS } from "./gsltypes"


const initialState = {
    saved_locations:[]
}



  const gslreducer = (state=initialState,action)=>  {
       switch(action.type) {
           case FETCH_GSL_SUCCESS: 
           return {
               ...state,
               saved_locations:[...action.payload]
           }
           default: return state;
       }

}


export default gslreducer;