import React, { useState } from "react";
import Header from "components/Header";
import { animated, useSpring } from "react-spring";

import imgDoctor from "resources/images/doctor.svg";
import imgChef from "resources/images/chef.svg";
import imgPolice from "resources/images/policeman.svg";
import imgEngineer from "resources/images/engineer.svg";
import AppConfig from "App.config";
import ExternalInfo from "components/ExternalInfo";

const ShowAndHide = () => {
    const professions = ["police", "chef", "doctor", "engineer"];
    const [myProfession, setMyProfession] = useState("");

    return (
        <>
            <Header title="Show and hide elements based on state in hooks" />

            <ExternalInfo page="showAndHideElements" />

            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <h2>Select the profession you like the most</h2>
                    <br />
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        {professions.map(profession => (
                            <button
                                type="button"
                                key={profession}
                                className={"btn btn-light border-dark "}
                                onClick={() => setMyProfession(profession)}
                            >
                                {profession.toLocaleUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="col text-center">
                    <p>{myProfession}</p>

                    <p>
                        {myProfession === "police" && (
                            <ProfessionImage src={imgPolice} />
                        )}
                        {myProfession === "chef" && (
                            <ProfessionImage src={imgChef} />
                        )}
                        {myProfession === "doctor" && (
                            <ProfessionImage src={imgDoctor} />
                        )}
                        {myProfession === "engineer" && (
                            <ProfessionImage src={imgEngineer} />
                        )}
                    </p>
                </div>
            </div>
        </>
    );
};

const ProfessionImage = ({ src }) => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
        <animated.img
            src={src}
            alt=""
            style={{ width: "250px", height: "250px", ...props }}
        />
    );
};

export default ShowAndHide;
