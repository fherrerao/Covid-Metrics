const Metrics = () => {
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
      {arr.map((element) => (
        <div className="h-buttons">
          <button className="p-5">{element}</button>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
