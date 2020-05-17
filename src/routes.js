import React from "react";

const GoogleMaps = React.lazy(() => import("pages/GoogleMaps"));
const ButtonLoadingSpinner = React.lazy(() =>
    import("pages/ButtonLoadingSpinner")
);
const OTPBox = React.lazy(() => import("pages/OTPBox"));
const ContactList = React.lazy(() => import("pages/ContactList"));
const ReactBasics = React.lazy(() => import("pages/ReactBasics"));
const AppsLibrary = React.lazy(() => import("pages/AppsLibrary"));
const VideoPlayers = React.lazy(() => import("pages/VideoPlayers"));

const routes = [
    {
        path: "/map",
        component: GoogleMaps,
        navbar: "google-map-react",
        child: [
            {
                name: "Basic Google Maps",
                path: "/map"
            },
            {
                name: "Custom Google Maps",
                path: "/map/custom-style"
            }
        ]
    },
    {
        path: "/button-loader",
        component: ButtonLoadingSpinner,
        navbar: "Button Loader",
        child: null
    },
    {
        path: "/otp-box",
        component: OTPBox,
        navbar: "OTP Box",
        child: null
    },
    /* {
        path: "/contact-list",
        component: ContactList,
        navbar: "Contact List App",
        child: null
    }, */
    /* {
        path: "/video-players",
        component: VideoPlayers,
        navbar: "Video Players",
        child: null
    },*/
    {
        path: "/apps-library/scroll-indicator",
        component: AppsLibrary,
        navbar: "Scroll Indicator",
        child: null
    },
    {
        path: "/react-basics",
        component: ReactBasics,
        navbar: "React Basic",
        child: [
            {
                name: "Show and Hide based on State",
                path: "/react-basics/show-hide-elements"
            }
        ]
    }
];

export default routes;
