// import React from "react";
// import { Github, Linkedin, Mail } from "lucide-react";

// const Sidebar: React.FC = () => {
//   return (
//     <aside className="bg-[#3c3836] text-[#ebdbb2] p-4 flex flex-col justify-between h-full w-full">
//       <div>
//         <h1 className="text-xl font-bold mb-4 text-[#fabd2f]">Ocean Hotel</h1>
//         <p className="text-sm">Open • 8am – 12am</p>
//         <p className="text-sm text-[#b8bb26]">Available today</p>
//         <p className="text-sm mt-2">⭐ 4.7 Overall</p>
//         <div className="mt-4">
//           <blockquote className="bg-[#504945] p-2 rounded text-sm mb-2">
//             “Very nice location on the lake.”<br />
//             <span className="italic text-[#a89984]">– Esvana</span>
//           </blockquote>
//           <blockquote className="bg-[#504945] p-2 rounded text-sm">
//             “Room issue despite early booking.”<br />
//             <span className="italic text-[#a89984]">– Paul</span>
//           </blockquote>
//         </div>
//         <div className="mt-4">
//           <h2 className="text-sm font-semibold mb-2">Services</h2>
//           <div className="flex gap-2 flex-wrap">
//             <span className="bg-[#665c54] px-2 py-1 rounded text-xs">Wi-Fi</span>
//             <span className="bg-[#665c54] px-2 py-1 rounded text-xs">TV</span>
//             <span className="bg-[#665c54] px-2 py-1 rounded text-xs">Parking</span>
//             <span className="bg-[#665c54] px-2 py-1 rounded text-xs">Gym</span>
//           </div>
//         </div>
//       </div>

//       {/* Footer section */}
//       <div className="mt-6 flex flex-col items-center gap-3 text-[#ebdbb2]">
//         <div className="flex gap-4">
//           <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
//             <Github className="w-5 h-5 hover:text-[#fabd2f]" />
//           </a>
//           <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
//             <Linkedin className="w-5 h-5 hover:text-[#fabd2f]" />
//           </a>
//           <a href="mailto:youremail@example.com">
//             <Mail className="w-5 h-5 hover:text-[#fabd2f]" />
//           </a>
//         </div>

//         <a
//           href="https://github.com/IanMacwan/mapping-exclusion-research-data" 
//           rel="noopener noreferrer"
//           className="text-xs text-[#a89984] hover:text-[#fabd2f] underline text-center"
//         >
//           This project is related to a larger study. To read more, click here.
//         </a>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-[#3c3836] text-[#ebdbb2] p-6 flex flex-col justify-between h-full w-full space-y-6">
      {/* Title & Description Box */}
      <div className="bg-[#504945] p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-2 text-[#fabd2f] flex items-center gap-2">
          🌱 RootAccess
        </h1>
        <p className="text-sm">
          Visualizes childcare facilities for any given postal code in the Greater Toronto Area.
        </p>
      </div>

      {/* Legend Box */}
      <div className="bg-[#504945] p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-[#fabd2f]">📍 Legend</h2>
        <ul className="text-sm">
          <li>
            <span className="inline-block w-3 h-3 bg-[#fabd2f] rounded-full mr-2"></span>
            Child Care Centres
          </li>
          <li>
            <span className="inline-block w-3 h-3 bg-[#79740e] rounded-full mr-2"></span>
            1 km Radius around Postal Code
          </li>
        </ul>
      </div>

      {/* Instructions Box */}
      <div className="bg-[#504945] p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-[#fabd2f]">📍 Instructions</h2>
        <p className="text-sm">
          To explore childcare centres in any given postal code in the Greater Toronto Area, simply input a postal code in the search bar. The map will center around that postal code and display available centres within the surrounding area.
        </p>
      </div>

      {/* Controls Box */}
      <div className="bg-[#504945] p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-[#fabd2f]">🖱️ Map Controls</h2>
        <ul className="text-sm">
          <li>Click and drag to pan around the map.</li>
          <li>Hold <strong>Ctrl</strong> and drag to rotate the map.</li>
          <li>Hold <strong>Ctrl</strong> and drag up/down to tilt the map.</li>
          <li>Use the scroll wheel or pinch to zoom in and out.</li>
        </ul>
      </div>

      {/* Footer Box */}
      <div className="bg-[#3c3836] p-4 rounded-lg shadow-lg">
        <div className="flex flex-col items-center gap-3 text-[#ebdbb2]">
          <div className="flex gap-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-[#fabd2f]" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-[#fabd2f]" />
            </a>
            <a href="mailto:youremail@example.com">
              <Mail className="w-5 h-5 hover:text-[#fabd2f]" />
            </a>
          </div>

          <a
            href="https://github.com/IanMacwan/mapping-exclusion-research-data" 
            rel="noopener noreferrer"
            className="text-xs text-[#a89984] hover:text-[#fabd2f] underline text-center mt-4"
          >
            This project is related to a larger study. To read more, click here.
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

