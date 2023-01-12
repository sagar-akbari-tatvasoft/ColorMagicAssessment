import React from "react";
import { createContext, useState } from "react";

export const INCREMENT_PAGE = "INCREMENT_PAGE";
export const RESET_PAGE = "RESET_PAGE";
export const SET_BREED = "SET_BREED";

export const CatContext = createContext({});

export default function CatContextProvider(params) {
  // To track selected breed type
  const [selectedBreed, setSelectedBreed] = useState();

  // dispatch function for handing actions
  const dispatchEvent = (actionType, payload) => {
    switch (actionType) {
      case SET_BREED:
        setSelectedBreed(payload);
        return;
      default:
        return;
    }
  };

  return (
    <>
      <CatContext.Provider value={{ selectedBreed, dispatchEvent }}>
        {params?.children}
      </CatContext.Provider>
    </>
  );
}
