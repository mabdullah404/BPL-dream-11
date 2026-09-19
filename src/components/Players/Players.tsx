import { use, useState } from "react";

import type { PlayersType } from "../../types/PlayersType";
import AvailablePlayers from "./AvailablePlayers";
import Selectedplayers from "./Selectedplayers";


interface PlayersProps {
  playersPromise: Promise<PlayersType[]>;
}


const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise);
  const [buttonType, setButtontype] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState<PlayersType[]>([]);

  const handleUpdateBtnType = (type: "available" | "selected") => {
    setButtontype(type);
  };

  const handleChoosePlayer = (player: PlayersType) => {
    setSelectedPlayers((previous) => {
      if (previous.some((selectedPlayer) => selectedPlayer.playerName === player.playerName)) {
        return previous;
      }
      return [...previous, player];
    });
  };

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="flex justify-between my-6">
        <h1 className="font-bold text-2xl">{buttonType === "available" ? "Available Players" : "Selected Players"}</h1>

        <div className="flex justify-between">
          <button onClick={() => handleUpdateBtnType("available")} className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}>
            Available
          </button>
          <button onClick={() => handleUpdateBtnType("selected")} className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}>
            Selected
          </button>
        </div>
      </div>

      {buttonType === "available" ? (
        <AvailablePlayers
          players={players}
          selectedPlayers={selectedPlayers}
          onChoosePlayer={handleChoosePlayer}
        />
      ) : (
        <Selectedplayers />
      )}
    </div>
  );
};

export default Players;