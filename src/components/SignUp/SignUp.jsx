import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUsers } from '../../store/userSlice'
import cs from './SignUp.module.scss'
import Input from '../Inputs/Input'
import Button from '../Buttons/Button'
import ShowPassword from '../ShowPassword/ShowPassword'


const SignUp = () => {

   const dispatch = useDispatch()
   const usersData = useSelector(state => state.userSlice.user)


   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
   const [name, setName] = useState('')
   const [surname, setSurname] = useState('')
   const [visibleMessage, setVisibleMessage] = useState(false)
   const [message, setMessage] = useState('')
   const [isWarning, setIsWarning] = useState(false)
   const [showPassword, setShowPassword] = useState(false)

   // console.log(usersData.slice(-1).forEach(el => el.id + 1))
   console.log()

   const signUpHandleClick = (e) => {
      e.preventDefault()
      if (login.trim().length === 0 || password.trim().length <= 5) {
         setMessage('Ошибка ввода данных! Попробуйте заново')
         setVisibleMessage(true)
         setIsWarning(true)
      } else if (usersData.find(user => user.login === login)) {
         setMessage('Такой Логин уже существует! Попробуйте заново')
         setVisibleMessage(true)
         setIsWarning(true)
      }
      else {
         const id = usersData[usersData.length - 1].id + 1
         dispatch(addUsers({ id, login, password, name, surname }))
         setMessage('Вы были успешно зарегестрированы')
         setVisibleMessage(true)
         setIsWarning(false)
      }
   }


   const showIsPassword = (e) => {
      e.preventDefault()
      setShowPassword(!showPassword)
   }


   return (
      <div>
         {
            visibleMessage
               ?
               <div style={{ backgroundColor: `${isWarning ? 'rgb(223, 64, 64)' : 'rgb(116, 219, 91)'}` }} className={cs.message}>{message}</div>
               :
               null
         }

         <form className={cs.form}>
            <h2>Логин</h2>
            <Input value={login} placeholder='Введите логин' onchange={setLogin} type={'text'} />
            <h2>Имя</h2>
            <Input value={name} placeholder='Введите имя' onchange={setName} type={'text'} />
            <h2>Фамилия</h2>
            <Input value={surname} placeholder='Введите фамилию' onchange={setSurname} type={'text'} />
            <h2>Пароль</h2>
            <div className={cs.passwordWrapper}>
               <Input value={password} placeholder='Пароль должен состоять больше 5-ти знаков' onchange={setPassword} type={`${showPassword ? 'text' : 'password'}`} />
               <ShowPassword showPassword={showPassword} handleClick={showIsPassword} />
            </div>
            <Button showPassword={setShowPassword} handleClick={signUpHandleClick} value='Регистрация' />
         </form>
      </div>
   )
}

export default SignUp