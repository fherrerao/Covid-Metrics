const initialState = [];
const ADD_METRICS = 'covid-metrics/metrics/METRICS';
const SHOW_CONTINENTS = 'covid-metrics/metrics/SHOW_CONTINENTS';
const url = 'https://disease.sh/v3/covid-19/countries/';

const addMetrics = (payload) => ({
  type: ADD_METRICS,
  payload,
});

export const showContinents = (name) => ({
  type: SHOW_CONTINENTS,
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
  }));
  dispatch(addMetrics(arrData));
};

const metricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_METRICS:
      return [...action.payload];

    case SHOW_CONTINENTS:
      {
        const newState = state.filter((item) => item.continent === action.name);
        return [...newState];
      }

    default:
      return state;
  }
}

export default metricsReducer;