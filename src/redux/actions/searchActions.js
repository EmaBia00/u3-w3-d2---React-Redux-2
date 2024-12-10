import { SET_SEARCH_RESULTS, SET_LOADING } from "./types";

// Action creator per settare i risultati della ricerca
export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results
});

// Action creator per gestire lo stato di caricamento
export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading
});

// Action creator per eseguire il fetch e dispatchare i risultati
export const fetchSearchResults = (query) => {
  return async (dispatch) => {
    dispatch(setLoading(true)); // Iniziamo con lo stato di caricamento
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setSearchResults(data)); // Dispatchiamo i risultati
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false)); // Impostiamo lo stato di caricamento a false una volta completato
    }
  };
};
