
import { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
    </div>
  );
}

export default Counter;