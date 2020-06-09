import React, { useState, useEffect } from "react";
import Header from "components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useBattery } from "react-use";
import AppConfig from "App.config";
import ExternalInfo from "components/ExternalInfo";

const BatteryStatus = () => {
    const [batteryStrokes, setBatteryStrokes] = useState(Array(5).fill(true));
    let currentStroke = 4;

    const batteryState = useBattery();

    useEffect(() => {
        let timer = null;

        //If battery is charging state. Animate strokes
        if (batteryState.charging) {
            setBatteryStrokes(Array(5).fill(false));

            //Start the timer
            timer = initChargingSequence();
        } else {
            //If not charging, calculate the total strokes based on the charge.
            calculateBatteryStrokes(batteryState.level);
        }

        //Clearing timer on unmout
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [batteryState]);

    const initChargingSequence = () =>
        setInterval(() => {
            if (currentStroke < 0) {
                currentStroke = 4;
                setBatteryStrokes(Array(5).fill(false));
                return;
            }

            setBatteryStrokes(strokes =>
                strokes.map((stroke, idx) =>
                    idx === currentStroke ? true : stroke
                )
            );

            currentStroke--;
        }, 1000);

    const calculateBatteryStrokes = level => {
        const batteryPercent = level * 100; //Battery percentage

        let totalStrokesCount = Math.ceil((batteryPercent * 5) / 100) - 1;

        setBatteryStrokes(
            Array(5)
                .fill(true)
                .map((d, i) => (i <= totalStrokesCount ? true : false))
                .reverse()
        );
    };

    if (!batteryState.isSupported) {
        return <h3>Battery sensor not supported</h3>;
    }

    if (!batteryState.fetched) {
        return <h3>Fetching battery status, please wait...</h3>;
    }

    let batteryPercent = Math.round(batteryState.level * 100);

    let batteryStatusClass = batteryState.charging
        ? "battery-charging"
        : batteryState.level * 100 > 20
        ? "battery-full"
        : "battery-empty";

    return (
        <>
            <Header title="Battery Status Indicator" />

            <ExternalInfo
                code={AppConfig.links.batteryStatus.code}
                tutorial={AppConfig.links.batteryStatus.tutorial}
            />

            <div className="row justify-content-center bg-light">
                <div className="col-lg-12 text-center">
                    <h3>BATTERY STATUS</h3>
                    <p>
                        You can find your battery charge percentage and charging
                        animation which is purely built on reactjs
                    </p>
                </div>
                <div
                    className={`col mb-3 mt-5 col-12 d-flex justify-content-center ${batteryStatusClass}`}
                >
                    <div className="d-flex flex-column battery-outer">
                        {batteryStrokes.map((stroke, idx) => (
                            <BatteryStroke key={idx} visible={stroke} />
                        ))}
                        <div className="battery-charging-indicator">
                            <FontAwesomeIcon icon="bolt" />
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <h4>Current Battery: {batteryPercent}%</h4>
                    <div className="col d-inline">
                        {batteryPercent <= 20 && (
                            <div className="d-inline-block mt-3 alert alert-danger">
                                Your battery is getting low, save your work and{" "}
                                <strong>connect your charger</strong> now
                            </div>
                        )}
                        {batteryPercent > 20 && (
                            <div className="d-inline-block mt-3 alert alert-success">
                                Your battery is in{" "}
                                <strong>good condition</strong>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

const BatteryStroke = ({ visible }) => (
    <div
        className={`battery-inner flex-fill ${
            visible ? "visibe" : "invisible"
        }`}
    ></div>
);

export default BatteryStatus;
