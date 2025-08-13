import { useFetch } from "./hooks/useFetch";
import CardList from "./component/CardList";
import CardRight from "./component/CardRight";
import { useState } from "react";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const { data, error, isPending } = useFetch(
    "https://json-api.uz/api/project/dessertss/desserts"
  );
  
  const handleAddToCart = (item, localCount) => {
    setSelectedItems((prev) => [...prev, {...item, quantity:localCount}]);
  };
  return (
    <div className="app">
      <div className="dessert">
        {error && <h2 className="error">{error}</h2>}
        {isPending && <h3 className="loader">Loading...</h3>}
        {data && (
          <CardList desserts={data.data} onAddToCart={handleAddToCart} />
        )}
      </div>
      {selectedItems.length > 0 && <CardRight desserts={selectedItems} />}
    </div>
  );
}

export default App;
