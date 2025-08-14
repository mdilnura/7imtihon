

import { useDispatch, useSelector } from "react-redux";
import AddToCard from "./AddToCard";
import "./Card.css";
import { increment } from "../app/features/counterSlice";
import { useState, useEffect } from "react";

function Card({ dessert, onAddToCart }) {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.counter.cart);
  const [localCount, setLocalCount] = useState(0);

  // Agar mahsulot cart ichidan o‘chsa → localCount = 0
  useEffect(() => {
    const exists = cart.some((item) => item.id === dessert.id);
    if (!exists && localCount > 0) {
      setLocalCount(0);
    }
  }, [cart, dessert.id, localCount]);

  const handleAddToCart = () => {
    dispatch(increment(dessert)); // payload sifatida to‘liq dessert
    setLocalCount(localCount + 1);
    onAddToCart({ ...dessert, quantity: localCount + 1 });
  };

  return (
    <div className="card">
      <img className="card__image" src={dessert.image.desktop} alt="" />
      {localCount === 0 ? (
        <button className="card__btn" onClick={handleAddToCart}>
          Add to cart
        </button>
      ) : (
        <AddToCard
          localCount={localCount}
          setLocalCount={setLocalCount}
          dessert={dessert}
        />
      )}
      <p className="card__subtitle">{dessert.category}</p>
      <h3 className="card__title">{dessert.name}</h3>
    </div>
  );
}

export default Card;
