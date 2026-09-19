import { FaTrashAlt } from "react-icons/fa";
import type { PlayersType } from "../../types/PlayersType";

interface SelectedplayersProps {
  selectedPlayers: PlayersType[];
  onRemovePlayer: (player: PlayersType) => void;
}

const Selectedplayers = ({ selectedPlayers, onRemovePlayer }: SelectedplayersProps) => {
  if (selectedPlayers.length === 0) {
    return (
      <div className="flex min-h-40 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-slate-500 text-lg">
        No selected players yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {selectedPlayers.map((player, index) => (
        <div
          key={`${player.playerName}-${index}`}
          className="flex items-center justify-between border-b border-dashed border-slate-300 pb-4"
        >
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-md bg-slate-200 shadow-inner overflow-hidden">
              <img
                src={player.playerImg}
                alt={player.playerName}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">{player.playerName}</h2>
              <p className="text-xl text-slate-600">{player.batingStyle}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onRemovePlayer(player)}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-red-50 text-red-500 transition hover:bg-red-100"
            aria-label={`Remove ${player.playerName}`}
          >
            <FaTrashAlt className="text-xl" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Selectedplayers;