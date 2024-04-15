import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleDecreaseCount(e) {
    e.preventDefault();
    setCount((current) => current - step);
  }

  function handleIncreaseCount(e) {
    e.preventDefault();
    setCount((current) => current + step);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={handleDecreaseCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            e.preventDefault();
            setCount(Number(e.target.value));
          }}
        />
        <button onClick={handleIncreaseCount}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
              ? `${count} days fro today is`
              : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          {" "}
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
