import React from 'react'
import ItemListContainer from '../back/ItemListContainer'
import Banner from './Banner'
import NavBar from './NavBar'
import Footer from './Footer'
import { Informatio } from './Informatio'
import { Categories } from './categories'
import SliderCustomer from './SliderCustomers'

export const Home = () => {
  return (
    <div>
      <div className='bg-black'>
        <NavBar/>
        <Banner />
        <Categories />
        <SliderCustomer/>
      </div>
        <ItemListContainer/>
        <Informatio/>
        <Footer/>
    </div>
  )
}
export default Home