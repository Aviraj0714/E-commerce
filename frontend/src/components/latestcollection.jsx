import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/shopcontext';
import Title from './title';
import Productitem from './productitem';

const Latestcollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]); // added 'products' as a dependency

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={"COLLECTION"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Explore our latest collection and elevate your style with premium products at unbeatable prices!
                </p>
            </div>
           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((items, index) => (
            <Productitem key={index}id={items._id} image={items.image} name={items.name} price={items.price}></Productitem>
          ))
        }
        </div>
        </div>

    );
}

export default Latestcollection;
