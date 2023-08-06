import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGhhcndpbiIsImEiOiJja2lvbmExY3cwa2M2MnNveWNiZnlpczYzIn0.jIjFK42Gjc6lEFgbaFr3Ig';

const Map = () => {
  const [map, setMap] = useState(null);

  const mapContainer = useRef(null);

  useEffect(() => {
    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0],
      zoom: 2,
    });

    setMap(newMap);

    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        // Set the map's center to the user's current position
        newMap.setCenter([position.coords.longitude, position.coords.latitude]);
        
        // Add a marker to the map at the user's current position
        new mapboxgl.Marker().setLngLat([position.coords.longitude, position.coords.latitude]).addTo(newMap);
      }, error => {
        console.error(error);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    return () => newMap.remove();
  }, []);

  return (
    <div className='main-container'>
        <h2 className="map-heading" id="location">Our Location</h2>
        <div className="map-container" ref={mapContainer}>
        <div className="map-overlay">
            <h2>My Map Title</h2>
            <p>My map description</p>
        </div>
        </div>
    </div>
  );
};

export default Map;
