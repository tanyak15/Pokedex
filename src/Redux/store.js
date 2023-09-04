import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./Slices/pageSlice.js";
import onePokemonReducer from "./Slices/onePokemonSlice.js";
import allPokemonReducer from "./Slices/allPokemonSlice.js";

const store = configureStore({
  reducer: {
    allPokemon: allPokemonReducer,
    onePokemon: onePokemonReducer,
    page: pageReducer,
  },
});
export default store;
