import Card from "./Card";

import Pagination from "./Pagination";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { getAllPokemons } from "../Redux/Actions/allPokemonAction";

import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { clearAllPokemonError } from "../Redux/Slices/allPokemonSlice";
import Loader from "./Loader";

const Home = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.page);
  const { loading, allPokemon, error } = useSelector(
    (state) => state.allPokemon
  );

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearAllPokemonError());
    }
    dispatch(getAllPokemons(page));
  }, [page, error]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen ">
        <Loader />
        <p>Loding</p>
      </div>
    );
  }

  return (
    <div
      className="d-flex justify-center text-center"
      style={{
        backgroundImage: "linear-gradient(to top, #09203f 0%, #537895 100%)",
      }}
    >
      <h2 className="d-flex justify-center text-zinc-800 font-serif text-center p-3 text-4xl font-bold ">
        POKEDEX
      </h2>
      <div className="w-full grid grid-cols-5 justify-center  text-center items-center">
        {allPokemon.length > 0 &&
          allPokemon?.map((pokemon, indx) => {
            return <Card key={indx} details={pokemon} name={pokemon.name} />;
          })}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
