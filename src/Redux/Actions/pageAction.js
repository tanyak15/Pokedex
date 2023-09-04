import {
  setPageSuccess,
  setPageRequest,
  setPageFail,
} from "../Slices/pageSlice";
import axios from "axios";

export const getTotalPage = () => async (dispatch) => {
  try {
    dispatch(setPageRequest());
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
    dispatch(setPageSuccess(Math.ceil(data.count / 20)));
  } catch (error) {
    console.log(error);
    dispatch(setPageFail(error.message));
  }
};
