import React, { useState } from 'react'
import Container from '../Container'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdWindow } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { useContext } from 'react';
import { apiData } from '../Components/ContextApi';
import { Link } from 'react-router-dom';
import Post from '../Components/Pagination/Post';
import PaginationArea from '../Components/Pagination/PaginationArea';







const Products = () => {
    let [dropdownShow, setDropdownShow] = useState(false)
    let [clorShow, setColorShow] = useState(false)
    let [brendShow, setBrendShow] = useState(false)
    let [priceShow, setPriceShow] = useState(false)
    let [slectShow, setSelectShow] = useState(false)
    let [sortingShow, setSortingShow] = useState(false)

    let data = useContext(apiData)

    let [currentPage, setCurrentPage] = useState(1)
    let [perPage, setPerPage] = useState(6)

    let lastpage = currentPage * perPage
    let firstpge = lastpage - perPage

    let alData = data.slice(firstpge,lastpage)

    let pageNumber = []

    for(let i= 0; i < Math.ceil(data.length / perPage); i++){
        pageNumber.push(i)
    }

    let Paginate = (pageNumber) =>{
        setCurrentPage(pageNumber + 1);
    }


    return (
        <section className="py-[60px]">
            <Container>
                <h3 className="font-sans font-bold text-[48px] text-[#262626] pb-[60px]">Products</h3>
                <div className="flex">
                    <div className="w-[25%]">
                        <div className="">
                            <div onClick={() => setDropdownShow(!dropdownShow)} className=" flex items-center gap-4 font-sans font-bold text-[24px]">
                                <h4 className="font-sans font-bold text-[24px] text-[#262626] pb-[20px]">Shop by Category</h4>
                                <IoMdArrowDropdown />
                            </div>
                            {dropdownShow &&
                                <div className="">
                                    <ul>
                                        <li className=" font-sans font-medium text-[16px] text-[#767676] py-[30px] border-b-2">Category 1 </li>
                                        <li className=" font-sans font-medium text-[16px] text-[#767676] py-[30px] border-b-2">Category 2 </li>
                                        <li className=" font-sans font-medium text-[16px] text-[#767676] py-[30px] border-b-2">Category 3 </li>
                                        <li className=" font-sans font-medium text-[16px] text-[#767676] py-[30px] border-b-2">Category 4 </li>
                                        <li className=" font-sans font-medium text-[16px] text-[#767676] py-[30px] border-b-2">Category 5 </li>
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className="">
                            <div onClick={() => setColorShow(!clorShow)} className="flex items-center gap-4 font-sans font-bold text-[24px]">
                                <h4 className="font-sans font-bold text-[24px] text-[#262626] py-[20px]">Shop by Color</h4>
                                <IoMdArrowDropdown />
                            </div>
                            {clorShow &&
                                <div className=" ">
                                    <ul>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] flex items-center gap-3 py-[30px] border-b-2"><h3 className="border-2 bg-[#262626] rounded-full h-3 w-3"></h3>Color 1</li>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] flex items-center gap-3 py-[30px] border-b-2"> <h3 className="border-2 bg-[#FF8686] rounded-full h-3 w-3"></h3>Color 2</li>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] flex items-center gap-3 py-[30px] border-b-2"> <h3 className="border-2 bg-[#7ED321] rounded-full h-3 w-3"></h3>Color 3</li>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] flex items-center gap-3 py-[30px] border-b-2"> <h3 className="border-2 bg-[#B6B6B6] rounded-full h-3 w-3"></h3>Color 4</li>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] flex items-center gap-3 py-[30px] border-b-2"> <h3 className="border-2 bg-[#15CBA5] rounded-full h-3 w-3"></h3>Color 5</li>
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className="">
                            <div onClick={() => setBrendShow(!brendShow)} className="flex items-center gap-4 text-[24px]">
                                <h4 className="font-sans font-bold text-[24px] text-[#262626] py-[20px]">Shop by Brand</h4>
                                <IoMdArrowDropdown />
                            </div>
                            {brendShow &&
                                <div className="">
                                    <ul>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] py-[30px] border-b-2">Brand 1</li>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] py-[30px] border-b-2">Brand 2</li>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] py-[30px] border-b-2">Brand 3</li>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] py-[30px] border-b-2">Brand 4</li>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] py-[30px] border-b-2">Brand 5</li>
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className="">
                            <div onClick={() => setPriceShow(!priceShow)} className="flex items-center gap-4 text-[24px]">
                                <h4 className="font-sans font-bold text-[24px] text-[#262626] py-[20px]">Shop by Price</h4>
                                <IoMdArrowDropdown />
                            </div>
                            {priceShow &&
                                <div className="">
                                    <ul>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] py-[30px] border-b-2">$0.00 - $9.99</li>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] py-[30px] border-b-2">$10.00 - $19.99</li>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] py-[30px] border-b-2">$20.00 - $29.99</li>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] py-[30px] border-b-2">$30.00 - $39.99</li>
                                        <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px] py-[30px] border-b-2">$40.00 - $69.99</li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-[75%]">
                        <div className="flex justify-between">
                            <div className=" w-[40%] flex gap-8">
                                <MdWindow className=" border-2 border-[#767676] h-[60px] w-[60px] py-3 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out" />
                                <AiOutlineBars className=" border-2 border-[#767676] h-[60px] w-[60px] py-3 hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out" />
                            </div>
                            <div className=" w-[40%] flex gap-4  items-center relative">
                                <div className="">
                                    <h3 className="font-sans font-semibold text-[18px] text-[#767676]">Sort by:</h3>
                                </div>
                                <div className=" flex items-center gap-[100px] border-2 border-[#767676] py-3 px-5">
                                    <h4 className="font-sans font-medium text-[18px] text-[#767676]">Featured</h4>
                                    <div onClick={() => setSortingShow(!sortingShow)} className="font-sans font-bold text-[24px]">
                                        <MdOutlineArrowDropDown />
                                        {sortingShow &&
                                            <div className="">
                                                <ul className="top-[60px] z-50 absolute left-[120px] border-2 border-[#767676] w-[205px]">
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">Products 1</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">Products 2</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">Products 3</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">Products 4</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">Products 5</li>
                                                </ul>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="w-[20%] flex items-center gap-4 relative">
                                <div className="">
                                    <h3 className="font-sans font-semibold text-[18px] text-[#767676]">Show:</h3>
                                </div>
                                <div className="flex items-center gap-[60px] border-2 border-[#767676] py-3 px-5">
                                    <h4 className="font-sans font-medium text-[18px] text-[#767676]">36</h4>
                                    <div onClick={() => setSelectShow(!slectShow)} className=" font-sans font-bold text-[24px]">
                                        <MdOutlineArrowDropDown />
                                        {slectShow &&
                                            <div className="">
                                                <ul className="top-[60px] z-50 absolute left-[115px] border-2 border-[#767676] w-[100px]">
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">01</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">02</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">03</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">04</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">05</li>
                                                </ul>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-[50px]">
                            <div className="">
                                <div className="flex justify-between flex-wrap">
                                    <Post alData={alData}/>
                                </div>
                                <div className=" text-end">
                                    <PaginationArea  pageNumber={pageNumber} Paginate={Paginate}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section >
    )
}

export default Products