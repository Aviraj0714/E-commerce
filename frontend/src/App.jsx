import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Cart from './pages/cart'
import Product from './pages/product'
import Login from './pages/login'
import Order from './pages/order'
import Placeorder from './pages/placeorder'
import Collection from './pages/collection'
import Navbar from './components/navbar'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >
      <Navbar></Navbar>
      <Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/about' element={<About></About>}></Route>
<Route path='/collection' element={<Collection></Collection>}></Route>
<Route path='/placeorder' element={<Placeorder></Placeorder>}></Route>
<Route path='/order' element={<Order></Order>}></Route>
<Route path='/login' element={<Login></Login>}></Route>
<Route path='/cart' element={<Cart></Cart>}></Route>
<Route path='/product/:productId' element={<Product></Product>}></Route>
<Route path='/contact' element={<Contact></Contact>}></Route>
</Routes>
    </div>
  )
}

export default App