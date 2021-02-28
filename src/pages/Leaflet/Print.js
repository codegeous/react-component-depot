import React, { useState } from "react";
import Header from "components/Header";

import { Map, TileLayer, FeatureGroup, withLeaflet } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import PrintControlDefault from "react-leaflet-easyprint";
import ExternalInfo from "components/ExternalInfo";
const PrintControl = withLeaflet(PrintControlDefault);

const PrintMap = () => {
  const [center, setCenter] = useState({ lat: 24.4539, lng: 54.3773 });
  const [mapLayers, setMapLayers] = useState([]);

  const ZOOM_LEVEL = 12;
  const mapRef = useRef();
  const printControlRef = useRef();

  const _onCreate = (e) => {
    console.log(e);

    const { layerType, layer } = e;
    if (layerType === "polygon") {
      const { _leaflet_id } = layer;

      setMapLayers((layers) => [
        ...layers,
        { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
      ]);
    }
  };

  const _onEdited = (e) => {
    console.log(e);
    const {
      layers: { _layers },
    } = e;

    Object.values(_layers).map(({ _leaflet_id, editing }) => {
      setMapLayers((layers) =>
        layers.map((l) =>
          l.id === _leaflet_id
            ? { ...l, latlngs: { ...editing.latlngs[0] } }
            : l
        )
      );
    });
  };

  const _onDeleted = (e) => {
    console.log(e);
    const {
      layers: { _layers },
    } = e;

    Object.values(_layers).map(({ _leaflet_id }) => {
      setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
    });
  };

  return (
    <>
      <Header title="React Leaflet - Print" />

      <ExternalInfo page="leafletPrint" />

      <div className="row">
        <div className="col text-center">
          <h2>React-leaflet - Print/Download leaflet map</h2>

          <div className="col">
            <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
              <FeatureGroup>
                <EditControl
                  position="topright"
                  onCreated={_onCreate}
                  onEdited={_onEdited}
                  onDeleted={_onDeleted}
                  draw={{
                    rectangle: false,
                    polyline: false,
                    circle: false,
                    circlemarker: false,
                    marker: false,
                  }}
                />
              </FeatureGroup>

              <TileLayer
                url={osm.maptiler.url}
                attribution={osm.maptiler.attribution}
              />

              <PrintControl
                ref={printControlRef}
                position="topleft"
                sizeModes={["Current", "A4Portrait", "A4Landscape"]}
                hideControlContainer={false}
              />
              <PrintControl
                position="topleft"
                sizeModes={["Current", "A4Portrait", "A4Landscape"]}
                hideControlContainer={false}
                title="Export as PNG"
                exportOnly
              />
            </Map>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintMap;
