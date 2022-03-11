import metricsReducer from "../redux/metrics/metrics";

describe("Testing display, adding data to store", () => {
  test("Display metrics", () => {
    const ADD_METRICS = "covid-metrics/metrics/METRICS";
    const payload = [
      {
        continent: "South America",
        country: "Ecuador",
        cases: 12522,
      },
      {
        continent: "South America",
        country: "Peru",
        cases: 25488,
      },
    ];
    const action = { type: ADD_METRICS, payload };

    const result = metricsReducer([], action);
    expect(result).toEqual(payload);
  });

  test("Filter countries by continents", () => {
    const DISPLAY_CONTINENTS = "covid-metrics/metrics/DISPLAY_CONTINENTS";
    const name = "South America";
    const state = [
      {
        continent: "South America",
        country: "Ecuador",
        cases: 12522,
      },
      {
        continent: "North America",
        country: "Anguilla",
        cases: 25488,
      },
    ];

    const nextState = [
      {
        continent: "South America",
        country: "Ecuador",
        cases: 12522,
      },
    ];
    const action = { type: DISPLAY_CONTINENTS, name };

    const result = metricsReducer(state, action);
    expect(result).toEqual(nextState);
  });
});
