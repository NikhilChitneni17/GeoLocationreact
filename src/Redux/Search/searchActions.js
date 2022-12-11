
import {FETCH_SEARCH_SUCCESS} from "./searchTypes";



export const fetchSearchSuccess = (result) => {
    return {
        type:FETCH_SEARCH_SUCCESS,
        payload:result
    }
}


export const fetchResult = (address,key) => {
    return (dispatch,state) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET","https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+key); 
        xhr.onload=()=> {
            const locations = xhr.response.results;
            console.log(xhr.response.results);
            dispatch(fetchSearchSuccess(locations));
        }
        xhr.responseType="json";
        xhr.send();
        console.log(address)
    }
}