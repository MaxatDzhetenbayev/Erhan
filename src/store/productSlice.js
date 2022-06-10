import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
   name: 'product',
   initialState: {
      currentProduct: null,
      product: [
         {
            id: 1,
            title: 'Запчасти ТО',
            items: [
               {
                  id: 1,
                  title: 'VAG Диск тормозной вентилируемый',
                  stock: 'Алматы',
                  quantity: '10',
                  price: '2800',
                  img: '/image/products/spares/spare_1.jpg'
               },
               {
                  id: 2,
                  title: 'VAG Диск тормозной задний',
                  stock: 'Ctvtq',
                  quantity: '4',
                  price: '3100',
                  img: '/image/products/spares/spare_2.jpg'
               },
               {
                  id: 3,
                  title: 'VAG Диск тормозной задний',
                  stock: 'Семей',
                  quantity: '2',
                  price: '3050',
                  img: '/image/products/spares/spare_3.jpg'
               },
               {
                  id: 4,
                  title: 'VAG Диск тормозной передний',
                  stock: 'Семей',
                  quantity: '13',
                  price: '3228',
                  img: '/image/products/spares/spare_4.jpg'
               },
               {
                  id: 5,
                  title: 'VAG Диск тормозной передний',
                  stock: 'Семей',
                  quantity: '19',
                  price: '3524',
                  img: '/image/products/spares/spare_5.jpg'
               },
               {
                  id: 6,
                  title: 'VAG Колодки тормозные задние комплект',
                  stock: 'Семей',
                  quantity: '16',
                  price: '3228',
                  img: '/image/products/spares/spare_6.jpg'
               },
               {
                  id: 7,
                  title: 'VAG Колодки тормозные передние комплект',
                  stock: 'Караганды',
                  quantity: '3',
                  price: '3856',
                  img: '/image/products/spares/spare_7.jpg'
               },
               {
                  id: 8,
                  title: 'VAG Колодки тормозные передние комплект',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/spares/spare_8.jpg'
               },
               {
                  id: 9,
                  title: 'VAG Пробка сливная картера двигателя',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/spares/spare_9.jpg'
               },
               {
                  id: 10,
                  title: 'VAG Фильтр воздушный',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/spares/spare_10.jpg'
               },
               {
                  id: 11,
                  title: 'VAG Фильтр масляный',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/spares/spare_11.jpg'
               },
               {
                  id: 12,
                  title: 'VAG Фильтр салона',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/spares/spare_12.jpg'
               },
               {
                  id: 13,
                  title: 'BMW Колодки тормозные передние комплект',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/spares/spare_13.jpg'
               },
               {
                  id: 14,
                  title: 'BMW Прокладка сливной пробки картера двигателя',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/spares/spare_14.jpg'
               },
            ]
         },
         {
            id: 2,
            title: 'Шины',
            items: [
               {
                  id: 1,
                  title: 'Шина зимняя шип. X-Ice North Xin3 XL 235/55R17 103T',
                  stock: 'Алматы',
                  quantity: '10',
                  price: '2800',
                  img: '/image/products/tires/tire_1.jpg'
               },
               {
                  id: 2,
                  title: 'Шина летняя M 275/70R16 114H Michelin LATITUDE TOUR HP',
                  stock: 'Ctvtq',
                  quantity: '4',
                  price: '3100',
                  img: '/image/products/tires/tire_2.jpg'
               },
               {
                  id: 3,
                  title: 'Шина зимняя SnowPro B2 245/40R18 97V',
                  stock: 'Семей',
                  quantity: '2',
                  price: '3050',
                  img: '/image/products/tires/tire_3.jpg'
               },
               {
                  id: 4,
                  title: 'Шина летняя Primacy 3 ZP 205/55R17 91W',
                  stock: 'Семей',
                  quantity: '13',
                  price: '3228',
                  img: '/image/products/tires/tire_4.jpg'
               },
               {
                  id: 5,
                  title: 'Шина зимняя Latitude X-Ice 2 245/50R20 102T',
                  stock: 'Семей',
                  quantity: '19',
                  price: '3524',
                  img: '/image/products/tires/tire_5.jpg'
               },
               {
                  id: 6,
                  title: 'Шина летняя Syneris XL 205/55R16 94V',
                  stock: 'Семей',
                  quantity: '16',
                  price: '3228',
                  img: '/image/products/tires/tire_6.jpg'
               },
               {
                  id: 7,
                  title: 'Шина летняя Agilis + 205/65R16 104/105T',
                  stock: 'Караганды',
                  quantity: '3',
                  price: '3856',
                  img: '/image/products/tires/tire_7.jpg'
               },
               {
                  id: 8,
                  title: 'Шина летняя Agilis + 205/65R16 104/105T',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/tires/tire_8.jpg'
               },
               {
                  id: 9,
                  title: 'Шина зимняя шип. Latitude X-Ice North 2+ XL 265/60R18 114T',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/tires/tire_9.jpg'
               },
               {
                  id: 10,
                  title: 'Шина летняя Primacy 3 XL 215/45R16 90V',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/tires/tire_10.jpg'
               },
               {
                  id: 11,
                  title: 'Шина летняя Pilot Super Sport XL 265/40R19 102Y',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/tires/tire_11.jpg'
               },
               {
                  id: 12,
                  title: 'Шина летняя Pilot Super Sport XL 265/40R19 102Y',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/tires/tire_12.jpg'
               },
               {
                  id: 13,
                  title: 'Шина летняя Latitude Cross XL 225/75R16 108H',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/tires/tire_13.jpg'
               },
               {
                  id: 14,
                  title: 'Шина летняя Latitude Cross XL 225/75R16 108H',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/tires/tire_14.jpg'
               },
               {
                  id: 15,
                  title: 'Шина летняя Mud Terrain T/A KM2 LT 12.5R17 116Q',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/tires/tire_15.jpg'
               },
               {
                  id: 16,
                  title: 'Шина зимняя Pilot Alpin PA4 XL 245/40R17 95V',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/tires/tire_16.jpg'
               },
            ]
         },
         {
            id: 3,
            title: 'Масла',
            items: [
               {
                  id: 1,
                  title: 'Моторное масло TEXACO Havoline Extra 10W-40 1L',
                  stock: 'Алматы',
                  quantity: '10',
                  price: '2800',
                  img: '/image/products/oils/oil_1.jpg'
               },
               {
                  id: 2,
                  title: 'FEBI Моторное масло 10W-40 1L',
                  stock: 'Ctvtq',
                  quantity: '4',
                  price: '3100',
                  img: '/image/products/oils/oil_2.jpg'
               },
               {
                  id: 3,
                  title: 'Моторное масло AFINOL UNITECH SAE 10W-40, 1L',
                  stock: 'Семей',
                  quantity: '2',
                  price: '3050',
                  img: '/image/products/oils/oil_3.jpg'
               },
               {
                  id: 4,
                  title: 'Моторное масло AFINOL EXTREME SAE 5W-40, 1L',
                  stock: 'Семей',
                  quantity: '13',
                  price: '3228',
                  img: '/image/products/oils/oil_4.jpg'
               },
               {
                  id: 5,
                  title: 'Моторное масло AFINOL EXTREME SAE 5W-30, 1L',
                  stock: 'Семей',
                  quantity: '19',
                  price: '3524',
                  img: '/image/products/oils/oil_5.jpg'
               },
               {
                  id: 6,
                  title: 'Моторное масло TEXACO Havoline Extra 10W-40 1L',
                  stock: 'Семей',
                  quantity: '16',
                  price: '3228',
                  img: '/image/products/oils/oil_6.jpg'
               },
               {
                  id: 7,
                  title: 'FEBI Моторное масло 5W-30 Long Life 1L',
                  stock: 'Караганды',
                  quantity: '3',
                  price: '3856',
                  img: '/image/products/oils/oil_7.jpg'
               },
               {
                  id: 8,
                  title: 'Моторное масло TEXACO Havoline ProDS V 5W-30 1L',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/oils/oil_8.jpg'
               },
            ]
         },
         {
            id: 4,
            title: 'Аксессуары',
            items: [
               {
                  id: 1,
                  title: 'Ионизатор воздуха в прикуриватель 12В',
                  stock: 'Алматы',
                  quantity: '10',
                  price: '2800',
                  img: '/image/products/accessories/accessories_1.jpg'
               },
               {
                  id: 2,
                  title: 'Кипятильник автомобильный от прикуривателя 12В',
                  stock: 'Ctvtq',
                  quantity: '4',
                  price: '3100',
                  img: '/image/products/accessories/accessories_2.jpg'
               },
               {
                  id: 3,
                  title: 'Обогреватель в салон от прикуривателя 12В 150Вт',
                  stock: 'Семей',
                  quantity: '2',
                  price: '3050',
                  img: '/image/products/accessories/accessories_3.jpg'
               },
               {
                  id: 4,
                  title: 'Термокружка (чайник автомобильный) 450 мл',
                  stock: 'Семей',
                  quantity: '13',
                  price: '3228',
                  img: '/image/products/accessories/accessories_4.jpg'
               },
               {
                  id: 5,
                  title: 'Термометр цифровой с выносным датчиком',
                  stock: 'Семей',
                  quantity: '19',
                  price: '3524',
                  img: '/image/products/accessories/accessories_5.jpg'
               },
               {
                  id: 6,
                  title: 'Чайник автомобильный 12В',
                  stock: 'Семей',
                  quantity: '16',
                  price: '3228',
                  img: '/image/products/accessories/accessories_6.jpg'
               },
               {
                  id: 7,
                  title: 'Чайник автомобильный 12В серый пластик',
                  stock: 'Караганды',
                  quantity: '3',
                  price: '3856',
                  img: '/image/products/accessories/accessories_7.jpg'
               },
               {
                  id: 8,
                  title: 'Чайник автомобильный 24В белый/серый пластик',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/accessories/accessories_8.jpg'
               },
               {
                  id: 9,
                  title: 'Автокипятильник 12 В (200 Вт 90 см кабель)',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/accessories/accessories_9.jpg'
               },
               {
                  id: 10,
                  title: 'Автокипятильник 24 В (200 Вт 90 см кабель)',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/accessories/accessories_10.jpg'
               },
               {
                  id: 11,
                  title: 'Миникофеварка, (12V 0.4л) 2 чашки и 1 фильтр для кофе',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/accessories/accessories_11.jpg'
               },
               {
                  id: 12,
                  title: 'Миникофеварка, (24V 0.4л) 2 чашки и 1 фильтр для кофе',
                  stock: 'Алматы',
                  quantity: '5',
                  price: '4290',
                  img: '/image/products/accessories/accessories_12.jpg'
               },
            ]
         }
      ],
   },
   reducers: {
      setCurrentProduct(state, action) {
         state.currentProduct = action.payload
      }
   }
})

export const { setCurrentProduct } = productSlice.actions
export default productSlice.reducer