import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "./Map.css";

mapboxgl.accessToken = 'pk.eyJ1Ijoia3J1c2hpbCIsImEiOiJjazloZWFhNjcwcDNnM2VrZmdwZmtsamd4In0.TfhSinR048qo-VabiPgalA';

function Maps() {

    // Sets the map properties like the Latitude & Longitude
    // Also sets up the zoom on the map
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-75.573636);
    const [lat, setLat] = useState(40.588784);
    const [zoom, setZoom] = useState(12);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [lng, lat],
            zoom: zoom
        });
    });

  
  return <div ref={mapContainer} className='map-container' />

}

export default Maps;