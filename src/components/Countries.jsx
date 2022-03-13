import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Countries = () => {
  const params = useParams();
  const arrCountries = useSelector((state) => state.metricsReducer);
  const filtered = arrCountries.filter((item) => item.country === params.name);
  const filterImage = filtered.map((item) => item.image);
  const filterCountry = filtered.map((item) => item.country);
  const filterPopulation = filtered.map((item) => item.population);
  const filterTotalCases = filtered.map((item) => item.cases);
  const filterTodayCases = filtered.map((item) => item.todayCases);
  const filterTotalDeaths = filtered.map((item) => item.deaths);
  const filterTodayDeaths = filtered.map((item) => item.todayDeaths);
  const filterRecovered = filtered.map((item) => item.recovered);
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center pt-3 bg-blue-light c-container">
      <button
        type="button"
        className="container btn-back c-icon"
        onClick={() => navigate(-1)}
      >
        <box-icon name="left-arrow" animation="burst-hover" color="#ffffff">{ }</box-icon>
      </button>

      <img className="i-country" src={filterImage} alt="country" />
      <Table className="my-5" striped bordered hover>
        <thead>
          <tr className="bg-blue">
            <th className="tc-white">{filterCountry}</th>
            <th>{ }</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tc-white">Population</td>
            <td className="tc-white">{filterPopulation}</td>
          </tr>

          <tr>
            <td className="tc-white">Total cases</td>
            <td className="tc-white">{filterTotalCases}</td>
          </tr>

          <tr>
            <td className="tc-white">Today cases</td>
            <td className="tc-white">{filterTodayCases}</td>
          </tr>

          <tr>
            <td className="tc-white">Total deaths</td>
            <td className="tc-white">{filterTotalDeaths}</td>
          </tr>

          <tr>
            <td className="tc-white">Today deaths</td>
            <td className="tc-white">{filterTodayDeaths}</td>
          </tr>

          <tr>
            <td className="tc-white">Recovered</td>
            <td className="tc-white">{filterRecovered}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Countries;
