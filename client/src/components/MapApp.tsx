import React, { useState } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import ChildcareMap from "./ChildcareMap";
import type { ViewState } from "react-map-gl/maplibre";

const gtaBounds: [[number, number], [number, number]] = [
  [-80.0, 43.0],
  [-78.0, 44.0],
];

const MapApp: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>({
    latitude: 43.65107,
    longitude: -79.347015,
    zoom: 13,
    bearing: 0,
    pitch: 0,
    padding: { top: 0, bottom: 0, left: 0, right: 0 },
  });

  const [searchArea, setSearchArea] = useState<[number, number] | null>(null);


  const handleSearch = async (postalCode: string) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?postalcode=${postalCode}&country=Canada&format=json`
    );
    const results = await response.json();

    if (results.length > 0) {
      const lat = parseFloat(results[0].lat);
      const lon = parseFloat(results[0].lon);

      if (!isNaN(lat) && !isNaN(lon)) {
        const coords: [number, number] = [lon, lat];
        setViewState((prev) => ({
          ...prev,
          latitude: lat,
          longitude: lon,
          zoom: 13,
        }));
        setSearchArea(coords);
      } else {
        console.error("Invalid coordinates received from API:", results[0]);
      }
    } else {
      console.warn("Location not found or API limit reached.");
    }
  };

  return (
    <div className="h-screen w-screen grid grid-cols-[360px_1fr] bg-[#282828]">
      <Sidebar />
      <div className="flex flex-col h-full">
        <TopBar onSearch={handleSearch} />
        <main className=" bg-[#3c3836] flex-1 relative overflow-hidden p-2">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
            <ChildcareMap
              viewState={viewState}
              setViewState={setViewState}
              gtaBounds={gtaBounds}
              searchArea={searchArea}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MapApp;
