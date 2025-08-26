import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Suivi from "./pages/Suivi";
import Sport from "./pages/Sport";
import Nutrition from "./pages/Nutrition";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Suivi />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
