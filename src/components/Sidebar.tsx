import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-[#3c3836] text-[#ebdbb2] p-4 flex flex-col justify-between h-full w-full">
      <div>
        <h1 className="text-xl font-bold mb-4 text-[#fabd2f]">Ocean Hotel</h1>
        <p className="text-sm">Open • 8am – 12am</p>
        <p className="text-sm text-[#b8bb26]">Available today</p>
        <p className="text-sm mt-2">⭐ 4.7 Overall</p>
        <div className="mt-4">
          <blockquote className="bg-[#504945] p-2 rounded text-sm mb-2">
            “Very nice location on the lake.”<br />
            <span className="italic text-[#a89984]">– Esvana</span>
          </blockquote>
          <blockquote className="bg-[#504945] p-2 rounded text-sm">
            “Room issue despite early booking.”<br />
            <span className="italic text-[#a89984]">– Paul</span>
          </blockquote>
        </div>
        <div className="mt-4">
          <h2 className="text-sm font-semibold mb-2">Services</h2>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-[#665c54] px-2 py-1 rounded text-xs">Wi-Fi</span>
            <span className="bg-[#665c54] px-2 py-1 rounded text-xs">TV</span>
            <span className="bg-[#665c54] px-2 py-1 rounded text-xs">Parking</span>
            <span className="bg-[#665c54] px-2 py-1 rounded text-xs">Gym</span>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="mt-6 flex flex-col items-center gap-3 text-[#ebdbb2]">
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
          href="https://example.com/larger-study" 
          rel="noopener noreferrer"
          className="text-xs text-[#a89984] hover:text-[#fabd2f] underline text-center"
        >
          This project is related to a larger study. To read more, click here.
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
