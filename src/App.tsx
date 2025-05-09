import React, { useState } from "react";
import 'maplibre-gl/dist/maplibre-gl.css';

import Landing from "./components/Landing";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import ChildcareMap from "./components/ChildcareMap";

const MapApp: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  const gtaBounds: [[number, number], [number, number]] = [
    [-80.1, 43.3],
    [-78.5, 44.0],
  ];

  const [viewState, setViewState] = useState({
    longitude: -79.3832,
    latitude: 43.6532,
    zoom: 14,
  });

  return (
    <div className="min-h-screen bg-[#282828] text-[#ebdbb2] font-sans overflow-x-hidden">
      {!showMap ? (
        <Landing onExploreClick={() => setShowMap(true)} />
      ) : (
        <div className="h-screen w-screen grid grid-cols-[360px_1fr] bg-[#282828]">
          <Sidebar />
          <div className="flex flex-col h-full">
            <TopBar />
            <main className="flex-1 bg-[#1d2021] flex items-center justify-center relative rounded-tl-xl overflow-hidden">
              <div className="absolute inset-0 bg-[#282828]">
                <ChildcareMap
                  viewState={viewState}
                  setViewState={setViewState}
                  gtaBounds={gtaBounds}
                />
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapApp;
