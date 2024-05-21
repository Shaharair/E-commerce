import React from 'react'
import Container from './Container'
import { FcLike } from "react-icons/fc";
import { HiMiniArrowPath } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";

const Arrivals = () => {
    return (
        <Container>
                <div className="">
                    <h3 className="font-sans font-bold text-[30px] text-[#262626] pb-5">New Arrivals</h3>
                <div className="flex justify-between">
                    <div className=" bg-one py-[160px] w-[23%]">
                        <div className="hover:bg-[#fff]">
                            <div className="flex items-center gap-4 justify-end pb-3 font-sans font-bold text-[30px] text-[#262626]">
                                <h3 className="font-sans font-bold text-[24px] text-[#767676] hover:text-[#262626]">Add to Wish List</h3>
                                <FcLike />
                            </div>
                            <div className="flex items-center gap-4 justify-end pb-3 font-sans font-bold text-[30px] text-[#262626]">
                                <h4 className="font-sans font-bold text-[24px] text-[#767676] hover:text-[#262626]">Compare</h4>
                                <HiMiniArrowPath />
                            </div>
                            <div className="flex items-center gap-4 justify-end pb-3 font-sans font-bold text-[30px] text-[#262626]">
                                <h3 className="font-sans font-bold text-[24px] text-[#767676] hover:text-[#262626]">Add to Cart</h3>
                                <FaShoppingCart />
                            </div>
                        </div>
                    </div>
                    <div className=" bg-two py-[160px] w-[23%]">
                    <div className=" hover:bg-[#fff]">
                            <div className="flex items-center gap-4 justify-end pb-3 font-sans font-bold text-[30px] text-[#262626]">
                                <h3 className="font-sans font-bold text-[24px] text-[#767676] hover:text-[#262626]">Add to Wish List</h3>
                                <FcLike />
                            </div>
                            <div className="flex items-center gap-4 justify-end pb-3 font-sans font-bold text-[30px] text-[#262626]">
                                <h4 className="font-sans font-bold text-[24px] text-[#767676] hover:text-[#262626]">Compare</h4>
                                <HiMiniArrowPath />
                            </div>
                            <div className="flex items-center gap-4 justify-end pb-3 font-sans font-bold text-[30px] text-[#262626]">
                                <h3 className="font-sans font-bold text-[24px] text-[#767676] hover:text-[#262626]">Add to Cart</h3>
                                <FaShoppingCart />
                            </div>
                        </div>
                    </div>
                    <div className=" bg-three py-[160px] w-[23%]">
                    <div className=" hover:bg-[#fff]">
                            <div className="flex items-center gap-4 justify-end pb-3 font-sans font-bold text-[30px] text-[#262626]">
                                <h3 className="font-sans font-bold text-[24px] text-[#767676] hover:text-[#262626]">Add to Wish List</h3>
                                <FcLike />
                            </div>
                            <div className="flex items-center gap-4 justify-end pb-3 font-sans font-bold text-[30px] text-[#262626]">
                                <h4 className="font-sans font-bold text-[24px] text-[#767676] hover:text-[#262626]">Compare</h4>
                                <HiMiniArrowPath />
                            </div>
                            <div className="flex items-center gap-4 justify-end pb-3 font-sans font-bold text-[30px] text-[#262626]">
                                <h3 className="font-sans font-bold text-[24px] text-[#767676] hover:text-[#262626]">Add to Cart</h3>
                                <FaShoppingCart />
                            </div>
                        </div>
                    </div>
                    <div className=" bg-four py-[160px] w-[23%]">
                    <div className=" hover:bg-[#fff]">
                            <div className="flex items-center gap-4 justify-end pb-3 font-sans font-bold text-[30px] text-[#262626]">
                                <h3 className="font-sans font-bold text-[24px] text-[#767676] hover:text-[#262626]">Add to Wish List</h3>
                                <FcLike />
                            </div>
                            <div className="flex items-center gap-4 justify-end pb-3 font-sans font-bold text-[30px] text-[#262626]">
                                <h4 className="font-sans font-bold text-[24px] text-[#767676] hover:text-[#262626]">Compare</h4>
                                <HiMiniArrowPath />
                            </div>
                            <div className="flex items-center gap-4 justify-end pb-3 font-sans font-bold text-[30px] text-[#262626]">
                                <h3 className="font-sans font-bold text-[24px] text-[#767676] hover:text-[#262626]">Add to Cart</h3>
                                <FaShoppingCart />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </Container>
    )
}

export default Arrivals