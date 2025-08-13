import React from "react";
import { useSelector } from "react-redux";

function CardRight({ desserts }) {
  if (!desserts || desserts.length === 0) return null;
  const count = useSelector((store) => store.counter.value);

  return (
    <div className="cardRight">
      <h1>Your cart ({count})</h1>
      {desserts.map((dessert) => (
        <div key={dessert.id} className="cart-item">
          <img src={dessert.image.thumbnail} alt={dessert.name} width="50" />
          <p>
            {dessert.quantity} * {dessert.price}$
          </p>
          <span>{dessert.name}</span>
          <span>{dessert.price * dessert.quantity}$</span>
        </div>
      ))}
    </div>
  );
}

export default CardRight;
