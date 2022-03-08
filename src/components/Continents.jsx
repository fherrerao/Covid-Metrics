import { useSelector } from "react-redux";

const Continents = () => {
  const arrCountries = useSelector((state) => state.metricsReducer);
  const arrSelectedContinent = arrCountries.filter(
    (item) => item.continent === "South America"
  );

  return (
    <ul>
      {arrSelectedContinent.map((continent) => (
        <li>{continent.country}</li>
      ))}
    </ul>
  );
};
export default Continents;
