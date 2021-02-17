import  FetchRandoData  from "../service/FetchRandoData";
import { useState, useEffect } from "react";
import PlanetDetail from "./PlanetDetail";

function RandomPlanet(props) {
  const [random, setRandom] = useState({});
  
  const getRandomPlanet = async () => {
    const response = await FetchRandoData();
    setRandom(response.data.planet);
  };
  useEffect(() => {
    getRandomPlanet();
  }, []);
  console.log(random);
  return (
    
    <div>
      <button onClick={getRandomPlanet}>Retrieve Random Planet! </button>
      <div>
        <h3>Random Planet</h3>
        <PlanetDetail {...random} /> 
      </div>
    </div>
  );
}
// /goal was to map through items in the object is normally used for arrays

export default RandomPlanet;