import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { shopContext } from '../context/ShopContext';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const {setShowSearch , getCartCount} = useContext(shopContext)

    return (
        <div>


            <nav className="bg-white border-gray-200 dark:bg-gray-900">
            
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* logo */}
                    <div>
                        <Link to={'/'}><img src={assets.logo} className="h-8" alt="forever" /></Link>
                    </div>



                     {/* nav icons */}
                    <div className="flex items-center gap-6 relative md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <img
                            className="w-5 cursor-pointer"
                            src={assets.search_icon}
                            alt="search"
                            onClick={()=>setShowSearch(true)}
                        />


                        <div className="relative">
                        <Link to={'/login'}> <img
                                className="w-5 cursor-pointer"
                                src={assets.profile_icon}
                                alt="profile"
                                onClick={() => setOpen(!open)} 
                            />
                            </Link>

                            {/* Dropdown */}
                            {open && (
                                <div className="absolute right-0 z-50 mt-2 w-56 text-base list-none bg-slate-50 divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600">

                                    <ul className="py-2">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My profile</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Orders</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</a>
                                        </li>

                                    </ul>
                                </div>
                            )}
                        </div>

                        <Link to={'/cart'} className='relative'>
                            <img className="w-5 cursor-pointer" src={assets.cart_icon} alt="cart" />
                            <p className='absolute -right-2 -bottom-2 bg-black rounded-full w-5 text-[8px] py-1 text-white text-center cursor-pointer '>{getCartCount()}</p>

                        </Link>

                        <img onClick={() => { setVisible(true) }} className="w-5 cursor-pointer sm:hidden" src={assets.menu_icon} alt="menu-icon" />

                    </div>

                    {/* mobile navLinks */}
                    <div
                        className={`mobile-nav fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-500 ease-in-out ${visible ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <div className="p-4">
                            
                            <div
                                className="flex items-center gap-4 p-3 cursor-pointer"
                                onClick={() => setVisible(false)}
                            >
                                <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
                                <p>Back</p>
                            </div>

                            <NavLink onClick={() => { setVisible(false) }} className="block py-2 px-3" to="/">HOME</NavLink>
                            <hr />
                            <NavLink onClick={() => { setVisible(false) }} className="block py-2 px-3" to="/collection">COLLECTION</NavLink>
                            <hr />
                            <NavLink onClick={() => { setVisible(false) }} className="block py-2 px-3" to="/about">ABOUT</NavLink>
                            <hr />
                            <NavLink onClick={() => { setVisible(false) }} className="block py-2 px-3" to="/contact">CONTACT</NavLink>
                            <hr />
                            <NavLink onClick={() => { setVisible(false) }} className="block py-2 px-3" to="/admin">ADMIN PANEL</NavLink>
                        </div>
                    </div>


                    {/* navLinks */}
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <NavLink className='flex flex-col items-center gap-1 ' to='/'>
                                <p className="block py-2 px-3 md:p-0 rounded-sm text-gray-600" aria-current="page">HOME</p>
                                <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden' />
                            </NavLink>
                            <NavLink className='flex flex-col items-center gap-1 ' to='/collection'>
                                <p className="block py-2 px-3 md:p-0 rounded-sm text-gray-600" aria-current="page">COLLECTION</p>
                                <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden' />
                            </NavLink>
                            <NavLink className='flex flex-col items-center gap-1 ' to='/about'>
                                <p className="block py-2 px-3 md:p-0 rounded-sm text-gray-600" aria-current="page">ABOUT</p>
                                <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden' />
                            </NavLink>
                            <NavLink className='flex flex-col items-center gap-1 ' to='/contact'>
                                <p className="block py-2 px-3 md:p-0 rounded-sm text-gray-600" aria-current="page">CONTACT</p>
                                <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden' />
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
