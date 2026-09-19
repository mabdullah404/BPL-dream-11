import { useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import AvailablePlayers from "./components/Players/AvailablePlayers";
import Selectedplayers from "./components/Players/Selectedplayers";

import type { PlayersType } from "./types/PlayersType";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [coins, setCoins] = useState(3000);
  const [players, setPlayers] = useState<PlayersType[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<PlayersType[]>([]);
  const [activeTab, setActiveTab] = useState<"available" | "selected">("available");

  useEffect(() => {
    const loadPlayers = async () => {
      const response = await fetch("/data.json");
      const data: PlayersType[] = await response.json();
      setPlayers(data);
    };

    void loadPlayers();
  }, []);

  const handleChoosePlayer = (player: PlayersType) => {
    if (selectedPlayers.some((selectedPlayer) => selectedPlayer.playerName === player.playerName)) {
      return;
    }

    if (coins < player.price) {
      toast.error("Not enough coins!");
      return;
    }

    setCoins((previousCoins) => previousCoins - player.price);
    setSelectedPlayers((previousPlayers) => [...previousPlayers, player]);
    toast.success(`${player.playerName} selected successfully!`);
  };

  const handleRemovePlayer = (player: PlayersType) => {
    setSelectedPlayers((previousPlayers) =>
      previousPlayers.filter(
        (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
      ),
    );
    setCoins((previousCoins) => previousCoins + player.price);
    toast.info(`${player.playerName} removed from selected list.`);
  };

  return (
    <>
      <NavBar coins={coins} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="border-2 border-blue-400 rounded-md p-4 bg-white shadow-sm">
          <div className="flex items-center justify-between gap-4 border-b border-dashed border-blue-300 pb-3 mb-6">
            <h1 className="text-3xl font-bold text-slate-800">
              {activeTab === "available" ? "Available Players" : "Selected Players"}
            </h1>

            <div className="flex items-center gap-0">
              <button
                type="button"
                onClick={() => setActiveTab("available")}
                className={`px-5 py-2 text-sm font-semibold border border-blue-400 transition ${
                  activeTab === "available"
                    ? "bg-yellow-300 text-slate-900 border-yellow-300"
                    : "bg-white text-slate-700"
                } rounded-l-md`}
              >
                Available
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("selected")}
                className={`px-5 py-2 text-sm font-semibold border border-blue-400 transition ${
                  activeTab === "selected"
                    ? "bg-yellow-300 text-slate-900 border-yellow-300"
                    : "bg-white text-slate-700"
                } rounded-r-md border-l-0`}
              >
                Selected ({selectedPlayers.length})
              </button>
            </div>
          </div>

          {activeTab === "available" ? (
            <AvailablePlayers
              players={players}
              selectedPlayers={selectedPlayers}
              onChoosePlayer={handleChoosePlayer}
            />
          ) : (
            <Selectedplayers
              selectedPlayers={selectedPlayers}
              onRemovePlayer={handleRemovePlayer}
            />
          )}
        </div>

        <ToastContainer />
      </main>
    </>
  );
};

export default App;