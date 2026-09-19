import { FaUser } from "react-icons/fa";
import type { PlayersType } from "../../types/PlayersType";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({players}) => {
  console.log(players, "Available player");

  return (
    <div className="grid grid-cols-3 gap-4">
      {players.map((player:PlayersType, ind:number) => {
        return (

          <PlayerCard key={player.ind} player= {player}></PlayerCard>
         
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
