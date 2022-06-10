import React from 'react'
import classes from './AboutItem.module.scss'

const AboutItem = ({ aboutList }) => {
   return (
      <div className={classes.aboutWrapper}>
         {aboutList
            .map((list) =>
               <div key={list.title} className={classes.aboutItem}>
                  <div className={classes.img}>
                     {list.img}
                  </div>
                  <div className={classes.aboutInner}>
                     <h3>{list.title}</h3>
                     <p>{list.text}</p>
                  </div>
               </div>)}
      </div>
   )
}

export default AboutItem