import React, { useEffect, useRef } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
const incidentReports = [
  { lat: 40.7128, lng: -74.006, count:10},
  { lat: 34.0522, lng: -118.24, count: 5},
  {},
];
const MapView = () => {
  const mapContainerRef = useRef(null);
  useEffect(() => {
    if (mapContainerRef.current) {
      mapContainerRef.current.style.height = '700px';
    }
  }, []);
  return (
    <div ref={mapContainerRef} style={{ width: '100%' }}>
      <APIProvider apiKey="pon tu apikey perro">
        <Map
          defaultZoom={13}
          defaultCenter={{ lat: -16.39889 , lng: -71.53500}}
          gestureHandling={'greedy'}
          disableDefaultUI={false}
          style={{ height: '100%', width: '100%' }}
        />
      </APIProvider>
    </div>
  );
};
export default MapView;
