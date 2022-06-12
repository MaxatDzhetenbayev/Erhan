import { createContext, useState } from "react";

export const Context = createContext()


const ContextProvider = ({ children }) => {

   const [isAuth, setIsAuth] = useState(false)
   const [currentUser, setCurrentUser] = useState()
   const [cartCount, setCartCount] = useState(0)
   const [productPrice, setProductPrice] = useState(0)

   return (
      <Context.Provider
         value={{
            isAuth,
            setIsAuth,
            currentUser,
            setCurrentUser,
            setCartCount,
            cartCount,
            productPrice,
            setProductPrice,
         }}
      >
         {children}
      </Context.Provider>
   )
}

export default ContextProvider