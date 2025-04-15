import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const shopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = "10";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate()

  const addToCart = async(itemId , size)=>{
    if(!size){
      toast.error('Select product size');
      return
    }

    let cartData = structuredClone(cartItems)

    if(cartData[itemId]) {
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1
      }else{
        cartData[itemId][size] = 1
      }

    }else{
      cartData[itemId] ={}
      cartData[itemId][size] = 1
    }
    setCartItems(cartData)

  }

  const getCartCount = () => { 
    let count = 0;
  
    for (let productId in cartItems) {
      for (let size in cartItems[productId]) {
        count += cartItems[productId][size];
      }
    }
  
    return count;
  }

  const getCartAmount = () => {
    let amount = 0;
  
    for (let productId in cartItems) {
      for (let size in cartItems[productId]) {
        const quantity = cartItems[productId][size];
        const product = products.find(p => p._id === productId); 
        if (product) {
          amount += product.price * quantity; 
        }
      }
    }
  
    return amount;
  };

  const updateQuantity = async(itemId , size ,quantity)=>{
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity
    setCartItems(cartData)


  }
  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])
  

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <shopContext.Provider value={value}>{props.children}</shopContext.Provider>
  );
};

export default ShopContextProvider;
