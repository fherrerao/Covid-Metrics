const initialState = [];
const ADD_METRICS = 'covid-metrics/metrics/METRICS';
const url = 'https://api.covid19tracking.narrativa.com/api/2020-03-22/country/ecuador';

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