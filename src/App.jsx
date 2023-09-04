import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CardDetails from "./Components/CardDetails";
import { getTotalPage } from "./Redux/Actions/pageAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearAllPokemonError } from "./Redux/Slices/allPokemonSlice";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.page);
  const notify = () => toast(error);
  useEffect(() => {
    if (error) {
      notify();
      dispatch(clearAllPokemonError());
    }
    dispatch(getTotalPage());
  }, [error]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<CardDetails />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
