import { FaUser } from "react-icons/fa";
import type { PlayersType } from "../../types/PlayersType";

const PlayerCard = ({ player }: { player: PlayersType }) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      
      {/* Player Image */}
      <figure className="h-64 overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">

        {/* Player Name */}
        <h2 className="card-title text-xl font-bold">
          <FaUser className="text-primary" />
          {player.playerName}
        </h2>

        {/* Origin & Player Type */}
        <div className="flex justify-between items-center gap-4">
          <p className="font-semibold text-gray-600">
            {player.origin}
          </p>

          <span className="badge badge-primary badge-outline">
            {player.playerType}
          </span>
        </div>

        <div className="divider my-2"></div>

        {/* Rating / Playing Style */}
        <h3 className="font-bold text-lg">
          Rating
        </h3>

        <div className="flex justify-between items-center gap-4">
          <p className="text-sm font-medium text-gray-600">
            Bowling: {player.bowlingStyle}
          </p>

          <p className="text-sm font-medium text-gray-600">
            Batting: {player.batingStyle}
          </p>
        </div>

        {/* Price & Button */}
        <div className="card-actions justify-between items-center mt-4">
          <div>
            <p className="text-sm text-gray-500">
              Price
            </p>

            <h2 className="text-2xl font-bold text-primary">
              ${player.price}
            </h2>
          </div>

          <button className="btn btn-primary">
            Choose Player
          </button>
        </div>

      </div>
    </div>
  );
};

export default PlayerCard;