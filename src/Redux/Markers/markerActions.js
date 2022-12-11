import {ADD_MARKER} from "./markerTypes";

const add_marker = (marker)=> {
    return {
        type:ADD_MARKER,
        payload:marker
    }
}


export default add_marker;