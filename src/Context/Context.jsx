import { createContext, useState } from "react";

export const Context = createContext()


const ContextProvider = ({ children }) => {

   const [isAuth, setIsAuth] = useState(false)
   const [currentUser, setCurrentUser] = useState()

   return (
      <Context.Provider
         value={{
            isAuth,
            setIsAuth,
            currentUser,
            setCurrentUser
         }}
      >
         {children}
      </Context.Provider>
   )
}

export default ContextProvider