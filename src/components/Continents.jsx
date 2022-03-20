import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import sAmerica from '../img/south-america.svg';
import nAmerica from '../img/north-america.svg';
import asia from '../img/asia.svg';
import africa from '../img/africa.svg';
import europe from '../img/europe.svg';
import oceania from '../img/australia.svg';

const Continents = () => {
  const arrContinents = useSelector((state) => state.metricsReducer);
  const { name } = useParams();
  const [search, setSearch] = useState('');

  const objContinents = [
    {
      continentName: 'North America',
      silhouette: nAmerica,
    },
    {
      continentName: 'South America',
      silhouette: sAmerica,
    },
    {
      continentName: 'Asia',
      silhouette: asia,
    },
    {
      continentName: 'Africa',
      silhouette: africa,
    },
    {
      continentName: 'Europe',
      silhouette: europe,
    },
    {
      continentName: 'Australia-Oceania',
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

      <div>
        <form className="d-flex container my-3">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search by country"
            aria-label="Search"
            onChange={({ target }) => {
              setSearch(target.value);
            }}
          />
        </form>
      </div>

      <ul className="g-countries p-0">
        {arrContinents
          .filter((item) => item.country.toLowerCase().includes(search.toLowerCase()))
          .map((country) => (
            <Link
              key={country.id}
              className="btn btn-outline-light btn-lg py-5 fc-white"
              to={`/countries/${country.country}`}
            >
              <div>
                <img className="wdt-countries" src={country.image} alt="" />
                <p className="f-gill fs-s">
                  {country.country}
                </p>
              </div>
            </Link>
          ))}
      </ul>
    </div>
  );
};
export default Continents;
