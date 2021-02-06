//planet detail to isolate and show specific properties of planets
function PlanetDetail(props) {
  return (
    <div className="">
      <h3>
        Planet Name <span>{props.name}</span>{" "}
      </h3>
      <p>
       Planet Color: <span>{props.color}</span>
      </p>
      <p>
        {" "}
        Quantity of Moons : <span>{props.num_moons}</span>
      </p>
    </div>
  );
}
export default PlanetDetail;