import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopcontext'
import Title from './title';

const Bestseller = () => {
    const {products}=useContext(ShopContext);
    const [bestseller,setBestSeller]=useState([]);
    useEffect(()=>{
        const bestProduct=products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[])
  return (
    <div className='my-10'>
        <div className="text-center text-3xl py-8">
            <Title></Title>
        </div>
    </div>
  )
}

export default Bestseller