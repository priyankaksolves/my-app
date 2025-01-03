import { useMemo, useState } from "react"

const initialItems = new Array(29_999_999).fill(0).map((_, i) => ({
    id: i,
    isSelected: i === 29_999_998
}));

const UseMemo = () => {

    const [count, setCount] = useState(0);

    const [items] = useState(initialItems);
    const selectedItem = useMemo(() => items.find((item) => item.isSelected), [items]);
    // const selectedItem = items.find((item) => item.isSelected);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}> Increment </button>
    </div>
  )
}

export default UseMemo
