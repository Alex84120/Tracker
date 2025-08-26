import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Suivi from "./pages/Suivi";
import Muscu from "./pages/Muscu";
import Nutrition from "./pages/Nutrition";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Contenu */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Suivi />} />
            <Route path="/muscu" element={<Muscu />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>

        {/* Menu bas */}
        <nav className="flex justify-around p-4 bg-gray-800 text-white">
          <Link to="/">Suivi</Link>
          <Link to="/muscu">Muscu</Link>
          <Link to="/nutrition">Nutrition</Link>
          <Link to="/settings">⚙️</Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
