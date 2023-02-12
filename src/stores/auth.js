import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  auth: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthState: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const {changeAuthState} = auth.actions;
export default auth.reducer;
