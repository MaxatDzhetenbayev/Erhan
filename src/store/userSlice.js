import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
   name: 'user',
   initialState: {
      user: [
         { id: 1, login: 'maxat', password: '18092002m', name: 'Maxat', surname: 'Dzhetenbayev' },
         { id: 2, login: 'erkow', password: '12345678e', name: 'Erkebulan', surname: 'Maratov' },
         { id: 3, login: 'madi', password: '321654987m', name: 'Madi', surname: 'Berdiarov' },
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
         })
      },
      addCurrentUser(state, actions) {
         state.currentUser = {
            id: actions.payload.id,
            login: actions.payload.login,
            password: actions.payload.password,
            name: actions.payload.name,
            surname: actions.payload.surname,
         }
      }

   }
})


export const { addUsers, addCurrentUser } = userSlice.actions

export default userSlice.reducer