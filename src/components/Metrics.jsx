import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { displayContinents } from "../redux/metrics/metrics";
import { getMetrics } from "../redux/metrics/metrics";
import world from "../img/world.jpg";

const Metrics = () => {
  const dispatch = useDispatch();
  dispatch(getMetrics());

  const arr = [
    "North America",
    "South America",
    "Asia",
    "Europe",
    "Africa",
    "Australia-Oceania",
  ];

  const handlerContinent = (e) => {
    dispatch(displayContinents(e.target.textContent));
  };

  return (
    <div className="bg-blue f-gill">
      <img className="card-img-top" src={world} alt="world-map" />
      <div className="container g-buttons py-5">
        {arr.map((element, index) => (
          <div className="h-buttons" key={index}>
            <NavLink
              className="btn btn-outline-light btn-lg py-5 fc-white"
              to={`/continents/${element}`}
              onClick={(e) => {
                handlerContinent(e);
              }}
            >
              {element}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
