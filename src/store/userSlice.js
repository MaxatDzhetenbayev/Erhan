import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
   name: 'user',
   initialState: {
      user: [
         {
            id: 1,
            login: 'maxat',
            password: '18092002m',
            name: 'Maxat',
            surname: 'Dzhetenbayev',
            cart: [],
         },
         {
            id: 2,
            login: 'erkow',
            password: '12345678e',
            name: 'Erkebulan',
            surname: 'Maratov',
            cart: [],
         },
         {
            id: 3,
            login: 'madi',
            password: '321654987m',
            name: 'Madi',
            surname: 'Berdiarov',
            cart: [],
         },
      ],
      currentUser: {},
   },
   reducers: {
      addUsers(state, actions) {
         state.user.push({
            login: actions.payload.login,
            password: actions.payload.password,
            name: actions.payload.name,
            surname: actions.payload.surname,
            id: actions.payload.id,
            cart: [],
         })
      },
      addCurrentUser(state, actions) {
         state.currentUser = {
            id: actions.payload.id,
            login: actions.payload.login,
            password: actions.payload.password,
            name: actions.payload.name,
            surname: actions.payload.surname,
            cart: actions.payload.cart,
         }
      },
      addUserProduct(state, actions) {
         state.currentUser.cart.push({
            id: actions.payload.id,
            title: actions.payload.title,
            price: actions.payload.price,
            img: actions.payload.img,
         })
      },
      deleteProduct(state, actions) {
         state.currentUser.cart = state.currentUser.cart.filter(elem => elem.id != actions.payload.id)

      }

   }
})


export const { addUsers, addCurrentUser, addUserProduct, deleteProduct } = userSlice.actions

export default userSlice.reducer