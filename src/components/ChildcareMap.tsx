// components/ChildcareMap.tsx
import React from "react";
import { Map, Source, Layer } from "react-map-gl/maplibre";
import { circle } from "@turf/circle";
import type { ViewState } from "react-map-gl/maplibre";

interface ChildcareMapProps {
  viewState: ViewState;
  setViewState: (viewState: ViewState) => void;
  gtaBounds: [[number, number], [number, number]];
  searchArea: [number, number] | null;
}

const options = { steps: 64, properties: { foo: "bar" } };

const ChildcareMap: React.FC<ChildcareMapProps> = ({
  viewState,
  setViewState,
  gtaBounds,
  searchArea,
}) => {
  const areaGeoJSON =
    searchArea && circle([searchArea[0], searchArea[1]], 1, options);

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      maxBounds={gtaBounds}
      mapStyle="https://tiles.openfreemap.org/styles/dark"
      style={{ width: "100%", height: "100%" }}
    >
      <Source
        id="childcare-locations"
        type="geojson"
        data="/data/childCareLocations.geojson"
      >
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

      {searchArea && areaGeoJSON && (
        <Source id="search-area" type="geojson" data={areaGeoJSON}>
          <Layer
            id="highlight-circle"
            type="fill"
            paint={{
              "fill-color": "#79740e",
              "fill-opacity": 0.2,
              "fill-outline-color": "yellow",
            }}
          />
        </Source>
      )}
    </Map>
  );
};

export default ChildcareMap;
