import React from 'react'
import { useContext } from 'react'
import { apiData } from '../ContextApi'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Post = ({alData}) => { 

    return (
        <>
            {alData.map((items) => (
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
        </>
    )
}

export default Post