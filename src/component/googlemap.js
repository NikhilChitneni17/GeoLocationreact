import React, { useEffect } from "react";
import {Loader} from "@googlemaps/js-api-loader";
import { useDispatch, useSelector } from "react-redux";


const Googlemap = (props)=> {
   // console.log(google)
     const map = {
        width:"100%",
        height:"99vh"
    }
    const mapref=React.createRef();
    const clicked = useSelector(state=> state.clickFeature.clicked);
    const formattedAddress = useSelector(state=> state.clickFeature.formattedAddress);
    const coords= useSelector(state=> state.clickFeature.coords);
    const dispatch = useDispatch();
    useEffect(()=> {
        const loader = new Loader({
            apiKey: "AIzaSyCtqSZ-0fMP2eTqFYa4qXUPeRqDcv6h2bI",
            version: "weekly",
          });
          let map,mapWindow;
        loader.load().then(() => {
             map = new window.google.maps.Map(mapref.current, {
              center: { lat: -34.397, lng: 150.644 },
              zoom: 8,
            });
             mapWindow=new window.google.maps.InfoWindow;
            
            // map.setCenter({lat:30,lng:30});
          }).then(()=> {
            let url=window.location.search;
            let params=new URLSearchParams(url);
            if(params.get("location")!=null)
            {
              console.log("GOOGLEMAP 2");
  
              // mapWindow.setPosition({lat:Number(params.get("lat")),lng:Number(params.get("lng"))});
              // mapWindow.setContent("Location="+params.get("location"));
              // mapWindow.open(map);
              // let marker =  new window.google.maps.Marker({
              //   position:{lat:Number(params.get("lat")),lng:Number(params.get("lng"))},
              //   map:map
              // });
              let coords=[],formattedAddress=[];
              coords.push({lat:Number(params.get("lat")),lng:Number(params.get("lng"))});
              formattedAddress.push(params.get("location"));
              addMarker(coords,formattedAddress,0);
            }
            if(clicked)
            {
              for(let i in formattedAddress)
              {
                addMarker(coords,formattedAddress,i);
              }
            }
      
            function addMarker(coords,formattedAddress,el)
            {
              console.log(map,mapWindow);
              console.log(coords);
              console.log(coords[el])
              mapWindow.setPosition(coords[el]);
              mapWindow.setContent("Location="+formattedAddress[el]);
              mapWindow.open(map);
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



export default React.memo(Googlemap);