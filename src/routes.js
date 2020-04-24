import React from "react";

const GoogleMaps = React.lazy(() => import("pages/GoogleMaps"));
const ButtonLoadingSpinner = React.lazy(() =>
    import("pages/ButtonLoadingSpinner")
);
const OTPBox = React.lazy(() => import("pages/OTPBox"));

const routes = [
    {
        path: "/map",
        component: GoogleMaps
    },
    {
        path: "/button-loader",
        component: ButtonLoadingSpinner
    },
    {
        path: "/otp-box",
        component: OTPBox
    }
];

export default routes;
