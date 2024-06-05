import { combineReducers } from '@reduxjs/toolkit';

import { camperReducer } from './campers/campers-slice';

const rootReducer = combineReducers({
  campers: camperReducer,
});

export default rootReducer;
