import { configureStore } from '@reduxjs/toolkit';
import passReducer from "./Reducers/passReducer.js";
export default configureStore({

  reducer: {
    password: passReducer
  },
});