import ClickableTable from "./ClickableTable";
import MarkersMap from "./markersMap";
import fetch_saved_locations from "../Redux/GetSavedLocations/gslActions";
import {useDispatch,useSelector} from "react-redux";
import { useEffect } from "react";


const Storage = (props)=> {
    const saved_locations = useSelector(state=>state.getSavedLocations.saved_locations);
    const dispatch= useDispatch();
    console.log("STORAGE");
    useEffect(()=> {
        console.log("STORAGE USEFFECT");
        dispatch(fetch_saved_locations());
    },[]);
   

    return (
        <>
         <div className="col-12 col-lg">
           <ClickableTable locations={saved_locations}/>
           </div>
           <MarkersMap/>

        </>

    )
}



export default Storage;