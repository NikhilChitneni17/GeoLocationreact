import db from "../../Home/firebaseinit";
import {FETCH_GSL_SUCCESS} from "./gsltypes";

function get_saved_locations(saved_locations) {
    return {
        type:FETCH_GSL_SUCCESS,
        payload:saved_locations
    }
}


function fetch_saved_locations() {
    return (dispatch,state)=> {
        db.collection("searches").get().then(function(snapshot){
            console.log(snapshot.docs[0].data());
            let saved_data=snapshot.docs[0].data().saved_Address;
            console.log(saved_data);
            dispatch(get_saved_locations(saved_data));   
            });
    }
}



export default fetch_saved_locations;