import React from "react";

interface LandingProps {
  onExploreClick: () => void;
}

const Landing: React.FC<LandingProps> = ({ onExploreClick }) => (
  <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1d2021] to-[#3c3836] text-center px-6">
    <h1 className="text-5xl md:text-6xl font-bold text-[#fabd2f] mb-4">🌱 RootAccess</h1>
    <p className="text-lg md:text-xl text-[#d5c4a1] max-w-2xl">
      A web-based mapping tool that visualizes disparities in access to child care services in the Greater Toronto Area.
    </p>
    <button
      className="mt-10 px-6 py-3 bg-[#458588] hover:bg-[#83a598] text-[#ebdbb2] rounded-full text-lg font-semibold"
      onClick={onExploreClick}
    >
      Explore Now
    </button>
  </section>
);

export default Landing;
