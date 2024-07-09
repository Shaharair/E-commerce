import React, { useEffect, useState } from 'react'
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
    let [Category, setCategory] = useState([])
    let [categoryFlter, setCategoryFilter] = useState([])
    let [multiList, setMultiList] = useState('')

    let data = useContext(apiData)

    let [currentPage, setCurrentPage] = useState(1)
    let [perPage, setPerPage] = useState(18)

    let lastpage = currentPage * perPage
    let firstpge = lastpage - perPage

    let alData = data.slice(firstpge, lastpage)

    let pageNumber = []

    for (let i = 0; i < Math.ceil(categoryFlter.length > 0 ? categoryFlter : data.length / perPage); i++) {
        pageNumber.push(i)
    }

    let Paginate = (pageNumber) => {
        setCurrentPage(pageNumber + 1);
    }

    let next = () => {
        if (currentPage < pageNumber.length) {
            setCurrentPage((state) => state + 1)
        }
    }

    let prev = () => {
        if (currentPage > 1) {
            setCurrentPage((state) => state - 1)
        }
    }

    useEffect(() => {
        setCategory([...new Set(data.map((items) => items.category))])
    }, [data])

    let handleSubcate = (citems) => {
        let categoryFilter = data.filter((items) => items.category == citems)
        setCategoryFilter(categoryFilter)
    }

    let handleList = () =>{
        setMultiList("activeList")
    }



    return (
        <section className="py-[60px]">
            <Container>
                <h3 className="font-sans font-bold text-[48px] text-[#262626] pb-[60px]">Products</h3>
                <div className="flex">
                    <div className="w-[25%]">
                        <div className="">
                            <div onClick={() => setDropdownShow(!dropdownShow)} className=" flex items-center gap-4 font-sans font-bold text-[24px]">
                                <h4 className="font-sans font-bold text-[24px] text-[#262626]">Shop by Category</h4>
                                <IoMdArrowDropdown />
                            </div>
                            {dropdownShow &&
                                <div className="">
                                    <ul>
                                        {Category.map((items) => (
                                            <li onClick={() => handleSubcate(items)} className=" font-sans font-semibold capitalize text-[18px] text-[#262626] py-[30px] border-b-2">{items} </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-[75%]">
                        <div className="flex justify-between">
                            <div className=" w-[40%] flex gap-8">
                                <div onClick={()=>setMultiList("")} className="">
                                    <MdWindow className={`border-2 border-[#767676] h-[60px] w-[60px] py-3 ${multiList == "activeList" ? "" : "bg-black text-white"}`} />
                                </div>
                                <div onClick={handleList} className="">
                                    <AiOutlineBars className={`border-2 border-[#767676] h-[60px] w-[60px] py-3 ${multiList == "" ? "" :"bg-black text-white"}`} />
                                </div>
                            </div>
                            <div className=" w-[40%] flex gap-4  items-center relative">
                                <div className="">
                                    <h3 className="font-sans font-semibold text-[18px] text-[#767676]">Sort by:</h3>
                                </div>
                                <select className="border-2 border-[#767676] py-3 px-5 outline-none font-sans font-semibold text-[18px] text-[#767676]">
                                    <option value="" className="font-sans font-semibold text-[18px] text-[#767676]">Features</option>
                                    <option value="" className="font-sans font-semibold text-[18px] text-[#767676]">Price</option>
                                    <option value="" className="font-sans font-semibold text-[18px] text-[#767676]">Catagory</option>
                                </select>
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
                                <div className="">
                                    <Post alData={alData} categoryFlter={categoryFlter} multiList={multiList} />
                                </div>
                                <div className=" text-end">
                                    <PaginationArea pageNumber={pageNumber} Paginate={Paginate} currentPage={currentPage} next={next} prev={prev} />
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