
import {ADD_ADDRESS} from "./savedAddressTypes";
import db from "../../Home/firebaseinit.js";

const add_address = (address)=> {
    return  {
        type:ADD_ADDRESS,
        payload:address
    }
}

const save_location = (address) => {
    return (dispatch,state)=> {
        console.log(state().savedAddress.Addresses);
         
        let saved_Address=[];
        if(state().savedAddress.Addresses!= undefined)
        {
            console.log("NOT UNDEFINED")
         saved_Address=[...state().savedAddress.Addresses,address];
        }
        else {
            console.log("UNDEFINED")
            saved_Address.push(address);
        }
        db.collection("searches").get().then(function(snapshot) {
            console.log(snapshot.docs);
            if(snapshot.docs.length==0)
            {
                db.collection("searches").add({saved_Address});
            }
            else {
            let id=snapshot.docs[0].id;
            db.collection("searches").doc(id).update({saved_Address});
            }
        })
        dispatch(add_address(address));
    }
}

export default save_location;