import "./fruits.css";
import { Add } from "../3-2_add/add";
import { useState } from "react";
// import Fruta from '../img/fruit.png';

function Fruits(props) {
  let { name, price, stock, photo } = props.fruta;

  const [numberBuy, setNumberBuy] = useState(0);

  return (
    <div className="Fruits">
      <img src={photo} alt="Fruta" />
      <p>{name}</p>
      <p className="pNewColor">Kilo S/ {price}</p>
      <p>{stock - numberBuy}</p>
      <Add
        setNumberBuy={setNumberBuy}
        numberBuy={numberBuy}
        stock={stock}
      />
    </div>
  );
}

export { Fruits };
