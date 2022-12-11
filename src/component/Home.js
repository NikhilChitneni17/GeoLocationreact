import React, { useEffect, useState } from "react";
import ClickableTable from "./ClickableTable";
import Googlemap from "./googlemap";
import {fetchResult} from "../Redux/Search/searchActions";
import fetch_saved_locations from "../Redux/GetSavedLocations/gslActions";
import {useSelector,useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import {fetchSearchSuccess} from "../Redux/Search/searchActions";

const Home = (props)=> {

    const locations = useSelector(state=> state.searchReq.locations);
    const key="AIzaSyCtqSZ-0fMP2eTqFYa4qXUPeRqDcv6h2bI";
    const [searchval,setsearchval]=useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const [urlLocations,seturlLocations]= useState([]);
    const [urlLocation,seturlLocation]=useState("");
    const [urlgeometry,seturlgeometry]=useState({});
    let url=window.location.search;
    let params=new URLSearchParams(url);
    const [paramsCheck,setparamsCheck]=useState(true);
    window.onbeforeunload=()=> {
        sessionStorage.setItem("122",JSON.stringify(locations));
    }
    // useEffect(()=> {

    //     // let temp=JSON.parse(sessionStorage.getItem("122"));
    //     // if(temp)
    //     // {
    //     //     console.log(temp);
    //     //     dispatch(fetchSearchSuccess(temp));
            
            
    //     // }
        

    //     if(params.get("location")!==null )
    //     {
             
    //         let xhr = new XMLHttpRequest();
    //         xhr.open("GET","https://maps.googleapis.com/maps/api/geocode/json?address="+params.get("location")+"&key="+key); 
    //         xhr.onload=()=> {
    //             seturlLocations(xhr.response.results);
    //             console.log(xhr.response.results);
                 
    //         }
    //         xhr.responseType="json";
    //         xhr.send();
           
    //         for(let i in urlLocations)
    //         {
    //             console.log("HOME"+urlLocations[i].formatted_address,params.get("lat"));
    //                 console.log(urlLocations[i].geometry);
                
    //             if( (urlLocations[i].geometry.location.lat==params.get("lat")) && (urlLocations[i].geometry.lng==params.get("lng")) )
    //             {
    //                 seturlLocation(urlLocations[i].formatted_address);
    //                 seturlgeometry({lat:urlLocations[i].geometry.location.lat,lng:urlLocations[i].geometry.location.lng});
                    
    //             } 
    //         }
    //     } 
    // },)
  

    function formHandler(event) {
        console.log("formhandler");
        event.preventDefault();
        dispatch(fetchResult(searchval,key));
    }


    function changeHandler(event) {
        
        setsearchval(()=> {return event.target.value});
        
    }


    function viewHandler(event) {
     //dispatch(fetch_saved_locations());
        history.push("/Storage");
    }


    return (
        <>
        <div className="col-12 col-lg">
        <form onSubmit={formHandler}>
                   <div className="input-group">
                      
                        <input type="text" id="address" value={searchval} onChange={changeHandler} name="address" placeholder="Search" className="form-control"/>
                        <span><button id="search-button" className="btn btn-primary search-button"><i className="fa fa-search"></i></button></span>
                        <span><button id="view" onClick={viewHandler} className="btn btn-secondary mx-1">view</button></span> 
                    </div>
                    </form>
                    <ClickableTable button="save" locations={locations} searchReq={searchval}/>
                    </div>
                    {console.log(urlLocation)}
                    <Googlemap location={urlLocation} geometry={urlgeometry}/>
        </>
        
    )
}


export default Home;