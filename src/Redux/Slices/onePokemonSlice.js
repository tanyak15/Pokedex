import { createSlice } from "@reduxjs/toolkit";

const initialState = { loading: false, onePokemon: null, error: null };

const onePokemonSlice = createSlice({
  name: "onePokemon",
  initialState,
  reducers: {
    onePokemonFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    onePokemonRequest: (state) => {
      state.loading = true;
    },
    onePokemonSuccess: (state, action) => {
      state.loading = false;
      state.onePokemon = action.payload;
    },
    clearOnePokemonError: (state) => {
      state.error = null;
    },
    resetOnePokemon: (state) => {
      state.loading = false;
      state.onePokemon = null;
      state.error = null;
    },
  },
});

export const {
  onePokemonFail,
  onePokemonRequest,
  onePokemonSuccess,
  clearOnePokemonError,
  resetOnePokemon,
} = onePokemonSlice.actions;
export default onePokemonSlice.reducer;
