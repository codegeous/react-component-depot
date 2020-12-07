import React from "react";
import Header from "components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ExternalInfo from "components/ExternalInfo";
const IMAGES = [
  "https://source.unsplash.com/WLUHO9A_xik/1600x900",
  "https://source.unsplash.com/dpbXgTh0Lac/1600x900",
];

const ImageZoom = () => {
  return (
    <>
      <Header title="Zoomable image controller" />

      <ExternalInfo page="imageZoom" />

      <div className="row">
        <div className="col text-center">
          <h2>Zoomable Image</h2>
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-center text-dark">
                <TransformWrapper
                  defaultScale={1}
                  defaultPositionX={1}
                  defaultPositionY={1}
                >
                  <TransformComponent>
                    <img src={IMAGES[0]} style={{ width: "100%" }} />
                  </TransformComponent>
                </TransformWrapper>
              </div>
            </div>
          </p>

          <p className="mt-5">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-12 text-center text-dark">
                <h2>Zoomable image with custom controls</h2>
              </div>
              <div className="col-lg-8 text-center text-dark">
                <TransformWrapper
                  defaultScale={1}
                  defaultPositionX={1}
                  defaultPositionY={1}
                >
                  {({ zoomIn, zoomOut, ...rest }) => (
                    <>
                      <div className="col-lg-12 text-center mb-3">
                        <button
                          className="btn btn-outline-primary mr-2"
                          onClick={zoomIn}
                        >
                          <FontAwesomeIcon icon="plus" /> Zoom In
                        </button>
                        <button
                          className="btn btn-outline-secondary"
                          onClick={zoomOut}
                        >
                          <FontAwesomeIcon icon="minus" /> Zoom Out
                        </button>
                      </div>
                      <TransformComponent>
                        <img src={IMAGES[1]} style={{ width: "100%" }} />
                      </TransformComponent>
                    </>
                  )}
                </TransformWrapper>
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default ImageZoom;
