import Card from "./Card";
import "./Card.css";
function CardList({ desserts, onAddToCart }) {
  return (
    <div className="cardlist">
      {desserts?.map((dessert) => {
        return (
          <Card key={dessert.id} dessert={dessert} onAddToCart={onAddToCart} />
        );
      })}
    </div>
  );
}

export default CardList;

