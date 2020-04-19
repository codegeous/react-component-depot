import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const isNavbarVisible = useSelector(state => state.layout.navbar);

    return (
        <nav id="sidebar" className={!isNavbarVisible ? "active" : ""}>
            <div className="sidebar-header">
                <h3>
                    <a
                        href="https://www.youtube.com/channel/UCdItDI6oTgPW7l9WOJI7ItA/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React-component-depot
                    </a>
                </h3>
            </div>
            <ul className="list-unstyled components">
                <p>
                    <a
                        href="https://www.youtube.com/channel/UCdItDI6oTgPW7l9WOJI7ItA/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        D'Coders Youtube Page
                    </a>
                </p>
                {/* <li className="active">
                    <a
                        href="#homeSubmenu"
                        data-toggle="collapse"
                        aria-expanded="false"
                        className="dropdown-toggle"
                    >
                        OTP Box
                    </a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">OTP Box in react with auto focus</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li> */}
                {/* <li>
                    <Link to="/otp">OTP</Link>
                </li> */}
                <li>
                    <a
                        href="#pageSubmenu"
                        data-toggle="collapse"
                        aria-expanded="false"
                        className="dropdown-toggle"
                    >
                        google-map-react
                    </a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <Link to="/map">Basic Google Maps</Link>
                        </li>
                        <li>
                            <Link to="/map/custom-style">
                                Custom Google Maps
                            </Link>
                        </li>
                        {/* <li>
                            <a href="#">Custom Marker</a>
                        </li>
                        <li>
                            <a href="#">Direction API</a>
                        </li> */}
                    </ul>
                </li>
                {/*  <li>
                    <Link to="/otp">OTP</Link>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li> */}
            </ul>

            <ul className="list-unstyled CTAs">
                <li>
                    <a
                        href="https://github.com/codegeous/react-component-depot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download"
                    >
                        <i className="fab fa-github"></i> Github
                    </a>
                </li>
            </ul>
        </nav>
    );
};
