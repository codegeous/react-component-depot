import React, { Suspense } from "react";
import "./App.css";
import Layout from "pages/_layouts/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "routes";
import PageNotFound from "pages/PageNotFound";
import BuiltWithReact from "pages/BuiltWithReact";
import Home from "pages/Home";

function App() {
    return (
        <Router>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {routes.map(route => (
                            <Route
                                path={route.path}
                                component={route.component}
                                key={route.path}
                            />
                        ))}

                        <Route path="/built-with-react">
                            <BuiltWithReact />
                        </Route>

                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route>
                            <PageNotFound />
                        </Route>
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
}

export default App;
