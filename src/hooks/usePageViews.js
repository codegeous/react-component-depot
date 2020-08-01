import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const usePageViews = () => {
    let location = useLocation();
    console.log("Started tracking pageviews");

    useEffect(() => {
        console.log("Sending pageviews", location.pathname);
        ReactGA.send(["pageview", location.pathname]);
    }, [location]);

    return null;
};

export default usePageViews;
