import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { apiData } from '../ContextApi'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addTocart } from '../slice/ProductSlice';

const Post = ({ alData, categoryFlter, multiList, filterprice }) => {

    let [filterShow, setFilterShow] = useState([])
    let [cateShow, setCateShow] = useState(true)
    let [filterPirShow, setFilterPriShow] = useState([])
    let [priShow, setPirShow] = useState(true)
    let dispatch = useDispatch()

    useEffect(() => {
        let filterAmi = categoryFlter.slice(0, 5)
        setFilterShow(filterAmi)
    }, [categoryFlter])

    let handleshow = () => {
        setFilterShow(categoryFlter)
        setCateShow(false)
    }

    let handlehide = () => {
        let filterAmi = categoryFlter.slice(0, 5)
        setFilterShow(filterAmi)
        setCateShow(true)
    }

    let handlepcart = (items) => {
        dispatch(addTocart({ ...items, qun: 1 }))
    }

    useEffect(()=>{
        let filterPri = filterprice.slice(0, 9)
        setFilterPriShow(filterPri);
    },[filterprice])

    let handlePriShow = () =>{
        setFilterPriShow(filterprice)
        setPirShow(false)
    }

    let handlePriHide = () =>{
        let filterPri = filterprice.slice(0, 9)
        setFilterPriShow(filterPri)
        setPirShow(true)
    }


    return (
        <>

            {filterprice.length > 0 ?
                <div className="">
                    <div className="">
                        <div className="flex flex-wrap">
                            {filterPirShow.map((items) => (
                                <div className="w-[32%] py-5">
                                    <Link to={`/products/${items.id}`}>
                                        <div className="">
                                            <div className=" relative group overflow-hidden">
                                                <img src={items.thumbnail} className="h-[350px]" alt="" />
                                                <div className="bg-[white] absolute left-0 h-[120px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0] flex justify-end">
                                                    <ul className="pr-5">
                                                        <li className="flex items-center justify-end font-sans font-semibold text-[24px] text-[#767676] gap-4 hover:text-[#262626]">Add to Wish List <FaHeart /></li>
                                                        <li className="flex items-center justify-end font-sans font-semibold text-[24px] text-[#767676] gap-4 hover:text-[#262626] py-2">Compare <TfiReload /></li>
                                                        <li className="flex items-center justify-end font-sans font-semibold text-[24px] text-[#767676] gap-4 hover:text-[#262626]">Add to Cart <FaShoppingCart /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {console.log(items.id)}
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-sans font-semibold text-[24px] text-[#262626] pt-[20px]">{items.title}</h3>
                                                <p className="font-sans font-semibold text-[18px] text-[#767676] pt-[20px]">${items.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {priShow ? filterprice.length > 9 &&
                            <button onClick={handlePriShow} className="font-sans font-semibold text-[18px] text-[white] bg-[darkblue] px-[30px] py-3 rounded">Show All</button>
                            :
                            <button onClick={handlePriHide} className="font-sans font-semibold text-[18px] text-[white] bg-[#43008b] px-[30px] py-3 rounded">Hide</button>
                        }
                    </div>
                    {cateShow ? categoryFlter.length > 5 &&
                        <button onClick={handleshow} className="font-sans font-semibold text-[18px] text-[#262626] px-[30px] py-3 rounded bg-[rgb(0,238,255)]">Show All</button>
                        :
                        <button onClick={handlehide} className="font-sans font-semibold text-[18px] text-[#262626] px-[30px] py-3 rounded bg-[rgba(128,47,0,0.49)]">Hide</button>

                    }
                </div>
                :


                categoryFlter.length > 0 ?
                    <div className="">
                        <div className="flex flex-wrap">
                            {filterShow.map((items) => (
                                <div className="w-[32%] py-5">
                                    <Link to={`/products/${items.id}`}>
                                        <div className="">
                                            <div className=" relative group overflow-hidden">
                                                <img src={items.thumbnail} className="h-[350px]" alt="" />
                                                <div className="bg-[white] absolute left-0 h-[120px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0] flex justify-end">
                                                    <ul className="pr-5">
                                                        <li className="flex items-center justify-end font-sans font-semibold text-[24px] text-[#767676] gap-4 hover:text-[#262626]">Add to Wish List <FaHeart /></li>
                                                        <li className="flex items-center justify-end font-sans font-semibold text-[24px] text-[#767676] gap-4 hover:text-[#262626] py-2">Compare <TfiReload /></li>
                                                        <li className="flex items-center justify-end font-sans font-semibold text-[24px] text-[#767676] gap-4 hover:text-[#262626]">Add to Cart <FaShoppingCart /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {console.log(items.id)}
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-sans font-semibold text-[24px] text-[#262626] pt-[20px]">{items.title}</h3>
                                                <p className="font-sans font-semibold text-[18px] text-[#767676] pt-[20px]">${items.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {cateShow ? categoryFlter.length > 5 &&
                            <button onClick={handleshow} className="font-sans font-semibold text-[18px] text-[#262626] px-[30px] py-3 rounded bg-[rgb(0,238,255)]">Show All</button>
                            :
                            <button onClick={handlehide} className="font-sans font-semibold text-[18px] text-[#262626] px-[30px] py-3 rounded bg-[rgba(128,47,0,0.49)]">Hide</button>

                        }
                    </div>
                    :
                    <div className={`${multiList == "activeList" ? "" : "flex justify-between flex-wrap"}`}>
                        {alData.map((items) => (
                            <div className="w-[32%] py-5">
                                <div className="">
                                    <div className=" relative group overflow-hidden">
                                        <Link to={`/products/${items.id}`}>
                                            <img src={items.thumbnail} className="h-[350px]" alt="" />
                                        </Link>
                                        <div className="bg-[white] absolute left-0 h-[120px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0] flex justify-end">
                                            <ul className="pr-5">
                                                <li className="flex items-center justify-end font-sans font-semibold text-[24px] text-[#767676] gap-4 hover:text-[#262626]">Add to Wish List <FaHeart /></li>
                                                <li className="flex items-center justify-end font-sans font-semibold text-[24px] text-[#767676] gap-4 hover:text-[#262626] py-2">Compare <TfiReload /></li>
                                                <li onClick={() => handlepcart(items)} className="flex items-center justify-end font-sans font-semibold text-[24px] text-[#767676] gap-4 hover:text-[#262626]">Add to Cart <FaShoppingCart /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {console.log(items.id)}
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-sans font-semibold text-[24px] text-[#262626] pt-[20px]">{items.title}</h3>
                                        <p className="font-sans font-semibold text-[18px] text-[#767676] pt-[20px]">${items.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
            }

        </>
    )
}

export default Post