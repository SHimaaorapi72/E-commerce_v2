import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Login from './pages/Login';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import Contact from './pages/Contact';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';



const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element= {<Home />}  />
        <Route path='/about' element= {<About />}  />
        <Route path='/contact' element= {<Contact />}  />
        <Route path='/cart' element= {<Cart />}  />
        <Route path='/collection' element= {<Collection />}  />
        <Route path='/login' element= {<Login />}  />
        <Route path='/product/:productId' element= {<Product />}  />
        <Route path='/place-order' element= {<PlaceOrder />}  />
        <Route path='/orders' element= {<Orders />}  />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
