
import { FaUser } from 'react-icons/fa';
import type { PlayersType } from '../../types/PlayersType';

const PlayerCard = ({player}:{palyer:PlayersType}) => {
    return (
        <div>
             <div className="">
            <div className="card bg-base-100 shadow-sm">
              <figure>
                <img src={player.playerImg} alt="Shoes" />
              </figure>
              <div className="card-body space-y-3">
                
                <h2 className="card-title "><FaUser/> {player.playerName}</h2>
                <div className="flex justify-between gap-4">
                  <p className="font-semibold ">{player.origin}</p>
                  <button className="btn">{player.playerType}</button>
                </div>
                 <div className="divider" />

                 <h3 className="font-bold text-2xl">Reating </h3>
                 <div className="flex justify-between gap-4">
                  <p className="font-semibold ">{player.bowlingStyle}</p>
                  <button className="btn">{player.batingStyle}</button>
                </div>

                <div className="card-actions flex justify-between items-center">
                  <h2 className="font-bold text-2xl">${player.price}</h2>
                  <button className="btn btn-primary">Choose player</button>
                </div>
              </div>
            </div>
        </div>
        </div>
    );
};

export default PlayerCard;