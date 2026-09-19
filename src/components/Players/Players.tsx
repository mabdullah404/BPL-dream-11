import { use } from "react";

import type { PlayersType } from "../../types/PlayersType";
import AvailablePlayers from "./AvailablePlayers";


interface PlayersProps {
  playersPromise: Promise<PlayersType[]>;
}


const Players = ({ playersPromise }: PlayersProps) => {

  // Promise resolve করে actual player data পাওয়া
  const players = use(playersPromise);

  console.log(players);

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8"> 

       <div className="flex justify-between my-6">
        <h1 className="font-bold text-2xl">Available Players</h1>


        <div className="flex justify-between ">

        <button className="btn btn-success">Available</button>
        <button className="btn">Selected</button>

        </div>       
       </div>



      <AvailablePlayers players= {players}></AvailablePlayers>
    </div>
  );
};

export default Players;