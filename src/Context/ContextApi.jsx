"use client"
import React, { createContext, useState } from 'react'
export const productContext = createContext()
function ContextApi({children}) {
    const [currentUser, setCurrentUser] = useState("")
  return (
<productContext.Provider value={[currentUser, setCurrentUser]}>
    {children}
</productContext.Provider>
)
}

export default ContextApi