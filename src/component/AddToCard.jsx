import { useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/counterSlice";
import "./AddToCard.css";
function AddToCard({ localCount, setLocalCount }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    setLocalCount(localCount + 1);
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setLocalCount(localCount - 1);
  };

  return (
    <div className="tocard">
      <button className="addtocard__btn" onClick={handleDecrement}>
        &#8722;
      </button>
      <span>{localCount}</span>
      <button className="addtocard__btn" onClick={handleIncrement}>
        &#43;
      </button>
    </div>
  );
}

export default AddToCard;
