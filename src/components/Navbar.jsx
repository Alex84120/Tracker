import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Dumbbell, Utensils, Settings as SettingsIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 flex justify-around py-2">
      <NavLink to="/" className="flex flex-col items-center">
        <Home size={20} />
        <span className="text-xs">Suivi</span>
      </NavLink>
      <NavLink to="/sport" className="flex flex-col items-center">
        <Dumbbell size={20} />
        <span className="text-xs">Sport</span>
      </NavLink>
      <NavLink to="/nutrition" className="flex flex-col items-center">
        <Utensils size={20} />
        <span className="text-xs">Nutrition</span>
      </NavLink>
      <NavLink to="/settings" className="flex flex-col items-center">
        <SettingsIcon size={20} />
        <span className="text-xs">Paramètres</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
