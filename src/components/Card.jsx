import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import {increaseQuantity,decreaseQuantity} from "../store/allSlice";

const Card = ({data}) => {
  const dispatch = useDispatch()
  return (
    <div data-aos = "zoom-in" className="shadow-xl max-w-[300px] space-y-3 pb-2 rounded-md">
      <img
        src={data.image}
        alt="image"
        className="w-full h-60 object-contain"
      />
      <h1 className="font-bold text-lg text-center">{data.title}</h1>
      <p className="text-center text-md text-gray-500">Price : ${data.price.toFixed(2)}</p>
      <div className="flex gap-5 justify-center">
        <button onClick={()=>dispatch(decreaseQuantity(data.id))} className="rounded-full border p-1 bg-indigo-600 text-white">
          <FaMinus />{""}
        </button>
        <p>{data.quantity}</p>
        <button onClick={()=>dispatch(increaseQuantity(data.id))} className="rounded-full border p-1 bg-indigo-600 text-white">
          <FaPlus />{""}
        </button>
      </div>
      <div onClick={()=>dispatch(addToCart(data))} className="text-center border bg-indigo-600 text-white p-2 rounded-md mx-1 hover:bg-indigo-400">
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
