import axios from 'axios';
import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../Container';
import ProductTwo from "../assets/product2.png"
import ProductThree from "../assets/product3.png"
import ProductFour from "../assets/product4.png"
import ProductFive from "../assets/product5.png"
import { MdOutlineStar,MdOutlineStarOutline,MdStarHalf } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { addTocart } from '../Components/slice/ProductSlice';



const ProductsDeteails = () => {
  let [singleData, setSingleData] = useState([])
  let productId = useParams()
  let dispatch = useDispatch()

  let getData = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
      setSingleData(response.data);
    })
  }

  useEffect(() => {
    getData()
  }, [])

  let [show, setShow] = useState(false)
  let [cross, setCross] = useState(false)
  

  let clientRating = Array.from({length:5},(Element,index)=>{

    let ratingNumber = index + 0.5
    
    return(
      singleData.rating >= index + 1 ? <MdOutlineStar className="text-[#FFD881]" /> : singleData.rating > ratingNumber  ? <MdStarHalf className="text-[#FFD881]"/> : <MdOutlineStarOutline className="text-[#FFD881]"/>
    )
  })

  let handleAddToCart = (item) =>{
    dispatch(addTocart({...item, qun:1}))
  }


  return (
    <section>
      <Container>
          <div className=" flex flex-wrap justify-between">
          {singleData?.images?.map((items) => (
            <div className="w-[48%] pb-[30px]">
              <img src={items} alt="" />
            </div>
            ))}
          </div>
        <div className="w-[50%]">
          <h3 className="font-sans font-bold text-[39px] text-[#262626] py-5">Product</h3>
          <div className="flex items-center">
            {clientRating}
            <div className=" pl-5 font-sans font-normal text-[14px] text-[#767676]">
              <span className="font-sans font-medium text-[16px] text-[#767676]"> Review</span>
            </div>
          </div>
          <div className="flex gap-6 py-5 items-center border-b-2">
            <del className=" font-sans font-medium text-[18px] text-[#767676]">$88.00</del>
            <h2 className="font-sans font-semibold text-[24px] text-[#262626]" >${singleData.price}</h2>
          </div>
          <div className="flex gap-3 items-center py-5 border-b-2">
            <div className="">
              <h3 className="font-sans font-semibold text-[18px] text-[#262626] uppercase">Quantity:</h3>
            </div>
            <div className="flex w-[150px] h-[40px] border-2 border-[#767676] justify-around items-center">
              <div className="">
                <h3 className="font-sans font-medium text-[18px] text-[#767676]">-</h3>
              </div>
              <div className="">
                <h3 className="font-sans font-medium text-[18px] text-[#767676]">0</h3>
              </div>
              <div className="">
                <h3 className="font-sans font-medium text-[18px] text-[#767676]">+</h3>
              </div>
            </div>
          </div>
          <div className="flex gap-5 py-5 border-b-2">
            <h3 className="font-sans font-semibold text-[18px] text-[#262626] uppercase">Status:</h3>
            <h5 className="font-sans font-medium text-[18px] text-[#767676]">In stock</h5>
          </div>
          <div className="py-[50px] border-b-2">
            <ul className="flex gap-5">
              <li className="font-sans font-bold text-[24px] text-[#262626] border-2 border-[#262626] px-[40px] py-3 items-center hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">Add to Wish List</li>
              <Link to="/cart" onClick={()=>handleAddToCart(singleData)}>
              <li className="font-sans font-bold text-[24px] text-[#262626] border-2 border-[#262626] px-[60px] py-3 items-center hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">Add to Cart</li>
              </Link>
            </ul>
          </div>
          <div onClick={() => setShow(!show)} className="flex justify-between py-[30px] border-b-2 items-center">
            <h3 className="font-sans font-bold text-[24px] text-[#262626] uppercase">Features  & Details</h3>
            {show == true ? <ImCross /> : <FaPlus />}
          </div>
          {show &&
            <div className="py-[20px]">
              <p className="font-sans font-medium text-[16px] text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          }
          <div onClick={() => setCross(!cross)} className="flex justify-between py-[30px] border-b-2 items-center">
            <h3 className="font-sans font-bold text-[24px] text-[#262626] uppercase">Shipping & Returns</h3>
            {cross == true ? <ImCross /> : <FaPlus />}
          </div>
          {cross &&
            <div className="py-[20px]">
              <p className="font-sans font-medium text-[16px] text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          }
        </div>
        <div className="pt-[100px]">
          <div className="w-[20%] flex justify-between py-[30px] items-center">
            <h3 className="font-sans font-semibold text-[18px] text-[#767676]">Description</h3>
            <h2 className="font-sans font-bold text-[24px] text-[#262626]">Reviews (1)</h2>
          </div>
          <div className=" border-b-2 py-6">
            <h3 className="font-sans font-semibold text-[16px] text-[#767676]">1 review for Product</h3>
          </div>
          <div className="flex justify-between items-center">
            <div className=" w-[20%] flex items-center gap-7 py-[20px]">
              <h3 className="font-sans font-medium text-[16px] text-[#262626]">John Ford</h3>
              <div className=" w-[30%] flex">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
            </div>
            <div className="w-[50%]">
              <h3 className="font-sans font-medium text-[16px] text-[#767676] pl-[500px]">6 months ago</h3>
            </div>
          </div>
          <p className="font-sans font-medium text-[16px] text-[#767676] border-b-2 py-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className="w-[50%] pt-[100px]">
          <h3 className="font-sans font-bold text-[30px] text-[#262626]">Add a Review</h3>0.
          <div className="py-[30px] border-b-2">
            <h3 className="font-sans font-bold text-[24px] text-[#262626]">Name:</h3>
            <input placeholder="Your name here" type="Search" className="w-full h-[50px] pl-5 outline-none font-sans font-medium text-[16px] text-[#767676]" />
          </div>
          <div className="py-[30px] border-b-2">
            <h3 className="font-sans font-bold text-[24px] text-[#262626]">Email:</h3>
            <input placeholder="Your email here" type="Search" className="w-full h-[50px] pl-5 outline-none font-sans font-medium text-[16px] text-[#767676]" />
          </div>
          <div className="py-[30px] border-b-2">
            <h3 className="font-sans font-bold text-[24px] text-[#262626]">Review:</h3>
            <input placeholder="Your review here" type="Search" className="w-full h-[100px] pl-5 outline-none font-sans font-medium text-[16px] text-[#767676]" />
          </div>
        </div>
        <div className="py-[30px] w-[30%]">
          <h3 className="font-sans font-bold text-[24px] text-[#262626] border-2 border-[#262626] py-4 text-center hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">Post</h3>
        </div>
      </Container>
    </section>
  )
}

export default ProductsDeteails