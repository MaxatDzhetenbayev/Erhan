import React from 'react'
import classes from './NewsItem.module.scss'

const NewsItem = ({ data }) => {
   return (
      <div>
         {data
            .map((d) =>
               <div className={classes.news_item} key={d.id}>
                  <p className={classes.news_date}>{d.date}</p>
                  <p className={classes.news_text}>{d.title}</p>
                  <img src={d.img} alt="" className={classes.news_img} />
               </div>
            )}
      </div>
   )
}

export default NewsItem