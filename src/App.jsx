import { useFetch } from "./hooks/useFetch";
import CardList from "./component/CardList";
import CardRight from "./component/CardRight";
import { useState } from "react";

function App() {
  const { data, error, isPending } = useFetch(
    "https://json-api.uz/api/project/dessertss/desserts"
  );
  const [selectedItems, setSelectedItems] = useState([]);
  const handleAddToCart = (item) => {
    setSelectedItems((prev) => [...prev, item]);
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
