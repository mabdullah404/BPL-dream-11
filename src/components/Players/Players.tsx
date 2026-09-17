import { use } from "react";

import type { PlayersType } from "../../types/PlayersType";


interface PlayersProps {
  playersPromise: Promise<PlayersType[]>;
}


const Players = ({ playersPromise }: PlayersProps) => {

  // Promise resolve করে actual player data পাওয়া
  const players = use(playersPromise);

  console.log(players);

  return (
    <div>
      <h2>Players</h2>

      {/* {players.map((player) => (
        <div key={player.playerName}>
          <h3>{player.playerName}</h3>
          <p>{player.origin}</p>
          <p>{player.playerType}</p>
          <p>Price: {player.price}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Players;