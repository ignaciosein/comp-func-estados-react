import React, { useState } from "react";

import "./App.css";
import List from "./List/List";
function App() {
  const [name, setName] = useState("");

  const addProducts = () => {
    let newName = prompt("Introduce nombre de producto");

    if (newName !== "") {
      setName([...name, newName]);
    } else {
    }
  };

  return (
    <div className="App">
      <h2>PROPS ENTRE COMPONENTES FUNCIONALES</h2>
      <div className="container">
        <p className="green">Este es el componente padre APP</p>
        <h1>LISTA DE LA COMPRA</h1>

        <div className="container-products">
          <p>Este es el div container-products</p>
          <button onClick={addProducts} className="add-product-button">
            Añadir producto
          </button>
          <List product={name} />
        </div>
      </div>
    </div>
  );
}

export default App;
