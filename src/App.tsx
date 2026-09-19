import { Suspense, useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import AvailablePlayers from "./components/Players/AvailablePlayers";

import type { PlayersType } from "./types/PlayersType";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [coins, setCoins] = useState(3000);
  const [players, setPlayers] = useState<PlayersType[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<PlayersType[]>([]);

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

  return (
    <>
      <NavBar coins={coins} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Suspense fallback={<p>Loading players...</p>}>
          <AvailablePlayers
            players={players}
            selectedPlayers={selectedPlayers}
            onChoosePlayer={handleChoosePlayer}
          />
          <ToastContainer />
        </Suspense>
      </main>
    </>
  );
};

export default App;