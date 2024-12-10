import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "./types";

// Action creator per aggiungere ai preferiti
export const addToFavourite = (companyName) => ({
  type: ADD_TO_FAVOURITE,
  payload: companyName
});

// Action creator per rimuovere dai preferiti
export const removeFromFavourite = (companyName) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: companyName
});
