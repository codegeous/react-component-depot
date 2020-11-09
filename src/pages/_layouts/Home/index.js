import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { useSelector } from "react-redux";
import YoutubePlayer from "components/YoutubePlayer";

import ReactGA from "react-ga";
import { withRouter } from "react-router-dom";
import AppConfig from "App.config";

ReactGA.initialize(AppConfig.GOOGLE.GA_TRACKING_CODE);

const Home = ({ children }) => {
    const isNavbarVisible = useSelector((state) => state.layout.navbar);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    });

    return (
        <>
            <div className="wrapper">
                <Navbar />

                <div id="content" className={!isNavbarVisible ? "active" : ""}>
                    {process.env.NODE_ENV === "production" && <div className="user-notification">
                        If you like my work, please support by{" "}
                        <a href="https://www.youtube.com/channel/UCdItDI6oTgPW7l9WOJI7ItA/?sub_confirmation=1">
                            🔔 subscribing to my youtube channel
                        </a>{" "}
                        and give a{" "}
                        <a href="https://github.com/codegeous/react-component-depot">
                            ⭐ star on github
                        </a>
                    </div>}

                    {children}
                </div>
                <YoutubePlayer />
            </div>

            <a
                href="https://github.com/codegeous/react-component-depot"
                target="_blank"
            >
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 250 250"
                    style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        border: "0",
                        width: "60px",
                        height: "60px",
                        zIndex: 1005,
                    }}
                    class="github-corner"
                >
                    <path
                        fill="#999"
                        class="github-corner__bg"
                        d="M0 0l115 115h15l12 27 108 108V0z"
                    ></path>
                    <path
                        class="octo-arm"
                        fill="#fff"
                        d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16"
                    ></path>
                    <path
                        class="octo-body"
                        fill="#fff"
                        d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z"
                    ></path>
                </svg>
            </a>
        </>
    );
};

export default withRouter(Home);
