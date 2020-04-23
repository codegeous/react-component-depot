import React, { Suspense } from "react";
import "./App.css";
import Layout from "pages/_layouts/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "routes";
import Home from "pages/Home";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Suspense fallback={<div>Loading...</div>}>
                        {routes.map(route => (
                            <Route
                                path={route.path}
                                component={route.component}
                                key={route.path}
                            />
                        ))}

                        <Route path="/" exact>
                            <Home />
                        </Route>
                    </Suspense>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
