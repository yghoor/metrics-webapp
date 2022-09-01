const RETRIEVE_REVENUES = 'metrics-webapp/revenues/RETRIEVE_REVENUES';
const DO_NOT_RETRIEVE = 'metrics-webapp/revenues/DO_NOT_RETRIEVE';
const FILTER_LIST = 'metrics-webapp/revenues/FILTER_LIST';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_REVENUES:
      return [...state, ...action.payload];
    case DO_NOT_RETRIEVE:
      return state;
    case FILTER_LIST:
      return Object.assign([], state, action.payload);
    default:
      return state;
  }
};

export default reducer;

let retrieved = false;

export const retrieveRevenues = () => async (dispatch) => {
  if (retrieved === false) {
    const revenues = await fetch(
      'https://financialmodelingprep.com/api/v4/revenue-geographic-segmentation?symbol=AAPL&structure=flat&apikey=3b6685977c96f27f3e1df3d5e42bd7e5',
    )
      .then((response) => response.json());

    dispatch({
      type: RETRIEVE_REVENUES,
      payload: revenues,
    });
    retrieved = true;
  } else {
    dispatch({
      type: DO_NOT_RETRIEVE,
    });
  }
};

export const returnFiltered = (payload) => ({
  type: FILTER_LIST,
  payload,
});
