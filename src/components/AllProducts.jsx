import React from "react";

export default function AllProducts({ products, handleSold, handleDelete }) {
  return (
    <div>
      {products.map((item, i) => (
        <div key={i} className="box">
          <h2> {item.productName} </h2>
          <img src={item.image} alt={item.productName} />
          <h3> {item.price} </h3>
          <button onClick={() => handleSold(i)}>sold</button>
          <p> sold? {item.sold ? "Yes" : "No"} </p>
          <button onClick={() => handleDelete(i)}> delete </button>
        </div>
      ))}
    </div>
  );
}
