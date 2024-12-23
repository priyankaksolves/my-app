import { useState } from 'react';
import MemoChild from './MemoChild'

const MemoParent = () => {
    const [count, setCount] = useState(0);

  return (
    <div>
      <MemoChild p = {'xyz'}></MemoChild>
            <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}> Increment - Parent </button>
    </div>
  )
}

export default MemoParent