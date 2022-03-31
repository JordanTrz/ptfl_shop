import "./add.css";
import { useRef } from "react";

function Add({setNumberBuy,numberBuy,stock}){

  const numberAdd = useRef();

  const handleClickMinus = (e) => {
    if (numberBuy < 1) return;
    setNumberBuy(numberBuy - 1);
  };

  const handleClickAdd = (e) => {
    if (numberBuy >= stock) return;
    setNumberBuy(numberBuy + 1);
  };

  return(
    <div className="addButton">
        <button className="button btn-1" onClick={handleClickMinus}>-</button>
      <div className="Number">
        <p ref={numberAdd}>{numberBuy}</p>
      </div>
        <button className="button btn-2" onClick={handleClickAdd}>+</button>
    </div>
  )
}

export { Add }