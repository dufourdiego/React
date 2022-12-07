
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList.jsx";
import "./ItemListContainer";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

export default function ItemListContainer() {
  const { categoria } = useParams();

  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    const db = getFirestore();
    let myCollection;
    
    if (categoria === undefined) {
      myCollection = collection(db, "productos");
    }
    else {

      myCollection = query(collection(db, "productos"), where("categoria", "==", categoria));
    }

    getDocs(myCollection).then((data) => setProductos(data.docs.map((product) => ({ id: product.id, ...product.data() }))));

    
  }, [categoria])

  return (
    
      <ItemList productos={productos} />
    
  );
}
