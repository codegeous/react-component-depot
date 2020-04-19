import React, { Suspense } from "react";
import "./App.css";
import Layout from "pages/_layouts/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import routes from "routes";

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
                            <div>Home Page</div>
                        </Route>
                    </Suspense>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
