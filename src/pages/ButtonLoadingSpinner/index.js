import React, { useState } from "react";
import Header from "components/Header";
import useButtonLoader from "hooks/useButtonLoader";
import ExternalInfo from "components/ExternalInfo";
import AppConfig from "App.config";
import useFullPageLoader from "hooks/useFullPageLoader";

const ButtonLoadingSpinner = () => {
  //Method 1
  const [isLoading, setLoading] = useState(false);

  //Method 2
  const [subscribeButtonElement, setSubscribeLoading] = useButtonLoader(
    "Subscribe 2",
    "Subscribing 2..."
  );
  const [subscribe3ButtonElement, setSubscribe3Loading] = useButtonLoader(
    "Subscribe 3",
    "Subscribing 3..."
  );

  const [loader, showLoader, hideLoader] = useFullPageLoader();

  const subscribe = () => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setLoading(false);
      });
  };

  const subscribe2 = () => {
    setSubscribeLoading(true);

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setSubscribeLoading(false);
      });
  };

  const subscribe3 = () => {
    setSubscribe3Loading(true);

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setSubscribe3Loading(false);
      });
  };

  const fetchData = () => {
    showLoader();

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        hideLoader();
        console.log(json);
      });
  };

  const throwKnownError = () => {
    throw new Error("This is an error from sentry tutorial");
  };

  const pushData = () => {
    if (typeof window !== 'undefined' && typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({
        page: 'Button Loading',
        action: 'click',
        actionLabel: 'Testing GTM Without Reset'
      });
    }
  }

  const pushDataWithReset = () => {
    if (typeof window !== 'undefined' && typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({
        page: 'Button Loading Reset',
        action: 'click',
        actionLabel: 'Testing GTM With Reset',
        eventCallback: function(){
          console.log("EVENT CALLBACK TRIGGERED");
          window.dataLayer.push(function(){
            this.reset();
          });
        },
        eventTimeout: 2000
      });
      /* window.dataLayer.push(function(){
        console.log("RESET CALLBACK TRIGGERED")
        this.reset();
      }); */
    }
  }

  return (
    <>
      <Header title="Loading spinners (Hooks API)" />

      <div className="row w-100">
        <div className="col text-center">
          <h2>Button Loading spinners</h2>
          <ExternalInfo
            code={AppConfig.links.buttonLoaderHooks.code}
            tutorial={AppConfig.links.buttonLoaderHooks.tutorial}
          />
          <p>Click the subscribe button below to see the loading effect</p>

          <p>
            {!isLoading && (
              <button className="btn btn-danger mr-2" onClick={subscribe}>
                Subscribe
              </button>
            )}
            {isLoading && (
              <button className="btn btn-danger mr-2" disabled>
                <i className="fas fa-spinner fa-spin"></i> Subscribing...
              </button>
            )}
          </p>

          <p>
            <button
              className="btn btn-danger mr-2"
              onClick={subscribe2}
              ref={subscribeButtonElement}
            >
              Subscribe 2
            </button>
            <button
              className="btn btn-danger mr-2"
              onClick={subscribe3}
              ref={subscribe3ButtonElement}
            >
              Subscribe 3
            </button>
          </p>
        </div>
      </div>
      <hr />
      <div className="row w-100 mt-5">
        <div className="col text-center">
          <h2>Full Page Loading Spinners</h2>
          <p>
            Click the subscribe button below to see the full page loader in
            action
          </p>

          <p>
            <button className="btn btn-primary mr-2" onClick={fetchData}>
              Show full page loading spinner
            </button>
          </p>
        </div>
      </div>

      <div className="row w-100 mt-5">
        <div className="col text-center">
          <h2>Catch uncaught error using sentry.io</h2>
          <p>
            Click the button below to see this error captured in sentry.io
            dashboard
          </p>

          <p>
            <button className="btn btn-primary mr-2" onClick={throwKnownError}>
              Broken Button
            </button>
          </p>
        </div>
      </div>

      <div className="row w-100 mt-5">
        <div className="col text-center">
          <h2>Google GTM Tracking</h2>
          <p>
            
          </p>

          <p>
            <button className="btn btn-primary mr-2" onClick={pushData}>
              Send Data To GTM
            </button>
            <button className="btn btn-primary mr-2" onClick={pushDataWithReset}>
              Send Data To GTM With Reset
            </button>
          </p>
        </div>
      </div>
      {loader}
    </>
  );
};

export default ButtonLoadingSpinner;
