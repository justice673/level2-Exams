"use client"
import React, { createContext, useState } from 'react'
export const productContext = createContext();
function ContextApi({children}) {
    const [currentUser, setCurrentUser] = useState("")
    const [selected, setSelected] = useState([])
  return (
<productContext.Provider value={[currentUser, setCurrentUser,selected, setSelected]}>
    {children}
</productContext.Provider>
)
}

export default ContextApi