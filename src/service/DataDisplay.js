import axios from "axios";

async function dataDisplay() {
  const link1 = "https://wdi-nyc-planets-api.herokuapp.com/planets";
  const response1 = await axios.get(link1).then((response2) => {
    return response2;
  });
  return response1;
}

export default dataDisplay;