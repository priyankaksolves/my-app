import Child from './Child'

const Parent = () => {
  return (
    <div>
      <span>I'm Parent Component</span>
      <Child msg={'This message is from Parent'}></Child>
    </div>
  )
}

export default Parent