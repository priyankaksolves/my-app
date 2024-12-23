import { useState } from "react";

const ProfilerComponnet = () => {

    const [counter, setCounter] = useState(0);

    const handleClick = ()=>{
        setTimeout(()=>{
            setCounter(counter + 1);
        }, 3000);
    }
  return (
   <>
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick = {handleClick}>Increament</button>
    </div></>
  )
}

export default ProfilerComponnet
