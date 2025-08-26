import React, { useState, useEffect } from "react";

const exercisesList = [
  { id: 1, name: "Développé couché" },
  { id: 2, name: "Tractions (ou tirage vertical)" },
  { id: 3, name: "Rowing barre" },
  { id: 4, name: "Élévations latérales" },
  { id: 5, name: "Curl biceps barre" },
  { id: 6, name: "Extension triceps poulie" },
  { id: 7, name: "Presse à cuisses" },
];

export default function Muscu() {
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [exercises, setExercises] = useState(() => {
    const saved = localStorage.getItem("muscuData");
    return saved ? JSON.parse(saved) : exercisesList.map(e => ({ ...e, weight: "", reps: "" }));
  });

  // Gestion du timer
  useEffect(() => {
    if (started) {
      const id = setInterval(() => setTime(t => t + 1), 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [started]);

  // Sauvegarde auto
  useEffect(() => {
    localStorage.setItem("muscuData", JSON.stringify(exercises));
  }, [exercises]);

  const handleChange = (id, field, value) => {
    setExercises(prev =>
      prev.map(e => (e.id === id ? { ...e, [field]: value } : e))
    );
  };

  const resetSession = () => {
    setStarted(false);
    clearInterval(intervalId);
    setTime(0);
    setExercises(exercisesList.map(e => ({ ...e, weight: "", reps: "" })));
    localStorage.removeItem("muscuData");
  };

  // format du timer (hh:mm:ss)
  const formatTime = (t) => {
    const h = String(Math.floor(t / 3600)).padStart(2, "0");
    const m = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
    const s = String(t % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Séance Musculation</h1>

      {/* Timer */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-xl font-mono">{formatTime(time)}</span>
        {!started ? (
          <button
            onClick={() => setStarted(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-xl"
          >
            ▶ Démarrer
          </button>
        ) : (
          <button
            onClick={() => {
              setStarted(false);
              clearInterval(intervalId);
            }}
            className="px-4 py-2 bg-yellow-600 text-white rounded-xl"
          >
            ⏸ Pause
          </button>
        )}
        <button
          onClick={resetSession}
          className="px-4 py-2 bg-red-600 text-white rounded-xl"
        >
          🔄 Reset
        </button>
      </div>

      {/* Tableau des exercices */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 rounded-lg">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left">Exercice</th>
              <th className="px-4 py-2">Poids (kg)</th>
              <th className="px-4 py-2">Reps</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((ex) => (
              <tr key={ex.id} className="border-t border-gray-600">
                <td className="px-4 py-2">{ex.name}</td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={ex.weight}
                    onChange={(e) =>
                      handleChange(ex.id, "weight", e.target.value)
                    }
                    className="w-20 px-2 py-1 rounded bg-gray-100 dark:bg-gray-700"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={ex.reps}
                    onChange={(e) =>
                      handleChange(ex.id, "reps", e.target.value)
                    }
                    className="w-20 px-2 py-1 rounded bg-gray-100 dark:bg-gray-700"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
