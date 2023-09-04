import { createSlice } from "@reduxjs/toolkit";

const initialState = { loading: false, allPokemon: [], error: null };

const allPokemonSlice = createSlice({
  name: "allPokemon",
  initialState: initialState,
  reducers: {
    allPokemonFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    allPokemonRequest: (state) => {
      state.loading = true;
    },
    allPokemonSuccess: (state, action) => {
      state.loading = false;
      state.allPokemon = action.payload;
    },
    clearAllPokemonError: (state) => {
      state.error = null;
    },
    resetAllPokemon: (state) => {
      state.loading = false;
      state.allPokemon = [];
      state.error = null;
    },
  },
});

export const {
  allPokemonFail,
  allPokemonRequest,
  allPokemonSuccess,
  clearAllPokemonError,
  resetAllPokemon,
} = allPokemonSlice.actions;
export default allPokemonSlice.reducer;
