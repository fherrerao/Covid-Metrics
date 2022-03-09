import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Countries = () => {
  const params = useParams();
  const arrCountries = useSelector((state) => state.metricsReducer);
  const filtered = arrCountries.filter((item) => item.country === params.name);

  console.log(params);
  console.log(arrCountries);
  console.log(filtered);

  return (
    <div>
      <h1>{filtered[0].country}</h1>
    </div>
  );
};

export default Countries;
