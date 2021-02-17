import DataDisplay from "../service/DataDisplay";
import randomData from "../service/FetchRandoData";
//import data to read/ display on home pg
//create function to pass these properties and print 
function Home(props) {
  return (
    <div>
      {/* {console.log(DataDisplay())} */}
      {/* {console.log(randomData())} */}
      <h1>Home</h1>
    </div>
  );
}
export default Home;