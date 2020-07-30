import React, { useState, useEffect } from "react";
import Header from "components/Header";
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePasswordToggle from "hooks/usePasswordToggle";
import PasswordStrengthIndicator from "components/PasswordStrengthIndicator";
import ExternalInfo from "components/ExternalInfo";
import AppConfig from "App.config";

const isNumberRegx = /\d/;
const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

const Signup = () => {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordValidity, setPasswordValidity] = useState({
        minChar: null,
        number: null,
        specialChar: null
    });

    const onChangePassword = password => {
        setPassword(password);

        setPasswordValidity({
            minChar: password.length >= 8 ? true : false,
            number: isNumberRegx.test(password) ? true : false,
            specialChar: specialCharacterRegx.test(password) ? true : false
        });
    };

    return (
        <>
            <Header title="Signup Form" />
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <ExternalInfo page="signup" />

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
                                        value={password}
                                        onFocus={() => setPasswordFocused(true)}
                                        onChange={e =>
                                            onChangePassword(e.target.value)
                                        }
                                    />
                                    <span className="password-toogle-icon">
                                        {ToggleIcon}
                                    </span>
                                </div>

                                {passwordFocused && (
                                    <PasswordStrengthIndicator
                                        validity={passwordValidity}
                                    />
                                )}

                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
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

                    <div className="text-left mt-3">
                        <p className="text-dark">
                            In this page you can find the demo for
                        </p>
                        <ul className="text-primary">
                            <li>
                                <a
                                    href="https://youtu.be/bYBb3UCQtZ0"
                                    target="_blank"
                                >
                                    Password strength indicator
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://youtu.be/4kx44fbNZ-Y"
                                    target="_blank"
                                >
                                    Password toggle using a hook
                                </a>{" "}
                            </li>
                            <li className="text-primary">
                                <a
                                    href="https://youtu.be/QZSxSjKmW_Y"
                                    target="_blank"
                                >
                                    Integrate font awesome in reactjs
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
