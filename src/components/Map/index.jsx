import React, {useState, useEffect} from "react";
//import { GoogleApiWrapper } from "node_modules/google-maps-react/index";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

export const MapContainer = (props) => {
    const [map, setMap] = useState(null);
    const {google, query } = props;

    useEffect(() => {
        if(query){
            searchNearby(query);
        }   
    }, [query]);

    function searchByQuery(query){
        const service = new google.maps.places.PlacesService(map);

        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query,
        };

        service.textSearch(request, (results, status) =>{
            if(status == google.maps.places.PlacesServiceStatus.Ok){
                console.log('restautants>>>>', results);
            }
        });

    }

    function searchNearby(map, center){
        const service = new google.maps.places.PlacesService(map);

        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant'],
        };

        service.nearbySearch(request, (results, status) =>{
            if(status == google.maps.places.PlacesServiceStatus.Ok){
                console.log('restautants>>>>', results);
            }
        });
    }

    function onMapReady(_, map){
        setMap(map);
        searchNearby(map, map.center);
    }

    return <Map google={google} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady} />;
};

export default GoogleApiWrapper({
apikey: process.env.REACT_APP_GOOGLE_API_KEY,
language: 'pt-BR',
})(MapContainer);