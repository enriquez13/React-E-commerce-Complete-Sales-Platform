import React from 'react'
import ItemListContainer from '../back/ItemListContainer'
import Banner from './Banner'
import { Categories } from './Categories'


export const Home = () => {
  return (
    <div>
      <div className='bg-black '>
        <Banner />
        <Categories />
      </div>
      <ItemListContainer />
    </div>
  )
}
export default Home