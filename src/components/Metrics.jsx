import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showContinents } from "../redux/metrics/metrics";
import { getMetrics } from "../redux/metrics/metrics";

const Metrics = () => {
  // const [continents, setContinents] = useState([]);
  const dispatch = useDispatch();

  dispatch(getMetrics());

  // const arrCountries = useSelector((state) => state.metricsReducer);
  // console.log(arrCountries);

  // setContinents(Object.values(objContinent));

  // useEffect(() => {
  //   console.log("ENTRANDOOOO");
  //   let objContinent = {};
  //   console.log(arrCountries);
  //   arrCountries.map((item) => {
  //     const continentName = item.continent;
  //     console.log(item.continent);
  //     objContinent[continentName] = continentName;
  //   });

  //   setContinents(Object.values(objContinent));
  // }, []);

  const arr = [
    "North America",
    "South America",
    "Asia",
    "Europe",
    "Africa",
    "Australia-Oceania",
  ];

  const handlerContinent = (e) => {
    dispatch(showContinents(e.target.textContent));
  };

  return (
    <div className="container g-buttons mt-5">
      {arr.map((element, index) => (
        <div className="h-buttons" key={index}>
          <NavLink
            className="btn btn-outline-secondary btn-lg py-5"
            to={`/countries/${element}`}
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
