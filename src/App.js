import React, { useState } from "react";
import list from "./list";
import Categories from "./Categories";
import Restaurants from "./Restaurants";

function App() {
  const [locations, setLocations] = useState(list);
  const categories = [
    "all",
    ...new Set(list.map((listItem) => listItem.category)),
  ];

  const filterItems = (category) => {
    if (category === "all") {
      setLocations(list);
      return;
    }
    const newItems = list.filter((listItem) => listItem.category === category);
    setLocations(newItems);
  };
  return (
    <main>
      <section>
        <div>
          <h1>Delivery Options</h1>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Restaurants places={locations} />
      </section>
    </main>
  );
}

export default App;
