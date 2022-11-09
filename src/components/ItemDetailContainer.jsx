import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer";
import { productosHC } from "../data/data"
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { iditem } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(() => {
    
    const productoPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHC.find(item => item.id == iditem));
      }, 2000);
    });

    productoPromise.then((res) => {
        setProducto(res);
    });
  }, [iditem]);

  return (
    <ItemDetail producto={producto} />
  );
}
