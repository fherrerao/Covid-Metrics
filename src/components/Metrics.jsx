import { useSelector } from "react-redux";

const Metrics = () => {
  const arrCountries = useSelector((state) => state.metricsReducer);

  const arr = [
    "North America",
    "South America",
    "Asia",
    "Europe",
    "Africa",
    "Australia-Oceania",
  ];

  return (
    <div className="container g-buttons mt-5">
      {arr.map((element, index) => (
        <div className="h-buttons" key={index}>
          <button className="p-5">{element}</button>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
