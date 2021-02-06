//import axios from "axios";
import { useState, useEffect } from "react";
import randomData from "../service/FetchRandoData";
//import random data and fetch data from API

function RandomPlanet(props) {
  const [random, setRandom] = useState([]);
  
  const getRandomPlanet = async () => {
    const response = await randomData();
    setRandom(response.data.planet);
  };
  useEffect(() => {
    getRandomPlanet();
  }, []);
  console.log(random);
  return (
    <div>
      <button onClick={getRandom}>Retrieve Random Planet</button>
      {random ? (
        <ul>
          <li>
            <h3>
              Planet <span>{random.name}</span>{" "}
            </h3>
            <p>
              Color: <span>{random.color}</span>
            </p>
            <p>
              {" "}
              Number of Moons : <span>{random.num_moons}</span>
            </p>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default RandomPlanet;