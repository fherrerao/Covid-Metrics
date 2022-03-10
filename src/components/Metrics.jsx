import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { displayContinents } from "../redux/metrics/metrics";
import { getMetrics } from "../redux/metrics/metrics";
import world from "../img/world.jpg";
// import s_america from "../img/south-america.svg";
// import n_america from "../img/north-america.svg";
// import asia from "../img/asia.svg";
// import africa from "../img/africa.svg";
// import europe from "../img/europe.svg";
// import oceania from "../img/australia.svg";

const Metrics = () => {
  const dispatch = useDispatch();
  dispatch(getMetrics());

  const arr = [
    "North America",
    "South America",
    "Asia",
    "Africa",
    "Europe",
    "Australia-Oceania",
  ];

  // const objContinents = [
  //   {
  //     continentName: "North America",
  //     silhouette: n_america,
  //   },
  //   {
  //     continentName: "South America",
  //     silhouette: s_america,
  //   },
  //   {
  //     continentName: "Asia",
  //     silhouette: asia,
  //   },
  //   {
  //     continentName: "Africa",
  //     silhouette: africa,
  //   },
  //   {
  //     continentName: "Europe",
  //     silhouette: europe,
  //   },
  //   {
  //     continentName: "Australia-Oceania",
  //     silhouette: oceania,
  //   },
  // ];

  const handlerContinent = (e) => {
    dispatch(displayContinents(e.target.textContent));
  };

  return (
    <div className="bg-blue f-gill">
      <div className="d-flex">
        <img className="card-img-top" src={world} alt="world-map" />
      </div>

      <div className="g-buttons py-5">
        {arr.map((element, index) => (
          <div className="h-buttons" key={index}>
            <NavLink
              className="btn btn-outline-light btn-lg py-5 fc-white s-container"
              to={`/continents/${element}`}
              onClick={(e) => {
                handlerContinent(e);
              }}
            >
              {/* <div className="d-flex align-items-center justify-content-around gap-1">
                <img
                  className="s-img-continent"
                  src={element.silhouette}
                  alt="continent"
                />
                <div>{element.continentName}</div>
              </div> */}
              {element}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
