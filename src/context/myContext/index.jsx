import React, { useState, useMemo } from "react";

export const myContext = React.createContext();

export const MyContextProvider = (props) => {
  const [user, setUser] = useState('Cristian');

  const value = useMemo(() => ({
    user,
    setUser
  }), [user])

  return <myContext.Provider
    value={value}
    {...props}
  />
}