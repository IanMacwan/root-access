// TopBar.tsx
import React, { useState } from "react";
import { Search } from "lucide-react";

interface TopBarProps {
  onSearch: (postalCode: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <header className="bg-[#3c3836] p-4 z-10 flex items-center gap-3">
      <input
        type="text"
        placeholder="Enter GTA postal code..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-2 rounded-xl bg-[#1d2021] text-[#ebdbb2] placeholder-[#a89984] border border-[#504945] focus:outline-none focus:ring-2 focus:ring-[#b8bb26]"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 rounded-xl bg-[#458588] hover:bg-[#83a598] text-[#ebdbb2] flex items-center gap-2"
      >
        <Search className="w-4 h-4" /> Search
      </button>
    </header>
  );
};

export default TopBar;
