import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ReactMapGL, { GeolocateControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

// Get the default location from custom hook (useGeoLocation.js)
// get precise location by Marker from ReactMapGL

const MapWrapper = styled.div`
  position: relative;
`;

const UserLocation = styled.p`
  color: white;
  font-size: 2rem;
`;

const LogOutButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  border: none;
  height: 4rem;
  width: 8rem;
  font-size: 1.2rem;
  /* color: white; */
  color: rgb(80, 32, 80);
  font-weight: 700;
  border-radius: 15px;
  box-shadow: 5px 10px 100px #000;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 7rem;
    height: 3rem;
    font-size: 1rem;
  }
`;

const StyledGeolocate = styled(GeolocateControl)`
  position: absolute;
  left: 2rem;
  top: 2.5rem;
  box-shadow: 5px 10px 100px #000;
`;

function Map(props) {
  const [viewPort, setViewPort] = useState({
    latitude: props.lat,
    longitude: props.lng,
    // center: coordinate,
    zoom: 8,
    width: window.innerWidth,
    height: window.innerHeight,
    // width: "50rem",
    // height: "50rem",
    pitch: 50,
  });

  return (
    <MapWrapper>
      <ReactMapGL
        mapStyle={"mapbox://styles/mapbox/dark-v9"}
        mapboxApiAccessToken={
          "pk.eyJ1Ijoic2hhc2hhbmsxMDMiLCJhIjoiY2t0NHVtdDRwMDJiZTJ1cGRyNHBoeWxteCJ9.7d99ngfMIUUF9hfEpP1Lzg"
        }
        {...viewPort}
        onViewportChange={(newView) => {
          setViewPort(newView);
        }}
      >
        <StyledGeolocate
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        <Marker latitude={props.lat} longitude={props.lng}>
          <UserLocation>
            <i className="fas fa-map-marker-alt"></i>
          </UserLocation>
        </Marker>
      </ReactMapGL>
      <LogOutButton onClick={props.onLogout}>
        Sign out <i className="fas fa-sign-out-alt"></i>
      </LogOutButton>
    </MapWrapper>
  );
}

export default Map;
