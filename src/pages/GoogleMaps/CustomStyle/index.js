import React, { useState } from "react";
import Map from "google-map-react";
import Header from "components/Header";
import AppConfig from "App.config";

import mapStyles from "./mapStyles";
import ExternalInfo from "components/ExternalInfo";

const GoogleMaps = () => {
    const [mapStyle, setMapStyle] = useState([]);

    const updateMapStyle = (style = "") => setMapStyle(mapStyles[style] || []);

    return (
        <>
            <Header title="Google Maps Custom Styles" />

            <div className="row w-100">
                <ExternalInfo page="customGoogleMaps" />

                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">
                        Sorry!!! Demo will not work properly due to google's
                        billing restriction
                    </h4>
                    <p>
                        However you can clone this{" "}
                        <a
                            href="https://github.com/codegeous/react-component-depot"
                            _target="blank"
                            className="alert-link"
                        >
                            repo
                        </a>{" "}
                        and use your own google map API key to check the demo.
                        Update your google API key in{" "}
                        <strong>src/App.config.js</strong> after cloning the
                        repository
                    </p>
                </div>
                <div className="col mb-3 col-12 text-center">
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        <button
                            type="button"
                            className="btn btn-light border-dark"
                            onClick={() => updateMapStyle()}
                        >
                            Default
                        </button>
                        <button
                            type="button"
                            className="btn btn-dark border-dark"
                            onClick={() => updateMapStyle("dark")}
                        >
                            Dark Mode
                        </button>
                        <button
                            type="button"
                            className="btn btn-light border-dark"
                            onClick={() => updateMapStyle("light")}
                        >
                            Light Mode
                        </button>
                    </div>
                </div>
                <div
                    className="col text-center"
                    style={{ width: "100%", height: "550px" }}
                >
                    <Map
                        bootstrapURLKeys={{ key: AppConfig.GOOGLE.GAPI_KEY }}
                        defaultZoom={13}
                        options={{ styles: mapStyle }}
                        defaultCenter={{
                            lat: 24.4539,
                            lng: 54.3773
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default GoogleMaps;
