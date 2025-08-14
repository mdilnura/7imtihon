





// import React from "react";
// import { useSelector, useDispatch } from "react-redux"; 
// import "./CardRight.css";
// import { deleteItem } from "../app/features/counterSlice";

// function CardRight() {
//   const dispatch = useDispatch(); 
//   const { value: count, cart } = useSelector((store) => store.counter);

//   // Umumiy narx
//   const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

//   if (count === 0) {
//     return (
//       <div className="cardRight">
//         <h1>Your cart (0)</h1>
//         <p>Cart is empty</p>
//       </div>
//     );
//   }

//   return (
//     <div className="cardRight"> 
//       <h1>Your cart ({count})</h1>
//       {cart.map((dessert, index) => (
//         <div key={index} className="cart-item">
//           <img
//             src={dessert.image.desktop}
//             alt={dessert.name}
//             className="cardright__img"
//           />
//           <div>
//             <span>{dessert.name}</span>
//             <br />
//             <span>$ {dessert.price}</span>
//           </div>
//           <button onClick={() => dispatch(deleteItem(dessert.id))}>X</button>
//         </div>
//       ))}

//       <div className="cart-total">
//         <strong>Total:</strong> ${totalPrice.toFixed(2)}
//       </div>
//     </div>
//   );
// }

// export default CardRight;





import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import "./CardRight.css";
import { deleteItem } from "../app/features/counterSlice";

function CardRight() {
  const dispatch = useDispatch(); 
  const { value: count, cart } = useSelector((store) => store.counter);

  // Umumiy narx (price * quantity)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (count === 0) {
    return (
      <div className="cardRight">
        <h1>Your cart (0)</h1>
        <p>Cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cardRight"> 
      <h1>Your cart ({count})</h1>
      {cart.map((dessert) => (
        <div key={dessert.id} className="cart-item">
          <img
            src={dessert.image.desktop}
            alt={dessert.name}
            className="cardright__img"
          />
          <div>
            <span>{dessert.name}</span>
            <br />
            <span>$ {dessert.price} × {dessert.quantity}</span>
          </div>
          <button onClick={() => dispatch(deleteItem(dessert.id))}>X</button>
        </div>
      ))}

      <div className="cart-total">
        <strong>Total:</strong> ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default CardRight;
