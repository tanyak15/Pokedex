import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOnePokemon } from "../Redux/Actions/onePokemonAction";
import { AiOutlineLine } from "react-icons/ai";
import { SiPokemon } from "react-icons/si";
import Loader from "./Loader";

const CardDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { loading, onePokemon, error } = useSelector(
    (state) => state.onePokemon
  );

  useEffect(() => {
    dispatch(getOnePokemon(id));
  }, [id]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen ">
        <Loader />
      </div>
    );
  }

  return (
    <div className="h-full  bg-teal-50 ">
      <div className=" backdrop-blur-md  p-2">
        <h2
          className="flex justify-center text-center items-center font-bold text-5xl font-serif underline underline-offset-2"
          style={{
            color: "#425f76 ",
          }}
        >
          {onePokemon?.name?.toUpperCase()}
        </h2>
        <SiPokemon className="w-24 h-16 text-red-500 flex" />
      </div>
      <div className="h-screen flex ">
        {/* text left side */}
        <div className="  w-2/3">
          <div className=" font-medium text-3xl text-gray-600 ml-6 pb-6">
            Detailed Information
          </div>
          <div className=" grid grid-cols-2 gap-y-3 list-none ml-6 font-sans text-cyan-700">
            <p className="flex font-bold text-3xl">Abilities : </p>

            <li className="flex font-semibold text-xl">
              {onePokemon?.abilities?.map((i) => i.ability.name).join(",")}
            </li>
            <p className="flex font-bold text-3xl">Base Experience : </p>
            <li className="flex font-semibold text-xl">
              {onePokemon?.base_experience}
            </li>
            <p className="flex font-bold text-3xl">Game Indices : </p>
            <li className="flex font-semibold text-xl">
              {onePokemon?.game_indices?.length}
            </li>
            <p className="flex font-bold text-3xl">Height :</p>
            <li className="flex font-semibold text-xl">
              {" "}
              {onePokemon?.height}
            </li>
            <p className="flex font-bold text-3xl">Moves : </p>
            <li className="flex font-semibold text-xl">
              {onePokemon?.moves?.length}
            </li>
            <p className="flex font-bold text-3xl">Stats : </p>
            <li className="flex font-semibold text-xl">
              {onePokemon?.stats?.map((i) => i.stat.name).join(" , ")}
            </li>
            <p className="flex font-bold text-3xl">Types :</p>
            <li className="flex font-semibold text-xl">
              {onePokemon?.types?.map((i) => i.type.name).join(" , ")}
            </li>
            <p className="flex font-bold text-3xl">Weight :</p>
            <li className="flex font-semibold text-xl">
              {" "}
              {onePokemon?.weight}
            </li>
          </div>
        </div>
        {/* images right side */}
        <div className=" w-1/3 flex scale-50 flex-col mb-96">
          <img src={onePokemon?.sprites?.front_default}></img>
          <img src={onePokemon?.sprites?.back_default}></img>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
