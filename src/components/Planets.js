import DData from "../service/DataDisplay";
import { useState, useEffect } from "react";
import PlanetDetail from "./PlanetDetail";
///import necessary Data
//use use state (to update component in new state copy) and use effect (For API)

function Planets(props) {
  const [list, setList] = useState([]);
//fetch data and show the response in a list
  const fetchData = async () => {
    const response = await DData();
    setList(response.data.planets);
  };

  useEffect(() => {
    fetchData();
  }, []);
 //use .map to sift through data in an organized fashion by item and index
 //instructions - in planet componet what 
  return (
    <div>
      <ul>
        {list.map((item, index) => {
          return <PlanetDetail {...item} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default Planets;