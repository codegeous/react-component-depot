import React from "react";
import ReactGA from "react-ga";

const useGAEventTracker = (category = "Category") => {
    const trackEvent = (action = "action", label = "label") => {
        ReactGA.event({
            category,
            action,
            label,
        });
    };

    return trackEvent;
};

export default useGAEventTracker;
