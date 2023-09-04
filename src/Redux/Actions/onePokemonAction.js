import axios from "axios";
import {
  onePokemonFail,
  onePokemonSuccess,
  onePokemonRequest,
} from "../Slices/onePokemonSlice";

export const getOnePokemon = (id) => async (dispatch, getState) => {
  try {
    dispatch(onePokemonRequest());
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log("DATA", data);
    dispatch(onePokemonSuccess(data));
  } catch (err) {
    dispatch(onePokemonFail(err.request.data));
  }
};
