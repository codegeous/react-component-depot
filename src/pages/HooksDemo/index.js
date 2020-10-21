import React, { useState } from "react";
import Header from "components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUnsavedChangesWarning from "hooks/useUnsavedChangesWarning";
import useFullscreenMode from "hooks/useFullscreenMode";
import ExternalInfo from "components/ExternalInfo";
import ContactCard from "components/ContactCard";
import useVisiblityToggler from "hooks/useVisiblityToggler";
import useGeoLocation from "hooks/useGeoLocation";

const HooksDemo = () => {
    const [name, setName] = useState("");
    const [Prompt, setDirty, setPristine] = useUnsavedChangesWarning();
    const [elementRef, FullscreenIcon] = useFullscreenMode();
    const location = useGeoLocation();

    const [ContactCardComponent, toggleCardVisiblity] = useVisiblityToggler(
        <ContactCard index={1} name="D'coders Tech" phone="+959595959595" />,
        true
    );

    return (
        <>
            <Header title="Hooks demo" />

            <ExternalInfo page="hooks" />

            <div class="separator">Hook 1: Unsaved changes warning Hook</div>

            <div
                className="row justify-content-center mt-5 bg-light"
                ref={elementRef}
            >
                <div className="col-lg-6 text-center ">
                    Go Full Screen {FullscreenIcon}
                    <div class="card">
                        <div class="card-header text-left font-weight-bold">
                            Custom Hook - "useUnsavedChangesWarning()"
                        </div>
                        <div className="card-body">
                            <div>
                                Type something in the box below and move to
                                other screen without submitting
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <FontAwesomeIcon icon="user" />
                                    </span>
                                </div>
                                <input
                                    name=""
                                    className="form-control"
                                    placeholder="Full name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setDirty();
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    onClick={() => {
                                        setName("");
                                        setPristine();
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {Prompt}

            <div class="separator">Hook 2: Visiblity Toggler Hook</div>

            <div className="row d-flex justify-content-center mt-3 mb-5 pb-5">
                <div className="col-6">
                    <div class="card">
                        <div class="card-header text-left font-weight-bold d-flex">
                            <div className="inline-block mr-auto pt-1">
                                useVisiblityToggler Hook
                            </div>
                            <button
                                className="btn btn-primary "
                                onClick={toggleCardVisiblity}
                            >
                                Toggle Visiblity
                            </button>
                        </div>
                        <div className="card-body">{ContactCardComponent}</div>
                    </div>
                </div>
            </div>

            <div class="separator">Hook 3: User Geo Location Hook</div>

            <div className="row d-flex justify-content-center mt-3 mb-5 pb-5">
                <div className="col-6">
                    <div class="card">
                        <div class="card-header text-left font-weight-bold d-flex">
                            <div className="inline-block mr-auto pt-1">
                                {location.loaded
                                    ? JSON.stringify(location)
                                    : "Location data not available yet."}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HooksDemo;
