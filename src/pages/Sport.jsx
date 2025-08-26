import React, { useState } from "react";

const Sport = () => {
  const [isSession, setIsSession] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🏋️ Séances Musculation</h2>
      <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
        {!isSession ? (
          <button
            onClick={() => setIsSession(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            ▶️ Démarrer une séance
          </button>
        ) : (
          <div>
            <p>⏱️ Timer en cours (placeholder)</p>
            <p>💪 Entrée des charges & reps (placeholder)</p>
            <button
              onClick={() => setIsSession(false)}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
            >
              ⏹️ Terminer séance
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sport;
