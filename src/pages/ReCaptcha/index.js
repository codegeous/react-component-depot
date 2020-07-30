import React, { useState, useEffect, useRef } from "react";
import Header from "components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePasswordToggle from "hooks/usePasswordToggle";
import ReCAPTCHA from "react-google-recaptcha";

import AppConfig from "App.config";
import useButtonLoader from "hooks/useButtonLoader";
import Axios from "axios";
import ExternalInfo from "components/ExternalInfo";

const ReCaptchaSignup = () => {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    const [error, setError] = useState("");
    const [token, setToken] = useState("");
    const [btnElement, setLoading] = useButtonLoader(
        "Create Account",
        "Creating..."
    );
    const reCaptcha = useRef();

    const onSignUp = () => {
        if (!token) {
            setError("Yoou must verify the captcha");
            return;
        }

        setError("");
        setLoading(true);

        Axios.post(AppConfig.api + "user/signup-with-recaptcha", {
            token,
            email: "sfshd@sfsdf.sdf"
        })
            .then(resp => {
                alert("Sign up success");
            })
            .catch(({ response }) => {
                setError(response.data.error);
            })
            .finally(() => {
                reCaptcha.current.reset();
                setToken("");
                setLoading(false);
            });
    };

    return (
        <>
            <Header title="Signup Form with reCaptcha" />

            <ExternalInfo page="recaptcha" />

            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="card bg-light">
                        <article
                            className="card-body mx-auto"
                            style={{ maxWidth: "400px" }}
                        >
                            <h4 className="card-title mt-3 text-center">
                                Create Account
                            </h4>
                            <p className="text-center">
                                Get started with your free account
                            </p>

                            <form>
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
                                    />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon="envelope" />
                                        </span>
                                    </div>
                                    <input
                                        name=""
                                        className="form-control"
                                        placeholder="Email address"
                                        type="email"
                                    />
                                </div>

                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon="lock" />
                                        </span>
                                    </div>
                                    <input
                                        className="form-control"
                                        placeholder="Create password"
                                        type={PasswordInputType}
                                    />
                                    <span className="password-toogle-icon">
                                        {ToggleIcon}
                                    </span>
                                </div>

                                <div className="form-group">
                                    <ReCAPTCHA
                                        ref={reCaptcha}
                                        sitekey={AppConfig.GOOGLE.reCaptcha}
                                        onChange={token => setToken(token)}
                                        onExpired={e => setToken("")}
                                    />
                                </div>
                                <div className="form-group">
                                    {error && (
                                        <p className="text-danger">{error}</p>
                                    )}
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-block"
                                        ref={btnElement}
                                        onClick={() => onSignUp()}
                                    >
                                        {" "}
                                        Create Account{" "}
                                    </button>
                                </div>
                                <p className="text-center">
                                    Have an account? <a href="">Log In</a>{" "}
                                </p>
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReCaptchaSignup;
