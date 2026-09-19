import { AiFillDollarCircle } from "react-icons/ai";
import Logo from "../assets/logo.png";

interface NavBarProps {
  coins?: number;
}

const NavBar = ({ coins = 500 }: NavBarProps) => {
  return (
    <nav className="border-b border-base-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <img src={Logo} alt="BPL Dream11 logo" className="h-12 w-auto" />

        <ul className="flex gap-4 items-center text-sm font-medium text-gray-700">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>

        <h2 className="font-semibold text-3xl text-black flex items-center gap-2">
          <AiFillDollarCircle className="text-amber-500" />
          {coins}
        </h2>
      </div>
    </nav>
  );
};

export default NavBar;
