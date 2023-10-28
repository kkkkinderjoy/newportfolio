import {configureStore, createSlice} from "@reduxjs/toolkit";

let dark = createSlice({
  name:"theme",
  initialState: localStorage.getItem("theme") || "light",
  reducers:{
    toggleTheme :(state) => state === "light" ? "dark" : "light"
  }
})

// const selectedValueSlice = createSlice({
//   name: 'selectedValue',
//   initialState: 'Project',
//   reducers: {
//     setSelectedValue: (state, action) => action.payload
//   }
// });

// const selectedViewSlice = createSlice({
//   name: 'selectedView',
//   initialState: 'Gallery',
//   reducers: {
//     setSelectedView: (state, action) => action.payload
//   }
// });


export const {toggleTheme} = dark.actions;

// export const { setFilter } = filterSlice.actions;
// export const { setData } = dataSlice.actions;
// export const { setIsOpen } = isOpenSlice.actions;
// export const { setSelectedValue } = selectedValueSlice.actions;
// export const { setSelectedView } = selectedViewSlice.actions;
// export const { setLanguage } = languageSlice.actions;
// export const { setSelectedLanguage } = selectedLanguageSlice.actions;
// export const { setHorizonAndVertical } = toggleHorizonAndVertical.actions;
// export const { setDeveloperMode } = developerMode.actions;

export default configureStore({
  reducer:{
    // isOpen: isOpenSlice.reducer,
    // selectedValue: selectedValueSlice.reducer,
    // selectedView: selectedViewSlice.reducer,
    // language: languageSlice.reducer,
    // selectedLanguage: selectedLanguageSlice.reducer,
    // HorizonAndVertical: toggleHorizonAndVertical.reducer,
    // developerMode: developerMode.reducer,
    // filter: filterSlice.reducer,
    // data: dataSlice.reducer,
    dark: dark.reducer
  }
});