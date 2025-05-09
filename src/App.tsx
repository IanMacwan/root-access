// App.tsx
import React, { useState } from "react";
import Landing from "./components/Landing";
import MapApp from "./components/MapApp";
import { AnimatePresence, motion } from "framer-motion";

const App: React.FC = () => {
  const [showMap, setShowMap] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleExploreClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowMap(true);
      setIsTransitioning(false);
    }, 800); // duration of black fade in/out
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!showMap && !isTransitioning && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Landing onExploreClick={handleExploreClick} />
          </motion.div>
        )}

        {showMap && !isTransitioning && (
          <motion.div
            key="mapapp"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MapApp />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fade-to-black overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="fade"
            className="fixed inset-0 bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
