import { createSlice } from '@reduxjs/toolkit';
   
 const THEME_MODE = "themeMode"
 

 const getMode = () =>{
      const storeMode = localStorage.getItem(THEME_MODE);
      return storeMode ? JSON.parse(storeMode) : false; 
  }

 const modeSlice = createSlice({
  name: 'mode',
  initialState: {
     darkMode: getMode(),
  },
  reducers: {
    toggleMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem(THEME_MODE, JSON.stringify(state.darkMode))
    },
  },
});

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
