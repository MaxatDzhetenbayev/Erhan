import React from 'react'
import NewsItem from '../../components/NewsItem/NewsItem'
import classes from './News.module.scss'

const newsData = [
   { id: 1, date: '18.03.2021', title: 'Приглашаем к сотрудничеству инициативных людей по орнанизации точки выдачи заказов', img: '' },
   { id: 2, date: '', title: '', img: '' },

]



const News = () => {
   return (
      <div className={classes.news}>
         <div className='wrapper'>
            <h1> Новости</h1>

            <div className={classes.news_wrapper}>
               <NewsItem data={newsData} />
            </div>
         </div>
      </div>
   )
}

export { News }