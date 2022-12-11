import {ROW_CLICKED} from "./clickFeatureTypes";


const row_clicked = (Address,coords)=> {
  
    return {
        type:ROW_CLICKED,
        payload:Address,
        location:coords
    }
}


export default row_clicked;