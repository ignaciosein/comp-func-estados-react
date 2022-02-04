import React from "react";
import "./List.css";
const List = (props) => {
  return (
    <div className="container-list">
      <p className="red">Este es el componente LIST</p>
      <ul>
        <li> Producto : Tomate ✔️</li>
        <li> Producto : Manzana ✔️</li>
        {props.product
          ? props.product.map((prod, i) => <li> Producto : {prod} ✔️</li>)
          : ""}
      </ul>
    </div>
  );
};

export default List;
