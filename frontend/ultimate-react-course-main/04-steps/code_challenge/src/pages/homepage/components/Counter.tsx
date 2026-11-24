import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((curStep) => curStep - 1)}>-</button>
        <span>{`Step: ${step}`}</span>
        <button onClick={() => setStep((curStep) => curStep + 1)}>+</button>
      </div>
      <div>
        <button onClick={handleSubtractCount}>-</button>
        <span>{`Count: ${count}`}</span>
        <button onClick={handleAddCount}>+</button>
      </div>
      <br />
      <span>{count === 0 && `Today's date is ${date.toDateString()}`}</span>
      <span>
        {count < 0 && `${Math.abs(count)} days ago is ${date.toDateString()}`}
      </span>
      <span>
        {count > 0 &&
          `${Math.abs(count)} days from today is ${date.toDateString()}`}
      </span>
    </div>
  );

  function handleAddCount() {
    setCount((curCount) => curCount + step);
  }

  function handleSubtractCount() {
    setCount((curCount) => curCount - step);
  }
}
