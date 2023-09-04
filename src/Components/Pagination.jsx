import React, { useEffect } from "react";

import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {
  incrementPage,
  decrementPage,
  jumpToPage,
} from "../Redux/Slices/pageSlice";

import { useDispatch, useSelector } from "react-redux";

// total pages , current pg

const Pagination = () => {
  const dispatch = useDispatch();
  const { page, totalPages } = useSelector((state) => state.page);

  const decrementByOne = () => {
    dispatch(decrementPage());
  };

  const incrementByOne = () => {
    dispatch(incrementPage());
  };

  return (
    <div
      className="text-white p-3 flex items-center justify-center text-xl gap-4"
      style={{
        backgroundImage: "linear-gradient(to top, #09203f 100%, #537895 100%)",
      }}
    >
      <div className="flex gap-4 justify-center items-center cursor-pointer font-semibold">
        {page !== 1 ? <BsArrowLeft onClick={decrementByOne} /> : ""}

        <div className="text-cyan-300">{page}</div>
        <div onClick={() => dispatch(jumpToPage(page + 1))}>{page + 1}</div>
        <div onClick={() => dispatch(jumpToPage(page + 2))}>{page + 2}</div>
        {page === totalPages - 3 ? "" : <div>...</div>}
        <div onClick={() => dispatch(jumpToPage(page + 3))}>{page + 3}</div>
        {page !== totalPages - 3 ? (
          <BsArrowRight onClick={incrementByOne} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Pagination;
