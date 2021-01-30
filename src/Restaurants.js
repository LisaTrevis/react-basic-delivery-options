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
              <h4>{address}</h4>
              <h4>{phone}</h4>
              <h4>Price: {price}</h4>
            </header>
          </article>
        );
      })}
    </div>
  );
};

export default restaurants;
