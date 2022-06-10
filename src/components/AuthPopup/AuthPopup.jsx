import React, { useContext, useState } from 'react'
import cs from './AuthPopup.module.scss'
import { ImCross } from 'react-icons/im'
import { useSelector } from 'react-redux'
import { Context } from '../../Context/Context'

const AuthPopup = () => {


   const currentUser = useSelector(state => state.userSlice.currentUser)
   const { isAuth } = useContext(Context)
   const [visiblePopup, setVisiblePopup] = useState(true)


   const popupHandleClick = () => {
      setVisiblePopup(false)
      console.log(visiblePopup)
   }

   return (
      <div className={cs.root} style={{ visibility: `${isAuth && visiblePopup ? 'visible' : 'hidden'}` }}>
         <div className={cs.wrapperCross} >
            <ImCross className={cs.cross} onClick={popupHandleClick} />
         </div>
         <h4>{currentUser.name}, Вы успешно вошли!</h4>
      </div >
   )

}




export default AuthPopup