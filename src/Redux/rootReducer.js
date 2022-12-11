import searchReducer from "./Search/searchReducer";
import {combineReducers } from "redux";
import clickFeatureReducer from "./ClickFeature/clickFeatureReducer";
import markerReducer from "./Markers/makerReducer";
import savedAddressReducer from "./SavedAddress/savedAddressReducer";
import gslreducer from "./GetSavedLocations/gslreducer";
const rootReducer = combineReducers({
    searchReq:searchReducer,
    clickFeature:clickFeatureReducer,
    markers:markerReducer,
    getSavedLocations:gslreducer,
    savedAddress:savedAddressReducer
})


export default rootReducer;