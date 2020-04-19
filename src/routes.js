import React from "react";

const GoogleMaps = React.lazy(() => import("pages/GoogleMaps"));

const routes = [
    {
        path: "/map",
        component: GoogleMaps
    }
];

export default routes;
