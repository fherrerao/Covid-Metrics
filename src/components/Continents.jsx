import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import s_america from "../img/south-america.svg";
import n_america from "../img/north-america.svg";
import asia from "../img/asia.svg";
import africa from "../img/africa.svg";
import europe from "../img/europe.svg";
import oceania from "../img/australia.svg";

const Continents = () => {
  const arrContinents = useSelector((state) => state.metricsReducer);
  const { name } = useParams();

  const objContinents = [
    {
      continentName: "North America",
      silhouette: n_america,
    },
    {
      continentName: "South America",
      silhouette: s_america,
    },
    {
      continentName: "Asia",
      silhouette: asia,
    },
    {
      continentName: "Africa",
      silhouette: africa,
    },
    {
      continentName: "Europe",
      silhouette: europe,
    },
    {
      continentName: "Australia-Oceania",
      silhouette: oceania,
    },
  ];

  const continent = objContinents.filter((item) => item.continentName === name);
  const nameC = continent.map((item) => item.continentName);
  const imgC = continent.map((item) => item.silhouette);

  return (
    <div className="bg-first">
      <div className="d-flex justify-content-center align-items-center py-5 gap-5 bg-second">
        <img width="200px" src={imgC} alt="" />
        <p className="f-gill fs">{nameC}</p>
      </div>
      <ul className="g-countries p-0">
        {arrContinents.map((country) => (
          <Link
            className="btn btn-outline-light btn-lg py-5 fc-white"
            to={`/countries/${country.country}`}
            key={country.id}
          >
            <div>
              <img className="wdt-countries" src={country.image} alt="" />
              <p className="f-gill fs-s">{country.country} </p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Continents;
