import React, { Children, useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react'
const crypto = createContext()

const Cryptocontext = ({children}) => {
  const [currancy,setcurrancy]=useState("INR")
  const [symbol, setsymbol]=useState("₹");

  useEffect(() =>{
    if (currancy === "INR") setsymbol("₹")
    else if (currancy === "USD") setsymbol("$")
  },[currancy] );

  return<crypto.Provider value={{currancy,setcurrancy,symbol}}>{Children}</crypto.Provider>

};


export default Cryptocontext

export const CryptoState =() => {
   return useContext(Crypto);
};
