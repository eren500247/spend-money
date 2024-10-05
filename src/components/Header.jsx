import React from "react";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const {cartList} = useSelector((state)=>state.cartSlice)
  const totalQty = cartList.reduce((total,item)=> total + item.quantity,0)
  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white">
      <div className="shadow-lg flex items-center justify-between px-5 py-3">
        <h1 className="text-xl font-bold text-indigo-600">Spend Money $</h1>
        <div className="relative">
          <button onClick={()=>navigate('/checkout')} className="rounded-full shadow-lg bg-indigo-700 p-2">
            <FaShoppingCart color="white" />
          </button>
          <span className="absolute -top-2 -right-2 rounded-full bg-yellow-500 w-5 h-5 leading-5 text-center">
            {totalQty}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
