import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Googlemap from "./googlemap";
import row_clicked from "../Redux/ClickFeature/clickFeatureActions";
import  save_location  from "../Redux/SavedAddress/savedAddressActions";
import { useHistory } from "react-router-dom";
const ClickableTable =(props) => {

    const history = useHistory();
    const locations = props.locations;
    const [loc,setloc]=useState(locations?true:false);
    const dispatch = useDispatch();
    const saved_Address = useSelector(state=> state.savedAddress.Addresses);
    const [showButton,setshowButton] = useState(props.button ?true:false);
    const save_button = (
        showButton ? <button className="btn-sm btn-outline-secondary" onClick={saveHandler}>{props.button}</button> : null
    )


    function clickHandler(event) {
        console.log("clicked");
        console.log(event.target.innerHTML);
        let temp;
        let geometry;
        for(let i in locations)
        {
           if(locations[i].formatted_address==event.target.innerHTML)
           {
               temp=i;
           }
        }
       
        if(locations[temp].geometry==undefined)
        {
            geometry= {lat:locations[temp].Latitude,lng:locations[temp].Longitude};
        }
        else {
            geometry=locations[temp].geometry.location;
        }
        console.log(geometry,locations[temp].formatted_address);
        dispatch(row_clicked(locations[temp].formatted_address,geometry));
        const urlString = "?location="+locations[temp].formatted_address+"&lat="+geometry.lat+"&lng="+geometry.lng;
        history.push(urlString);
    }
    

    function saveHandler(e) {
        e.stopPropagation();
        console.log(saved_Address);
        let temp;
        for(let i in locations)
        {
           if(locations[i].formatted_address==e.target.previousSibling.innerHTML)
           {
               temp=i;
           }
        }
        if(!e.target.disabled)
        {
            dispatch(save_location({formatted_address:e.target.previousSibling.innerHTML,Latitude:locations[temp].geometry.location.lat,Longitude:locations[temp].geometry.location.lng}));
            console.log(saved_Address);
           
        }
        console.log(saved_Address);
        e.target.disabled=true;
       
    }



    return (
        
        <div className="table table-hover">
            <table>
                <thead>
                <tr className="thead">
                  <th scope="col" colSpan="4">  Formatted Address </th>
                </tr>
                </thead>
                <tbody>
                    {props.locations?locations.map((el)=> {
                        return (<tr key={el.place_id} onClick={clickHandler}><td>{el.formatted_address}</td>
                          {save_button}  </tr>)
                    }): null}
                </tbody>
            </table>
        </div>
        
    )
}

export default ClickableTable;