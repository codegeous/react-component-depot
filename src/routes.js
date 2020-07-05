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
const DataTable = React.lazy(() => import("pages/DataTable"));
const Signup = React.lazy(() => import("pages/Signup"));
const HooksDemo = React.lazy(() => import("pages/HooksDemo"));
const FileUpload = React.lazy(() => import("pages/FileUpload"));
const BatteryStatus = React.lazy(() => import("pages/BatteryStatus"));
const InfiniteScrolling = React.lazy(() => import("pages/InfiniteScrolling"));
const Hcaptcha = React.lazy(() => import("pages/HCaptcha"));
const ReCaptcha = React.lazy(() => import("pages/ReCaptcha"));

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
        navbar: "Loading Spinners",
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
    {
        path: "/video-players",
        component: VideoPlayers,
        navbar: "Video Players",
        child: null
    },
    {
        path: "/apps-library/scroll-indicator",
        component: AppsLibrary,
        navbar: "Scroll Indicator",
        child: null
    },
    {
        path: "/signup",
        component: Signup,
        navbar: "Signup Form",
        child: null
    },
    {
        path: "/hooks-demo",
        component: HooksDemo,
        navbar: "Hooks demo",
        child: null
    },
    {
        path: "/data-table",
        component: DataTable,
        navbar: "Data Table",
        child: null
    },
    {
        path: "/file-upload",
        component: FileUpload,
        navbar: "File Upload",
        child: null
    },
    {
        path: "/battery-status",
        component: BatteryStatus,
        navbar: "Battery Status",
        child: null
    },
    {
        path: "/infinite-scrolling",
        component: InfiniteScrolling,
        navbar: "Infinite Scrolling",
        child: null
    },
    /* {
        path: "/hcaptcha",
        component: Hcaptcha,
        navbar: "HCaptcha",
        child: null
    },
    {
        path: "/recaptcha",
        component: ReCaptcha,
        navbar: "ReCaptcha",
        child: null
    }, */
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
