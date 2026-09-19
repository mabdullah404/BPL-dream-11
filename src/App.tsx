import { Suspense } from "react";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Players from "./components/Players/Players";

import type { PlayersType } from "./types/PlayersType";
import User from "./components/User/User";
import type { UserType } from "./types/UserType";


// API / JSON থেকে player data আনার function
const playerFetch = async (): Promise<PlayersType[]> => {
  const res = await fetch("/data.json");

  const data: PlayersType[] = await res.json();

  return data;
};

const userFetch = async():Promise<UserType[]> =>{
  const res = await fetch('./user.json')
  const data = await res.json();
  return data ;
}


function App() {

  // এখানে function call করলে একটি Promise পাওয়া যাবে
  const playersPromise = playerFetch();


  const userPromise = userFetch() ;


  return (
    <>
      <NavBar />

      <Banner />

      <Suspense fallback={<h2>Loading...</h2>}>

        <Players  playersPromise={playersPromise} />

        {/* <User userPromise={userPromise} /> */}

      </Suspense>
    </>
  );
}

export default App;