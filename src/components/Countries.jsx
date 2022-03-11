import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";

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

  return (
    <div className="d-flex flex-column align-items-center py-5 bg-blue-light c-container">
      <img className="i-country" src={filterImage} alt="country" />
      <Table className="my-5" striped bordered hover>
        <thead>
          <tr className="bg-blue">
            <th className="tc-white">{filterCountry}</th>
            <th></th>
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

    // <div className="container">
    //   <h2>{filtered[0].country}</h2>
    //   <Table>
    //     <li>{`Population: ${filtered[0].population
    //       .toFixed(2)
    //       .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}</li>

    //     <li>{`Total cases: ${filtered[0].cases
    //       .toFixed(2)
    //       .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}</li>

    //     <li>{`Today cases: ${filtered[0].todayCases
    //       .toFixed(2)
    //       .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}</li>

    //     <li>{`Total deaths: ${filtered[0].deaths
    //       .toFixed(2)
    //       .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}</li>

    //     <li>{`Today deaths: ${filtered[0].todayDeaths
    //       .toFixed(2)
    //       .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}</li>

    //     <li>{`Recovered: ${filtered[0].recovered
    //       .toFixed(2)
    //       .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}</li>
    //   </ul>
    // </div>
  );
};

export default Countries;
