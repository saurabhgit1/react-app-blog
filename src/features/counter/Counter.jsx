import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmt, reset } from "./counterSlice";

function Counter() {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState(0);
  const resetAll = () => {
    setInputVal(0);
    dispatch(reset());
  };
  return (
    <div>
      Counter: {counter}
      <input
        type="number"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        value={inputVal}
      />
      <button onClick={() => dispatch(incrementByAmt(inputVal))}>
        Increment By {inputVal}
      </button>
      <button onClick={resetAll}>Reset</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
