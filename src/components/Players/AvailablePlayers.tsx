import type { PlayersType } from "../../types/PlayersType";
import PlayerCard from "./PlayerCard";

interface AvailablePlayersProps {
  players: PlayersType[];
  selectedPlayers: PlayersType[];
  onChoosePlayer: (player: PlayersType) => void;
}

const AvailablePlayers = ({
  players,
  selectedPlayers,
  onChoosePlayer,
}: AvailablePlayersProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((player, index) => (
        <PlayerCard
          key={`${player.playerName}-${index}`}
          player={player}
          isSelected={selectedPlayers.some(
            (selectedPlayer) => selectedPlayer.playerName === player.playerName,
          )}
          onChoosePlayer={onChoosePlayer}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;