import React from "react";
import { Map, Source, Layer } from "react-map-gl/maplibre";

interface ChildcareMapProps {
  viewState: any;
  setViewState: (viewState: any) => void;
  gtaBounds: [[number, number], [number, number]];
}

const ChildcareMap: React.FC<ChildcareMapProps> = ({ viewState, setViewState, gtaBounds }) => (
  <Map
    {...viewState}
    onMove={(evt) => setViewState(evt.viewState)}
    maxBounds={gtaBounds}
    mapStyle="https://tiles.openfreemap.org/styles/dark"
  >
    <Source id="childcare-locations" type="geojson" data="/data/childCareLocations.geojson">
      <Layer
        id="childcare-layer"
        type="circle"
        paint={{
          "circle-radius": 2,
          "circle-color": "#fabd2f",
          "circle-stroke-width": 1,
          "circle-stroke-color": "#282828",
        }}
      />
    </Source>
  </Map>
);

export default ChildcareMap;
