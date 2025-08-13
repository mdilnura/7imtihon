import { useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/counterSlice";

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
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{localCount}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default AddToCard;
