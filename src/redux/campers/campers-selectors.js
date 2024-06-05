// export const selectAllContacts = store => store.contacts;
import { createSelector } from '@reduxjs/toolkit';

export const selectAllCampers = store => store.campers;

// src/redux/campers/campers-selectors.js
export const selectCamperById = (state, camperId) => {
  return state.campers.items.find(camper => camper._id === camperId);
};
