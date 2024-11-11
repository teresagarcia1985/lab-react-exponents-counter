// App.jsx
import React, { useState } from "react";
import Counter from "./Counter";
import ExponentTwo from "./ExponentTwo";
import ExponentThree from "./ExponentThree";
import ExponentFour from "./ExponentFour";
import ExponentFive from "./ExponentFive";
import ExponentSix from "./ExponentSix";

export default function App() {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <Counter count={count} increment={increment} decrement={decrement} />

      <ExponentTwo count={count} />
      <ExponentThree count={count} />
      <ExponentFour count={count} />
      <ExponentFive count={count} />
      <ExponentSix count={count} />
    </div>
  );
}
