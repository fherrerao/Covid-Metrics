const initialState = [];
const ADD_METRICS = 'covid-metrics/metrics/METRICS';
const url = 'https://disease.sh/v3/covid-19/countries/';

const addMetrics = (payload) => ({
  type: ADD_METRICS,
  payload,
});

export const getMetrics = async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  dispatch(addMetrics(data));
}

const metricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_METRICS:
      return action.payload;

    default:
      return state;
  }
}

export default metricsReducer;