import React, { useEffect } from "react";
import {Loader} from "@googlemaps/js-api-loader";
import { useSelector } from "react-redux";

const MarkersMap = (props)=> {
   console.log("MARKERS MAP");
    const map = {
        width:"100%",
        height:"99vh"
    }
    const clicked = useSelector(state=> state.clickFeature.clicked);
    const CformattedAddress = useSelector(state=> state.clickFeature.formattedAddress);
    const Ccoords= useSelector(state=> state.clickFeature.coords);
    const mapref=React.createRef();
    const saved_locations = useSelector(state=>state.getSavedLocations.saved_locations);
     console.log(saved_locations);
     console.log(CformattedAddress,Ccoords,clicked);
    useEffect(()=> {
        const loader = new Loader({
            apiKey: "AIzaSyCtqSZ-0fMP2eTqFYa4qXUPeRqDcv6h2bI",
            version: "weekly",
          });
         let map,mapWindow;
        loader.load().then(() => {
             map = new window.google.maps.Map(mapref.current, {
              center: { lat: -34.397, lng: 150.644 },
              zoom: 2,
            });
             mapWindow=new window.google.maps.InfoWindow;
            
            // map.setCenter({lat:30,lng:30});
          }).then(()=> {
              let coords=[];
              let formattedAddress=[];
              for(let i in saved_locations)
              {
                  console.log(saved_locations);
                  coords[i]={ lat:saved_locations[i].Latitude,
                              lng:saved_locations[i].Longitude
                            }
                   formattedAddress[i]=saved_locations[i].formatted_address;         
              }
              for(let i in saved_locations)
              {
                  addMarker(coords,formattedAddress,i);
              }
              if(clicked)
            {
              for(let i in CformattedAddress)
              {
                showMarker(Ccoords,CformattedAddress,i);
              }
              
            }


              function showMarker(coords,formattedAddress,el)
              {
                  console.log(coords,formattedAddress,el);
                mapWindow.setPosition(coords[el]);
                mapWindow.setContent("Location="+formattedAddress[el]);
                mapWindow.open(map);
              }



            function addMarker(coords,formattedAddress,el)
            {
              console.log(map,mapWindow);
              console.log(coords);
              console.log(formattedAddress);
              let marker =  new window.google.maps.Marker({
                position:coords[el],
                map:map
              });
              window.google.maps.event.addListener(marker,"mouseover",(e)=>{
                console.log(marker);
                let tracker;
                console.log(coords);
                console.log(formattedAddress);
                for(let i in coords)
                {
                  if((coords[i].lat == marker.position.lat()) && (coords[i].lng == marker.position.lng()))
                  {
                    tracker=i;
                  }
                }
                mapWindow.setPosition(coords[tracker]);
                mapWindow.setContent("Location="+formattedAddress[tracker]);
                mapWindow.open(map,marker);
              })
              window.google.maps.event.addListener(marker,"click",(e)=> {
                map.setCenter({lat:marker.position.lat(),lng:marker.position.lng()});
                map.setZoom(16);
              })
            }
          })
    })


    return (
        <div id="map" style={map} ref={mapref} className="col-12 col-lg"> </div>
    )
}



export default React.memo(MarkersMap);