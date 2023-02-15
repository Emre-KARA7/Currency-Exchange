import {configureStore} from '@reduxjs/toolkit';

import auth from './auth';
import darkTheme from './darkTheme';

const store = configureStore({
  reducer: {
    auth,
    darkTheme,
  },
});

export default store;
