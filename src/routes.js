import React from "react";

const GoogleMaps = React.lazy(() => import("pages/GoogleMaps"));
const ButtonLoadingSpinner = React.lazy(() =>
    import("pages/ButtonLoadingSpinner")
);

const routes = [
    {
        path: "/map",
        component: GoogleMaps
    },
    {
        path: "/button-loader",
        component: ButtonLoadingSpinner
    }
];

export default routes;
