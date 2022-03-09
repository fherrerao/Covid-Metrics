const initialState = [];
const ADD_METRICS = 'covid-metrics/metrics/METRICS';
const DISPLAY_CONTINENTS = 'covid-metrics/metrics/DISPLAY_CONTINENTS';
const DISPLAY_COUNTRIES = 'covid-metrics/metrics/DISPLAY_COUNTRIES';

const url = 'https://disease.sh/v3/covid-19/countries/';

const addMetrics = (payload) => ({
  type: ADD_METRICS,
  payload,
});

export const displayContinents = (name) => ({
  type: DISPLAY_CONTINENTS,
  name,
});

export const displayCountries = () => (name) => ({
  type: DISPLAY_COUNTRIES,
  name,
});

export const getMetrics = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const arrData = data.map(element => ({
    id: element.countryInfo._id,
    continent: element.continent,
    country: element.country,
    image: element.countryInfo.flag,
    cases: element.cases,
    todayCases: element.todayCases,
    deaths: element.deaths,
    todayDeaths: element.todayDeaths,
    recovered: element.recovered,
    todayRecovered: element.todayRecovered,
    active: element.active,
    critical: element.critical,
    tests: element.tests,
    population: element.population,
  }));
  dispatch(addMetrics(arrData));
};

const metricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_METRICS:
      return [...action.payload];

    case DISPLAY_CONTINENTS:
      {
        const newState = state.filter((item) => item.continent === action.name);
        return [...newState];
      }
    case DISPLAY_COUNTRIES:
      return [...action.name];

    default:
      return state;
  }
}

export default metricsReducer;