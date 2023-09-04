import axios from "axios";
import {
  allPokemonFail,
  allPokemonRequest,
  allPokemonSuccess,
} from "../Slices/allPokemonSlice";

export const getAllPokemons = (page) => async (dispatch, getState) => {
  try {
    dispatch(allPokemonRequest());
    const { data } = await axios(
      `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`
    );
    console.log("\x1b[35m", data);
    const res = await Promise.all(data.results.map((i) => axios.get(i.url)));
    // console.log("RES:", res.data);
    dispatch(allPokemonSuccess(res.map((i) => i.data)));
  } catch (err) {
    console.log("\x1b[35m", err.response.data);
    dispatch(allPokemonFail(err.response.data));
  }
};
