import React from "react";
import { useSelector } from "react-redux";
import "./CardRight.css";
function CardRight({ desserts }) {
  if (!desserts || desserts.length === 0) return null;
  const count = useSelector((store) => store.counter.value) || 0;

  return (
    <div className="cardRight">
      {count === 0 ? (
        <div>
          <h1>Your cart ({count})</h1>
        </div>
      ) : (
        <div>
          <h1>Your cart ({count})</h1>
          {desserts.map((dessert) => (
            <div key={dessert.id} className="cart-item">
              <img
                src={dessert.image.thumbnail}
                alt={dessert.name}
                className="cardright__img"
              />
              <div>
                <span>{dessert.name}</span>
                <br />
                <span>{dessert.price * dessert.quantity}$</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardRight;
