import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { displayContinents } from "../redux/metrics/metrics";
import { getMetrics } from "../redux/metrics/metrics";

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
    <div className="container g-buttons mt-5">
      {arr.map((element, index) => (
        <div className="h-buttons" key={index}>
          <NavLink
            className="btn btn-outline-secondary btn-lg py-5"
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
  );
};

export default Metrics;
