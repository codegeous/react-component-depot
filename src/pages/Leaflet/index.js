import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./index.css";

const BasicMap = React.lazy(() => import("./basic"));
const MarkersMap = React.lazy(() => import("./markers"));
const CurrentLocation = React.lazy(() => import("./currentLocation"));

const Leaflet = () => {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/basic`} component={BasicMap} />
            <Route path={`${path}/markers`} component={MarkersMap} />
            <Route path={`${path}/user-location`} component={CurrentLocation} />
        </Switch>
    );
};

export default Leaflet;
