import React, { useState } from "react";
import Header from "components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUnsavedChangesWarning from "hooks/useUnsavedChangesWarning";
import useFullscreenMode from "hooks/useFullscreenMode";
import AppConfig from "App.config";
import ExternalInfo from "components/ExternalInfo";

const HooksDemo = () => {
    const [name, setName] = useState("");
    const [Prompt, setDirty, setPristine] = useUnsavedChangesWarning();
    const [elementRef, FullscreenIcon] = useFullscreenMode();

    return (
        <>
            <Header title="Hooks demo" />

            <ExternalInfo page="hooks" />

            <div
                className="row justify-content-center mt-5 bg-light"
                ref={elementRef}
            >
                <div className="col-lg-6 text-center mt-5">
                    {FullscreenIcon}
                    <h3>Custom Hook - "useUnsavedChangesWarning()"</h3>
                    <p>
                        Type something in the box below and move to other screen
                        without submitting
                    </p>
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
                            onChange={e => {
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
            {Prompt}
        </>
    );
};

export default HooksDemo;
