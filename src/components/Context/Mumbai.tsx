import { useContext } from "react"
import { UserContext } from "./Banglore"

const Mumbai = () => {

    const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>Mumbai - {user}</h1>
    </div>
  )
}

export default Mumbai
