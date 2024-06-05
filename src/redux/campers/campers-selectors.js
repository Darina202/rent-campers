// export const selectAllContacts = store => store.contacts;

export const selectAllCampers = store => store.campers;

export const selectCamperById = (state, camperId) => {
  return state.campers.items.find(camper => camper._id === camperId);
};
