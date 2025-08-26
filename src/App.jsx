import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Suivi from "./pages/Suivi";
import Sport from "./pages/Sport";
import Nutrition from "./pages/Nutrition";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="bg-gray-200 dark:bg-gray-800 p-4 shadow-md">
          <h1 className="text-2xl font-bold text-center">🏋️ Tracker</h1>
        </header>

        {/* Main content */}
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Suivi />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

        {/* Bottom Navigation */}
        <nav className="bg-gray-200 dark:bg-gray-800 p-2 flex justify-around border-t dark:border-gray-700">
          <Link to="/" className="flex flex-col items-center text-sm">
            📊 <span>Suivi</span>
          </Link>
          <Link to="/sport" className="flex flex-col items-center text-sm">
            🏋️ <span>Sport</span>
          </Link>
          <Link to="/nutrition" className="flex flex-col items-center text-sm">
            🍽️ <span>Nutrition</span>
          </Link>
          <Link to="/settings" className="flex flex-col items-center text-sm">
            ⚙️ <span>Paramètres</span>
          </Link>
        </nav>
      </div>
    </Router>
  );
};

export default App;
