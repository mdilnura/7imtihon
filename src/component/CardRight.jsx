import { useSelector } from "react-redux";

function CardRight({ desserts }) {
  const count = useSelector((store) => store.counter.value);
  return (
    <div className="cardRight">
      {count === 0 ? (
        <div>
          <h1>You card ({count})</h1>
        </div>
      ) : (
        <div className="card-right">
          <h1>You card ({count})</h1>
          {desserts.map((dessert) => (
            <div key={dessert.id}>
              <img
                src={dessert.image.thumbnail}
                alt={dessert.name}
                width="50"
              />
              <span>{dessert.name}</span>
              <span>{dessert.price}$</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardRight;
