const RETRIEVE_REVENUES = 'metrics-webapp/revenues/RETRIEVE_REVENUES';
export const retrieveRevenues = () => async (dispatch) => {
    const revenues = await fetch(
      'https://financialmodelingprep.com/api/v4/revenue-geographic-segmentation?symbol=AAPL&structure=flat&apikey=3b6685977c96f27f3e1df3d5e42bd7e5',
    )
      .then((response) => response.json());

    dispatch({
      type: RETRIEVE_REVENUES,
      payload: revenues,
    });
};
