import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Continents = () => {
  const arrContinents = useSelector((state) => state.metricsReducer);
  console.log(arrContinents);

  return (
    <ul>
      {arrContinents.map((country) => (
        <NavLink to={`/countries/${country.country}`} key={country.id}>
          <div>{country.country}</div>
        </NavLink>
      ))}
    </ul>
  );
};
export default Continents;
