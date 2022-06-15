import React, { useState } from "react";

import "./Card.css";

const Card = ({ item, activeCard, setActiveCard }) => {
  // console.log(item);
  const [like, setLike] = useState(false);
  return (
    <div
      style={{
        border: activeCard === item.id ? "5px solid black" : "none",
        padding: "40px",
      }}
      onClick={() => setActiveCard(item.id)}>
      <h2>{item.model}</h2>
      <img className="car-image" src={item.image} alt="" />
      <div>
        {like ? (
          <img
            onClick={() => setLike(!like)}
            alt="like"
            width="50px"
            src="https://i.pinimg.com/736x/ea/a2/67/eaa2670e1f4d9f61a1bbb3a9b31ece30.jpg"
          />
        ) : (
          <img
            onClick={() => setLike(!like)}
            alt="like"
            width="50px"
            src="https://icones.pro/wp-content/uploads/2021/04/icone-noire-rouge.png"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
