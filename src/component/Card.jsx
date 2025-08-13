import { useDispatch } from "react-redux";
import AddToCard from "./AddToCard";
import "./Card.css";
import { increment } from "../app/features/counterSlice";
import { useState } from "react";

function Card({ dessert, onAddToCart }) {
  const dispatch = useDispatch();
  const [localCount, setLocalCount] = useState(0);
  const handleAddToCart = () => {
    dispatch(increment());
    setLocalCount(1);
    onAddToCart(dessert);
  };

  return (
    <div className="card">
      <img className="card__image" src={dessert.image.thumbnail} alt="" />
      {localCount === 0 ? (
        <button onClick={handleAddToCart}>Add to cart</button>
      ) : (
        <AddToCard localCount={localCount} setLocalCount={setLocalCount} />
      )}

      <p className="card__subtitle">{dessert.category}</p>
      <h3 className="card__title">{dessert.name}</h3>
      <p className="card__price">{dessert.price}$</p>
    </div>
  );
}

export default Card;
