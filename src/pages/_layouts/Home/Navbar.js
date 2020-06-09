import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import routes from "routes";
import { Scrollbars } from "react-custom-scrollbars";

export const Navbar = () => {
    const isNavbarVisible = useSelector(state => state.layout.navbar);

    const location = useLocation();

    const getNavLinkClass = path => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <nav id="sidebar" className={!isNavbarVisible ? "active" : ""}>
            <Scrollbars style={{ width: "100%", height: "100%" }}>
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

                    {routes.map((route, index) => {
                        //If has child, render sub list
                        return route.child ? (
                            <li key={index}>
                                <a
                                    href={`#pageSubmenu${index}`}
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    className="dropdown-toggle"
                                >
                                    {route.navbar}
                                </a>
                                <ul
                                    className="collapse list-unstyled"
                                    id={`pageSubmenu${index}`}
                                >
                                    {route.child.map((child, idx) => {
                                        return (
                                            <li
                                                key={idx}
                                                className={getNavLinkClass(
                                                    child.path
                                                )}
                                            >
                                                <NavLink
                                                    to={child.path}
                                                    activeClassName="active"
                                                >
                                                    {child.name}
                                                </NavLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        ) : (
                            <li
                                key={index}
                                className={getNavLinkClass(route.path)}
                            >
                                <Link to={route.path}>{route.navbar}</Link>
                            </li>
                        );
                    })}
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
                    <li>
                        <Link to="/built-with-react">Built with react</Link>
                    </li>
                </ul>
            </Scrollbars>
        </nav>
    );
};
