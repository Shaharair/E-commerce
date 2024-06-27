import React, {  useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars, FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import ImageOne from "./assets/image.png"
import { RxCross2 } from "react-icons/rx";
import {useSelector} from "react-redux"

const Navbar = () => {

let data = useSelector((state)=> state.product.cartItem)
  let [cartShow, setCartShow] = useState(false)
  let [ViewCartShow, setViewCartShow] = useState(false)
  let [UserShow, setUserShow] = useState(false)

  let Cartref = useRef()
  let ViewCartref = useRef()
  let Userref = useRef()

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (Cartref.current.contains(e.target) == true) {
        setCartShow(!cartShow)
      } else {
        setCartShow(false)
      }
      if (ViewCartref.current.contains(e.target) == true) {
        setViewCartShow(!ViewCartShow)
      } else {
        setViewCartShow(false)
      }
      if (Userref.current.contains(e.target) == true) {
        setUserShow(!UserShow)
      } else {
        setUserShow(false)
      }
    })
  }, [cartShow,ViewCartShow,UserShow])
  

  return (
    <nav className="bg-[#F5F5F3] py-4">
    <Container>
      <Flex className=" items-center">
        <div className="w-1/4 relative">
          <div ref={Cartref} className="flex items-center gap-3">
            <FaBars />
            <p className="font-sans font-medium text-[18px] text-[#262626]">Shop by Category</p>
          </div>
          {cartShow &&
            <div className=" absolute z-50 top-[30px] left-0 bg-[#262626] w-[300px]">
              <ul>
                <li className="font-sans font-medium text-[18px] text-[rgba(255,255,255,0.5)] py-2 duration-300 ease-in-out pl-3 hover:pl-6">Accesories</li>
                <li className="font-sans font-medium text-[18px] text-[rgba(255,255,255,0.5)] py-2 duration-300 ease-in-out pl-3 hover:pl-6">Furniture</li>
                <li className="font-sans font-medium text-[18px] text-[rgba(255,255,255,0.5)] py-2 duration-300 ease-in-out pl-3 hover:pl-6">Electronics</li>
                <li className="font-sans font-medium text-[18px] text-[rgba(255,255,255,0.5)] py-2 duration-300 ease-in-out pl-3 hover:pl-6">Clothes</li>
                <li className="font-sans font-medium text-[18px] text-[rgba(255,255,255,0.5)] py-2 duration-300 ease-in-out pl-3 hover:pl-6">Bags</li>
                <li className="font-sans font-medium text-[18px] text-[rgba(255,255,255,0.5)] py-2 duration-300 ease-in-out pl-3 hover:pl-6">Home appliances</li>
              </ul>
            </div>
          }
        </div>
        <div className="w-1/2">
          <div className=" relative">
            <input placeholder="search Products" type="search" className="w-full h-12 outline-none pl-4" />
            <div className=" absolute top-[50%] right-6 translate-y-[-50%]">
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="w-1/4 relative">
          <div className="flex justify-center items-center gap-8">
            <div className="flex">
             <div ref={Userref} className="">
             <FaUserAlt />
             </div>
             {UserShow &&
             <div className="w-[200px] top-[30px] absolute z-50 left-0 border-2 border-[#F5F5F3]">
                <ul>
                  <li className="font-sans font-semibold text-[18px] text-[#262626] hover:bg-[#262626] text-center hover:text-[white] duration-300 ease-in-out py-2 rounded">My Account</li>
                  <li className="font-sans font-semibold text-[18px] text-[#262626] hover:bg-[#262626] text-center hover:text-[white] duration-300 ease-in-out py-2 rounded">Log Out</li>
                </ul>
             </div>
              }
              <MdOutlineArrowDropDown />
            </div>
            <div ref={ViewCartref} className="">
              <div className=" relative">
              <FaCartPlus />
              {data.length > 0 ?
                  <div className="absolute h-[35px] w-[50px] left-[15px] top-[-20px] bg-[red] rounded-full border-4 border-[white] text-center font-sans font-semibold text-[18px] text-[white]">
              {data.length}
              </div>
               : ""}
              </div>
            </div>
          </div>
          {ViewCartShow &&
            <div className="w-[360px] z-50 absolute bg-[#F5F5F3] top-[30px] right-0">
              <div className="py-4">
                <div className="flex justify-around items-center">
                  <div className="">
                    <img src={ImageOne} alt="Image" />
                  </div>
                  <div className="">
                    <h3 className="font-sans font-medium text-[18px] text-[#262626]">Black Smart Watch</h3>
                    <h2 className="font-sans font-medium text-[18px] text-[#262626]">$44.00</h2>
                  </div>
                  <div className="font-sans font-bold text-[18px]">
                    <RxCross2 />
                  </div>
                </div>
                <div className="">
                  <h3 className="pl-5 py-4 font-sans font-medium text-[18px] text-[#262626]">Subtotal: <span>$44.00</span></h3>
                  <div className="flex justify-around">
                    <div className="">
                      <a className="w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out font-sans font-semibold text-[18px]" href="#">View Cart</a>
                    </div>
                    <div className="">
                      <a className="w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out font-sans font-semibold text-[18px]" href="#">Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </Flex>
    </Container>
    </nav>
  )
}

export default Navbar