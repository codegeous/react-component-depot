import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const BasicMap = React.lazy(() => import("./Basic"));
const CustomStyledMap = React.lazy(() => import("./CustomStyle"));

const GoogleMaps = () => {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/custom-style`} component={CustomStyledMap} />
            <Route path={`${path}`} component={BasicMap} exact />
        </Switch>
    );
};

export default GoogleMaps;
