import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  darkTheme: false,
};

const darkTheme = createSlice({
  name: 'darkTheme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
  },
});

export const {changeTheme} = darkTheme.actions;
export default darkTheme.reducer;
