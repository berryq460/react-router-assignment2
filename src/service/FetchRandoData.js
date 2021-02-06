import axios from "axios";
async function FetchRandoData() {
  const link = "https://wdi-nyc-planets-api.herokuapp.com/planets/random";
  const response2 = await axios.get(link).then((res2) => {
    return res2;
  });
  return response2;
}
export default FetchRandoData;