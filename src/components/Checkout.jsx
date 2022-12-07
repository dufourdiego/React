import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {

  const nombre = useContext(CartContext);
  console.log('Item: ' , nombre);

  return <div>FORMULARIO PARA PAGAR</div>;
}
