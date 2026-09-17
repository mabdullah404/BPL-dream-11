import { Suspense } from "react";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Players from "./components/Players/Players";

import type { PlayersType } from "./types/PlayersType";


// API / JSON থেকে player data আনার function
const playerFetch = async (): Promise<PlayersType[]> => {
  const res = await fetch("/data.json");

  const data: PlayersType[] = await res.json();

  return data;
};


function App() {

  // এখানে function call করলে একটি Promise পাওয়া যাবে
  const playersPromise = playerFetch();

  return (
    <>
      <NavBar />

      <Banner />

      <Suspense fallback={<h2>Loading...</h2>}>

        <Players playersPromise={playersPromise} />

      </Suspense>
    </>
  );
}

export default App;