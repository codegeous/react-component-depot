import React, { useState } from "react";
import Header from "components/Header";
import ExternalInfo from "components/ExternalInfo";
import AppConfig from "App.config";

const GeoLocation = () => {
    const [details, setDetails] = useState(null);

    const getUserGeolocationDetails = () => {
        fetch(
            "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
        )
            .then(response => response.json())
            .then(data => setDetails(data));
    };

    return (
        <>
            <Header title="Get user IP and location in ReactJS" />

            <ExternalInfo page="geoLocation" />

            <div className="row">
                <div className="col text-center">
                    <h2>Find my IP and Location</h2>
                    <p className="mt-3">
                        <button
                            className="btn btn-primary"
                            onClick={getUserGeolocationDetails}
                        >
                            Find my details
                        </button>

                        <div className="row justify-content-center mt-3">
                            <div className="col-lg-6 text-center text-dark">
                                {details && (
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            Location :{" "}
                                            {`${details.city}, ${details.country_name}(${details.country_code})`}
                                        </li>
                                        <li className="list-group-item">
                                            IP: {details.IPv4}
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </>
    );
};

export default GeoLocation;
