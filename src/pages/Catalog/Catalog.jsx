import React from 'react'
import AboutItem from '../../components/AboutItem/AboutItem'
import Contacts from '../../components/Contacts/Contacts'
import Spares from '../../components/Spares/Spares'
import classes from './Catalog.module.scss'

const catalogList = [
   {
      id: 1,
      title: 'Запчасти ТО',
      img: 'image/catalogs/catalog_1.jpg'
   },
   {
      id: 2,
      title: 'Шины и Диски',
      img: 'image/catalogs/catalog_2.jpg'
   },
   {
      id: 3,
      title: 'Масла',
      img: 'image/catalogs/catalog_3.jpg'
   },
   {
      id: 4,
      title: 'Аксессуары',
      img: 'image/catalogs/catalog_4.jpg'
   },
]

const aboutList = [
   {
      id: 1,
      title: 'Быстрая доставка',
      text: 'Доставим товар в течение 5 дней удобным для вас способом',
      img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612"><path d="M368 0C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48C0 21.49 21.49 0 48 0H368zM416 160V256H544V237.3L466.7 160H416zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z" /></svg>

   },
   {
      id: 2,
      title: 'Гарантия',
      text: 'Товар только от проверенных поставщиков',
      img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 712 512"><path d="M256-.0078C260.7-.0081 265.2 1.008 269.4 2.913L457.7 82.79C479.7 92.12 496.2 113.8 496 139.1C495.5 239.2 454.7 420.7 282.4 503.2C265.7 511.1 246.3 511.1 229.6 503.2C57.25 420.7 16.49 239.2 15.1 139.1C15.87 113.8 32.32 92.12 54.3 82.79L242.7 2.913C246.8 1.008 251.4-.0081 256-.0078V-.0078z" /></svg>
   },
   {
      id: 3,
      title: 'Скидки',
      text: 'После покупки любого товара - скидочная карта 5%',
      img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 512"><path d="M374.6 73.39c-12.5-12.5-32.75-12.5-45.25 0l-320 320c-12.5 12.5-12.5 32.75 0 45.25C15.63 444.9 23.81 448 32 448s16.38-3.125 22.62-9.375l320-320C387.1 106.1 387.1 85.89 374.6 73.39zM64 192c35.3 0 64-28.72 64-64S99.3 64.01 64 64.01S0 92.73 0 128S28.7 192 64 192zM320 320c-35.3 0-64 28.72-64 64s28.7 64 64 64s64-28.72 64-64S355.3 320 320 320z" /></svg>
   },
]

const Catalog = () => {
   return (
      <section className={classes.catalog}>
         <div className='wrapper'>
            <h1 className={classes.title}>Магазин Автозапчастей</h1>
            <div className={classes.preview}>
               <div className={classes.info}>
                  <h2>Твой интернет-магазин автозапчастей.</h2>
               </div>
            </div>

            <div className={classes.spares}>
               <Spares catalogList={catalogList} />
            </div>

            <div className={classes.aboutUs}>
               <AboutItem aboutList={aboutList} />
            </div>

            <div className={classes.contacts}>
               <Contacts />
            </div>

         </div>
      </section>
   )
}

export { Catalog }