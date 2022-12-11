import React, { useState } from "react";
import {useSelector} from "react-redux";
import Home from "./Home";
import Storage from "./Storage";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
const Searchform = (props)=> {
    
    //const locations = useSelector(state=> state.searchReq.search.locations);

    //const saved_locations = useSelector(state=>state.getSavedLocations.saved_locations);

    return (
        <Router>
            
                <Switch>
                   
                    <Route path="/" exact component={()=> <Home/>}/>
                    <Route path="/Storage" exact component={()=> <Storage/>}/>
                </Switch>           
        
        </Router>    

    )
}


export default Searchform;