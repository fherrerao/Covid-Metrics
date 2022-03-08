import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Continents from "./Continents";

const Metrics = () => {
  const arrCountries = useSelector((state) => state.metricsReducer);
  const arrExample = arrCountries.filter((item) => item.continent === "Asia");
  // console.log(arrExample);
  const arr = [
    "North America",
    "South America",
    "Asia",
    "Europe",
    "Africa",
    "Australia-Oceania",
  ];

  const handlerContinent = (e) => {
    console.log(e.target.textContent);
  };

  return (
    <div className="container g-buttons mt-5">
      {arr.map((element, index) => (
        <div className="h-buttons" key={index}>
          <NavLink
            className="btn btn-outline-secondary btn-lg py-5"
            to={`/countries/${element}`}
          >
            {element}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
