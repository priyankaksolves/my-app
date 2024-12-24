import { createContext } from "react"
import Delhi from "./Delhi"

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext('');

const Banglore = () => {

    const user = "Priyanka";

  return (
    <div className="box">
      <h1>Banglore - {user}</h1>

      <UserContext.Provider value={user}>
            <Delhi/>
      </UserContext.Provider>
    </div>
  )
}

export default Banglore
