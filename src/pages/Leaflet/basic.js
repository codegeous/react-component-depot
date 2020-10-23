import React, { useState } from "react";
import Header from "components/Header";

import { Map, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import ExternalInfo from "components/ExternalInfo";

const BasicMap = () => {
    const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();

    return (
        <>
            <Header title="React Leaflet Map Example" />

            <ExternalInfo page="leafletBasic" />

            <div className="row">
                <div className="col text-center">
                    <h2>React-leaflet - Basic Openstreet Maps</h2>
                    <p>Loading basic map using layer from maptiler</p>
                    <div className="col">
                        <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                            <TileLayer
                                url={osm.maptiler.url}
                                attribution={osm.maptiler.attribution}
                            />
                        </Map>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BasicMap;
