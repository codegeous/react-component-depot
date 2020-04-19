import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
    const isNavbarVisible = useSelector(state => state.layout.navbar);

    const location = useLocation();

    const getNavLinkClass = path => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <nav id="sidebar" className={!isNavbarVisible ? "active" : ""}>
            <div className="sidebar-header">
                <h3>
                    <Link to="/">React-component-depot</Link>
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
                        <li className={getNavLinkClass("/map")}>
                            <NavLink to="/map" activeClassName="active">
                                Basic Google Maps
                            </NavLink>
                        </li>
                        <li className={getNavLinkClass("/map/custom-style")}>
                            <Link to="/map/custom-style">
                                Custom Google Maps
                            </Link>
                        </li>
                    </ul>
                </li>
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
