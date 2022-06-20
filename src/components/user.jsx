import React, { useContext } from "react"
import { myContext } from "../context/myContext";

export const User = () => {
  const { user, setUser } = useContext(myContext);
  
  return (
    <h1 onClick={() => setUser('Yair')}>
      {user}
    </h1>
  )
}