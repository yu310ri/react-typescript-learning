import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment: () => void = () => {
    setCount(count + 1);
  };

  const decrement: () => void = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
