import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Continents = () => {
  const arrCountries = useSelector((state) => state.metricsReducer);
  console.log(arrCountries);
  return (
    <ul>
      {arrCountries.map((country) => (
        <NavLink to="" key={country.id}>
          <div>{country.country}</div>
        </NavLink>
      ))}
    </ul>
  );
};
export default Continents;
