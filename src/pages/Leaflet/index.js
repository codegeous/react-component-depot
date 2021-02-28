import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./index.css";

const BasicMap = React.lazy(() => import("./basic"));
const MarkersMap = React.lazy(() => import("./markers"));
const CurrentLocation = React.lazy(() => import("./currentLocation"));
const DrawMap = React.lazy(() => import("./draw"));
const PolygonMap = React.lazy(() => import("./polygon"));
const StaticMap = React.lazy(() => import("./StaticMap"));
const PrintMap = React.lazy(() => import("./Print"));

const Leaflet = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/basic`} component={BasicMap} />
      <Route path={`${path}/markers`} component={MarkersMap} />
      <Route path={`${path}/user-location`} component={CurrentLocation} />
      <Route path={`${path}/draw-on-map`} component={DrawMap} />
      <Route path={`${path}/polygon`} component={PolygonMap} />
      <Route path={`${path}/static-map`} component={StaticMap} />
      <Route path={`${path}/print-map`} component={PrintMap} />
    </Switch>
  );
};

export default Leaflet;
