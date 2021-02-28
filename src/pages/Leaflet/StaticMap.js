import React, { useState } from "react";
import Header from "components/Header";

import L from "leaflet";
import { Map, Marker, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";
import ExternalInfo from "components/ExternalInfo";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const marker = { lat: 24.4539, lng: 54.3773 };

const interactionOptions = {
  zoomControl: false,
  doubleClickZoom: false,
  closePopupOnClick: false,
  dragging: false,
  zoomSnap: false,
  zoomDelta: false,
  trackResize: false,
  touchZoom: false,
  scrollWheelZoom: false,
};

const StaticMap = () => {
  return (
    <>
      <Header title="React Leaflet - Static Map" />

      <ExternalInfo page="leafletStaticMap" />

      <div className="row">
        <div className="col text-center">
          <h2>React-leaflet - Showing static map with marker</h2>

          <div className="col">
            <Map
              center={marker}
              zoom={12}
              className="static-map"
              {...interactionOptions}
            >
              <TileLayer url={osm.maptiler.url} />
              <Marker position={[marker.lat, marker.lng]}></Marker>
            </Map>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticMap;
