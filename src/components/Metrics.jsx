import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { displayContinents, getMetrics } from '../redux/metrics/metrics';
import world from '../img/world.jpg';

const Metrics = () => {
  const dispatch = useDispatch();
  dispatch(getMetrics());

  const arr = [
    'North America',
    'South America',
    'Asia',
    'Africa',
    'Europe',
    'Australia-Oceania',
  ];

  const handlerContinent = (e) => {
    dispatch(displayContinents(e.target.textContent));
  };

  return (
    <div className="bg-blue f-gill">
      <div className="d-flex">
        <img className="card-img-top" src={world} alt="world-map" />
      </div>

      <div className="g-buttons py-5">
        {arr.map((element) => (
          <div className="h-buttons" key={uuidv4()}>
            <Link
              className="btn btn-outline-light btn-lg py-5 fc-white s-container"
              to={`/continents/${element}`}
              onClick={(e) => {
                handlerContinent(e);
              }}
            >
              {element}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
