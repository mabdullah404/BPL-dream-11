import type { PlayersType } from "../../types/PlayersType";
import PlayerCard from "./PlayerCard";

interface AvailablePlayersProps {
  players: PlayersType[];
}

const AvailablePlayers = ({ players }: AvailablePlayersProps) => {
  console.log(players, "Available players");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((player, index) => (
        <PlayerCard key={index} player={player} />
      ))}
    </div>
  );
};

export default AvailablePlayers;