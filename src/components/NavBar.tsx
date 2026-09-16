import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-between  ">
        <img src={Logo} alt="" />

        <ul className="flex gap-4 items-center  ">
          <li>home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
