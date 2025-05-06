import { Map, Source, Layer } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import React, { useState } from "react";
import { Search, Star } from "lucide-react";

const MapApp: React.FC = () => {

  const [showMap, setShowMap] = useState(false);

  const gtaBounds: [[number, number], [number, number]] = [
    [-80.1, 43.3], // Southwest corner (near Halton/Peel border)
    [-78.5, 44.0], // Northeast corner (near Durham/York border)
  ];


  const [viewState, setViewState] = React.useState({
    longitude: -79.3832,
    latitude: 43.6532,
    zoom: 14
  });
  
  return (
    <div className="min-h-screen bg-[#282828] text-[#ebdbb2] font-sans overflow-x-hidden">
      {/* Landing Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1d2021] to-[#3c3836] text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-[#fabd2f] mb-4">🌱 RootAccess</h1>
        <p className="text-lg md:text-xl text-[#d5c4a1] max-w-2xl">
        A web-based mapping tool that visualizes disparities in access to child care services for immigrant families across the Greater Toronto Area.
        </p>
        <button
          className="mt-10 px-6 py-3 bg-[#458588] hover:bg-[#83a598] text-[#ebdbb2] rounded-full text-lg font-semibold"
          onClick={() => setShowMap(true)}
        >
          Explore Now
        </button>
      </section>

      {/* Map Interface */}
      {showMap && (
        <div className="h-screen w-screen grid grid-cols-[360px_1fr] bg-[#282828]">
          {/* Sidebar */}
          <aside className="bg-[#3c3836] border-r border-[#504945] shadow-lg p-6 flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center gap-4">
              <img
                src="https://picsum.photos/id/237/200/300"
                alt="Place"
                className="rounded-xl w-16 h-16 object-cover border border-[#504945]"
              />
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-[#fabd2f]">Ocean Hotel</h2>
                <p className="text-sm text-[#bdae93]">Open • 8am - 12am</p>
                <p className="text-sm text-[#b8bb26]">Available today</p>
              </div>
            </div>

            {/* Reviews */}
            <div className="text-sm space-y-4">
              <div className="flex items-center text-[#b8bb26] gap-2">
                <Star className="w-4 h-4 fill-[#b8bb26]" />
                <span className="font-medium">4.7 Overall</span>
              </div>
              <div className="bg-[#504945] p-3 rounded-md">
                <p className="text-[#ebdbb2]">
                  “Very nice location on the lake.”
                </p>
                <p className="text-[#83a598] italic text-xs">— Eslvana</p>
              </div>
              <div className="bg-[#504945] p-3 rounded-md">
                <p className="text-[#ebdbb2]">
                  “Room issue despite early booking.”
                </p>
                <p className="text-[#83a598] italic text-xs">— Paul</p>
              </div>
            </div>

            {/* Services */}
            <div className="mt-auto">
              <h3 className="text-[#d5c4a1] text-sm font-semibold mb-2">Services</h3>
              <div className="grid grid-cols-4 gap-2 text-xs text-center">
                {["Wi-Fi", "TV", "Parking", "Gym"].map((service) => (
                  <div key={service} className="bg-[#504945] text-[#ebdbb2] py-2 rounded-md">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex flex-col h-full">
            {/* Top Bar */}
            <header className="bg-[#3c3836] p-4 shadow-md z-10 flex items-center gap-3">
              <input
                type="text"
                placeholder="Search hotels, places, services..."
                className="flex-1 px-4 py-2 rounded-xl bg-[#1d2021] text-[#ebdbb2] placeholder-[#a89984] border border-[#504945] focus:outline-none focus:ring-2 focus:ring-[#b8bb26]"
              />
              <button className="px-4 py-2 rounded-xl bg-[#458588] hover:bg-[#83a598] text-[#ebdbb2] flex items-center gap-2">
                <Search className="w-4 h-4" /> Search
              </button>
            </header>

            {/* Map Placeholder */}
            <main className="flex-1 bg-[#1d2021] flex items-center justify-center relative rounded-tl-xl overflow-hidden">
              <div className="absolute inset-0 bg-[#282828] flex items-center justify-center">
                {/* <div className="bg-[#3c3836] px-6 py-3 rounded-xl shadow-xl text-[#a89984] text-lg border border-[#504945]">
                  Map Placeholder
                </div> */}
                <Map
                  {...viewState}
                  onMove={evt => setViewState(evt.viewState)}
                  maxBounds={gtaBounds}
                  mapStyle="https://tiles.openfreemap.org/styles/liberty"
                >
                  <Source
                    id="childcare-locations"
                    type="geojson"
                    data="/data/childCareLocations.geojson" // or use inline GeoJSON object
                  >
                    <Layer
                      id="childcare-layer"
                      type="circle"
                      paint={{
                        'circle-radius': 6,
                        'circle-color': '#fabd2f',
                        'circle-stroke-width': 1,
                        'circle-stroke-color': '#282828'
                      }}
                    />
                  </Source>
                </Map>
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                <button className="w-10 h-10 rounded-full bg-[#458588] hover:bg-[#83a598] text-[#ebdbb2] text-xl font-bold">+</button>
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#504945] text-[#ebdbb2] font-bold">N</div>
                <button className="w-10 h-10 rounded-full bg-[#458588] hover:bg-[#83a598] text-[#ebdbb2] text-xl font-bold">-</button>
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapApp;
