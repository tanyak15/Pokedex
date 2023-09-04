import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, details }) => {
  const { id, moves, height, order, weight, sprites } = details;
  return (
    <Link to={`/pokemon/${id}`}>
      <div
        className="w-56 h-80 p-2 m-2 rounded-lg cursor-pointer transform
      transition duration-500 hover:scale-105 "
        style={{
          // background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
          backgroundImage: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
        }}
      >
        <div className="h-2/3 p-3 d-flex justify-center items-center">
          <img
            src={sprites?.front_default}
            className="h-auto max-w-full scale-150 ml-9  object-cover rounded-full"
          />
        </div>
        <div>
          <div>
            <h4 className="font-serif font-semibold from-neutral-500 text-2xl">
              {name?.toUpperCase()}
            </h4>
          </div>
          <div className="grid grid-rows-2 grid-flow-col">
            <p>MOVES : {moves.length}</p>
            <p>HEIGHT: {height}</p>
            <p>ORDER : {order}</p>
            <p>WEIGHT : {weight}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
