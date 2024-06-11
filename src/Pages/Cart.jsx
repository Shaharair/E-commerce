import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux"
import { productDecrement, productIncrement, removeproduct } from '../Components/slice/ProductSlice';
import { IoMdArrowDropdown } from "react-icons/io";




const Cart = () => {

  let [Show, setShow] = useState(false)

  let dispatch = useDispatch()
  let data = useSelector((state) => state.product.cartItem)

  let handleIncrement = (index) => {
    dispatch(productIncrement(index))
  }

  let handledecrement = (index) => {
    dispatch(productDecrement(index))
  }

  let handleRemove = (index) => {
    dispatch(removeproduct(index))
  }

  const {totalPrice, totalQuantity} = data.reduce((acc, item)=>{
    acc.totalPrice += item.price * item.qun
    acc.totalQuantity += item.qun

    return acc

    },{totalPrice:0, totalQuantity:0})

  return (
    <section>
      <div className="container mx-auto">
        <div className="my-[100px]">
          <h3 className="font-sans font-bold text-[64px] text-[#262626]">Cart</h3>
          <p className="font-sans font-medium text-[18px] text-[#767676]">Home  &#62;	  Cart</p>
        </div>
        <div className="flex items-center justify-between bg-[#F5F5F3] my-[50px] h-[70px]">
          <div className="w-[40%]">
            <h3 className="font-sans font-bold text-[24px] text-[#262626] pl-[60px]">Product</h3>
          </div>
          <div className="w-[15%]">
            <h3 className="font-sans font-bold text-[24px] text-[#262626] text-center">Price</h3>
          </div>
          <div className="w-[30%]">
            <h3 className="font-sans font-bold text-[24px] text-[#262626] text-center">Quantity</h3>
          </div>
          <div className="w-[15%]">
            <h3 className="font-sans font-bold text-[24px] text-[#262626] text-center">Total</h3>
          </div>
        </div>
        {data.map((item, index) => (
          <div className="flex items-center justify-between py-[50px]">
            <div className="w-[40%]">
              <div className="flex items-center justify-between">
                <div onClick={() => handleRemove(index)} className="">
                  <RxCross2 />
                </div>
                <div className="">
                  <img className="w-[100px] h-[100px]" src={item.thumbnail} alt="" />
                </div>
                <div className="">
                  <h3 className="font-sans font-bold text-[24px] text-[#262626] pl-[60px]">{item.title}</h3>
                </div>
              </div>
            </div>
            <div className="w-[15%]">
              <h3 className="text-center">${item.price}</h3>
            </div>
            <div className="w-[30%]">
              <div className="flex w-[150px] h-[40px] border-2 border-[#] justify-around items-center mx-auto">
                <div onClick={() => handledecrement(index)} className="">
                  <h3 className="font-sans font-medium text-[18px] text-[#767676]">-</h3>
                </div>
                <div className="">
                  <h3 className="font-sans font-medium text-[18px] text-[#767676]">{item.qun}</h3>
                </div>
                <div onClick={() => handleIncrement(index)} className="">
                  <h3 className="font-sans font-medium text-[18px] text-[#767676]">+</h3>
                </div>
              </div>
            </div>
            <div className="w-[15%]">
              <h3 className="text-center">${item.price * item.qun}</h3>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center border-2 border-[]">
          <div className=" w-[30%] flex justify-between items-center py-[30px]  pl-[50px] relative">
            <div className="flex gap-10 items-center border-2 border-[] px-[40px] py-4">
              <h3 className="font-sans font-semibold text-[18px] text-[#767676] uppercase">size</h3>
              <div onClick={() => setShow(!Show)} className="">
                <IoMdArrowDropdown />
                {Show &&
                  <div className="">
                    <ul className=" top-[100px] absolute border-2 border-[] w-[100px] left-[126px]">
                      <li className="font-sans font-semibold text-[18px] text-center text-[#262626] py-1 hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">10</li>
                      <li className="font-sans font-semibold text-[18px] text-center text-[#262626] py-1 hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">20</li>
                      <li className="font-sans font-semibold text-[18px] text-center text-[#262626] py-1 hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">30</li>
                      <li className="font-sans font-semibold text-[18px] text-center text-[#262626] py-1 hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">40</li>
                      <li className="font-sans font-semibold text-[18px] text-center text-[#262626] py-1 hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">42</li>
                      <li className="font-sans font-semibold text-[18px] text-center text-[#262626] py-1 hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">44</li>
                    </ul>
                  </div>
                }
              </div>
            </div>
            <h3 className="font-sans font-semibold text-[18px] text-[#262626]">Apply coupon</h3>
          </div>
          <div className="">
            <h3 className="font-sans font-semibold text-[18px] text-[#262626] pr-5">Update cart</h3>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="">
            <h3 className="font-sans font-semibold text-[24px] text-[#262626] text-end py-[30px]">Cart totals</h3>
            <div className="border-2 border-[]">
              <div className="flex w-[400px] justify-between border-b-2 border-[] py-3">
                <div className="">
                  <h3 className="font-sans font-semibold text-[18px] text-[#262626] pl-[30px]">Subtotal:</h3>
                </div>
                <div className="">
                  <h4 className="font-sans font-medium text-[18px] text-[#767676] pr-5">{totalPrice} $</h4>
                </div>
              </div>
              <div className="flex w-[400px] justify-between border-b-2 border-[] py-3">
                <div className="">
                  <h3  className="font-sans font-semibold text-[18px] text-[#262626] pl-[30px]">Quantity:</h3>
                </div>
                <div className="">
                  <h4 className="font-sans font-medium text-[18px] text-[#767676] pr-5">{totalQuantity}</h4>
                </div>
              </div>
              <div className="flex w-[400px] justify-between py-3">
                <div className="">
                  <h3 className="font-sans font-semibold text-[18px] text-[#262626] pl-[30px]">Total:</h3>
                </div>
                <div className="">
                  <h4 className="font-sans font-medium text-[18px] text-[#262626] pr-5">{totalPrice} $</h4>
                </div>
              </div>
            </div>
            <div className="pt-[30px] pb-[100px]">
              <a href="$" className="font-sans font-semibold text-[18px] text-[#262626] border-2 border-[#262626] px-[40px] py-4 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Proceed to Checkout</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart