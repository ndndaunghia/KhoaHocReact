import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./store/couter";

export default function Admin() {
  const count = useSelector((state) => state.couter.count);
  const dispatch = useDispatch();

  const onDecrease = () => {
    dispatch(decrease())
  }

  const onInCrease = () => {
    dispatch(increase(10))
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={onDecrease}>-</button>
      <button onClick={onInCrease}>+</button>
    </div>
  );
}
