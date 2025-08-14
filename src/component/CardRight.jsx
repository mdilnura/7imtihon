import React from "react";
import { useSelector, useDispatch } from "react-redux"; // dispatch ham qo‘shildi
import "./CardRight.css";
import { deleteItem } from "../app/features/counterSlice";

function CardRight({ desserts }) {
  const dispatch = useDispatch(); // dispatch hook
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
                src={dessert.image.desktop}
                alt={dessert.name}
                className="cardright__img"
              />
              <div>
                <span>{dessert.name}</span>
                <br />
                <span>$ {dessert.price}</span>
              </div>
              <button onClick={() => dispatch(deleteItem(dessert.id))}>X</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardRight;
