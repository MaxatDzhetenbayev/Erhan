import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'
import { addCurrentUser } from '../../store/userSlice'
import Button from '../Buttons/Button'
import Input from '../Inputs/Input'
import cs from './SignIn.module.scss'
import ShowPassword from '../ShowPassword/ShowPassword'

const SignIn = () => {

   const users = useSelector(state => state.userSlice.user)
   const { setIsAuth } = useContext(Context)
   const navigate = useNavigate()
   const dispatch = useDispatch()


   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState(false)
   const [showPassword, setShowPassword] = useState(false)


   const signInHandleClick = (e) => {
      e.preventDefault()
      users.forEach(elem => {
         if (login == elem.login && password == elem.password) {
            dispatch(addCurrentUser({ id: elem.id, login, password, name: elem.name, surname: elem.surname, cart: elem.cart, }))
            navigate('/')
            setError(false)
            setIsAuth(true)
         } else {
            setLogin('')
            setPassword('')
            setError(true)
         }
      });
   }



   const showIsPassword = (e) => {
      e.preventDefault()
      setShowPassword(!showPassword)
   }

   return (
      <div className={cs.root}>
         <form className={cs.form}>
            {
               error
                  ?
                  <div style={{ color: 'red' }}>Ошибка, некорректный логин или пароль</div>
                  :
                  null
            }
            <h2>Логин</h2>
            <Input value={login} placeholder='Введите логин' onchange={setLogin} type={'text'} />
            <h2>Пароль</h2>
            <div className={cs.passwordWrapper}>
               <Input value={password} placeholder='Введите пароль' onchange={setPassword} type={`${showPassword ? 'text' : 'password'}`} />
               <ShowPassword showPassword={showPassword} handleClick={showIsPassword} />
            </div>
            <Button value='Войти' handleClick={signInHandleClick} />
         </form>
      </div>
   )
}

export default SignIn