import React, { useState } from "react";
import Header from "components/Header";

const BatteryStatus = () => {
    return (
        <>
            <Header title="Battery Status Indicator" />

            <div className="row justify-content-center bg-light">
                <div className="col-lg-6 text-center">
                    <h3>BATTERY STATUS</h3>
                    <p>
                        You can find your battery charge percentage and charging
                        animation which is purely built on reactjs
                    </p>
                    <div className="form-group input-group"></div>
                </div>
            </div>
        </>
    );
};

export default BatteryStatus;
