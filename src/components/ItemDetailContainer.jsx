import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer";


import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {
  const { iditem } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(() => {
    
    const db = getFirestore();
    const auxDoc = doc(db, "productos", iditem);
    getDoc(auxDoc)
        .then(res => setProducto({ id: res.id, ...res.producto() }))
  }, [iditem]);

  return (
    <ItemDetail producto={producto} />
  );
}
