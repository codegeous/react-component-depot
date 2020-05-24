import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useFullscreenMode = () => {
    const [isFullscreen, setFullscreen] = useState(false);
    const elementRef = useRef();

    useEffect(() => {
        const changeHandler = () => setFullscreen(mode => !mode);

        document.addEventListener("fullscreenchange", changeHandler, false);
        document.addEventListener("mozfullscreenchange", changeHandler, false);
        document.addEventListener("MSFullScreenChange", changeHandler, false);
        document.addEventListener(
            "webkitfullscreenchange",
            changeHandler,
            false
        );

        return () => {
            document.removeEventListener("fullscreenchange", changeHandler);
            document.removeEventListener("mozfullscreenchange", changeHandler);
            document.removeEventListener("MSFullScreenChange", changeHandler);
            document.removeEventListener(
                "webkitfullscreenchange",
                changeHandler
            );
        };
    }, []);

    const goFullscreen = () => {
        if (elementRef.current.requestFullscreen) {
            elementRef.current.requestFullscreen();
        } else if (elementRef.current.mozRequestFullscreen) {
            //Firefox
            elementRef.current.mozRequestFullscreen();
        } else if (elementRef.current.webkitRequestFullscreen) {
            //Chrome, safari, opera
            elementRef.current.webkitRequestFullscreen();
        } else if (elementRef.current.msRequestFullscreen) {
            //IE, edge
            elementRef.current.msRequestFullscreen();
        }
    };

    const exitFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    };

    const ToggleIcon = (
        <FontAwesomeIcon
            icon={!isFullscreen ? "expand" : "compress"}
            onClick={() => (!isFullscreen ? goFullscreen() : exitFullScreen())}
        />
    );
    return [elementRef, ToggleIcon]; //Icon, ref
};

export default useFullscreenMode;
