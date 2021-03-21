import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import reducers from "reducers";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Sentry error tracking
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn:
      "https://6d740d803d2a4a07a51cfbaaa93e3d3a@o456774.ingest.sentry.io/5571933",
    autoSessionTracking: true,
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });
}

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
