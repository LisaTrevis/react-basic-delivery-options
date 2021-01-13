import React from "react";

const restaurants = ({ places }) => {
  return (
    <div className="restaurant-list">
      {places.map((place) => {
        const { id, name, address, phone, img, price } = place;
        return (
          <article key={id} className="locations">
            <img src={img} alt={name} />
            <header className="location-info">
              <h2>{name}</h2>
              <h3>{address}</h3>
              <h3>{phone}</h3>
              <h3>Price: {price}</h3>
            </header>
          </article>
        );
      })}
    </div>
  );
};

export default restaurants;
