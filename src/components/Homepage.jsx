import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { displayContinents, getMetrics } from '../redux/metrics/metrics';
import world from '../img/world.jpg';
import sAmerica from '../img/south-america.svg';
import nAmerica from '../img/north-america.svg';
import asia from '../img/asia.svg';
import africa from '../img/africa.svg';
import europe from '../img/europe.svg';
import oceania from '../img/australia.svg';

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMetrics());
  }, []);

  // const arr = [
  //   'North America',
  //   'South America',
  //   'Asia',
  //   'Africa',
  //   'Europe',
  //   'Australia-Oceania',
  // ];
  const arr = [
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

  const handlerContinent = (e) => {
    dispatch(displayContinents(e.target.textContent));
  };

  return (

    <div className="bg-blue f-gill">
      <div className="d-flex">
        <img className="card-img-top" src={world} alt="world-map" />
      </div>

      <div className="g-buttons py-5 container">
        {arr.map((element) => (
          <Link
            className="btn h-buttons btn-outline-light btn-lg py-5 fc-white s-container"
            to={`/continents/${element.continentName}`}
            key={uuidv4()}
            onClick={(e) => { handlerContinent(e); }}
          >
            <div className="d-flex justify-content-around align-items-center">
              <img width="70px" src={element.silhouette} alt={element.silhouette} />
              <p className="m-0">{element.continentName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
