import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/shopcontext'
import Title from './title';

const Latestcollection = () => {
    const {products}=useContext(ShopContext);
  return (
    <div className=' my-10'>
        <div className=' text-center py-8 text-3xl'>
<Title text1={'LATEST'} text2={"COLLECTION"}></Title>
<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Explore our latest collection and elevate your style with premium products at unbeatable prices!</p>
        </div>
    </div>
  )
}

export default Latestcollection