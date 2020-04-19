import React from "react";
import Map from "google-map-react";
import Header from "components/Header";
import config from "App.config";

const GoogleMaps = ({ google }) => {
    return (
        <>
            <Header title="Google Maps" />
            <div className="row w-100">
                <div
                    className="col text-center"
                    style={{ width: "100%", height: "550px" }}
                >
                    <Map
                        bootstrapURLKeys={{ key: config.GOOGLE.GAPI_KEY }}
                        defaultZoom={10}
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

/* export default GoogleApiWrapper({
    apiKey: config.GOOGLE.GAPI_KEY
})(GoogleMaps); */
