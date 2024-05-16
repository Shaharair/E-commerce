import React from 'react'
import Container from './Container'
import Logogg from "./assets/logo.png"
import { FaFacebookF,FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
  return (
    <section className="py-[60px] bg-[#F5F5F3]">
        <Container>
                <div className="flex">
                    <div className="w-[20%]">
                        <h3 className="font-sans font-bold text-[18px] text-[#262626] uppercase pb-[10px]">Menu</h3>
                        <ul> 
                           <li className="font-sans font-medium text-[16px] text-[#6D6D6D] pb-1">Home</li>
                            <li className="font-sans font-medium text-[16px] text-[#6D6D6D] pb-1">Shop</li>
                            <li className="font-sans font-medium text-[16px] text-[#6D6D6D] pb-1">About</li>
                            <li className="font-sans font-medium text-[16px] text-[#6D6D6D] pb-1">Contact</li>
                            <li className="font-sans font-medium text-[16px] text-[#6D6D6D]">Journal</li>
                        </ul>
                    </div>  
                    <div className="w-[20%]">
                        <h3 className="font-sans font-bold text-[18px] text-[#262626] uppercase pb-[10px]">Shop</h3>
                        <ul>
                            <li className="font-sans font-medium text-[16px] text-[#6D6D6D] pb-1">Category 1</li>
                            <li className="font-sans font-medium text-[16px] text-[#6D6D6D] pb-1">Category 2</li>
                            <li className="font-sans font-medium text-[16px] text-[#6D6D6D] pb-1">Category 3</li>
                            <li className="font-sans font-medium text-[16px] text-[#6D6D6D] pb-1">Category 4</li>
                            <li className="font-sans font-medium text-[16px] text-[#6D6D6D] pb-1">Category 5</li>
                        </ul>
                    </div>
                    <div className="w-[20%]">
                        <h3 className="font-sans font-bold text-[18px] text-[#262626] uppercase pb-[10px]">Help</h3>
                        <ul>
                            <li className="font-sans font-medium text-[16px] text-[#6D6D6D] pb-1">Privacy Policy</li>
                            <li className="font-sans font-medium text-[16px] text-[#6D6D6D] pb-1">Terms & Conditions</li>
                            <li className="font-sans font-medium text-[16px] text-[#6D6D6D] pb-1">Special E-shop</li>
                            <li className="font-sans font-medium text-[16px] text-[#6D6D6D] pb-1">Shipping</li>
                            <li className="font-sans font-medium text-[16px] text-[#6D6D6D] pb-1">Secure Payments</li>
                        </ul>
                    </div>
                    <div className="w-[20%]">
                        <ul>
                            <li className="font-sans font-bold text-[18px] text-[#262626]">(052) 611-5711</li>
                            <li className="font-sans font-bold text-[18px] text-[#262626] pb-[10px]">company@domain.com</li>
                            <li className="font-sans font-semibold text-[12px] text-[#6D6D6D]">575 Crescent Ave. Quakertown, PA 18951</li>
                        </ul>
                    </div>
                    <div className="w-[20%] pl-[50px]">
                        <img src={Logogg} alt="logo" />
                    </div>
                </div>
                <div className="flex py-[60px] items-center justify-between">
                        <div className="flex gap-6 text-[30px] text-[#262626]">
                            <FaFacebookF/>
                            <FaLinkedinIn/>
                            <FaInstagram/>
                        </div>
                        <div className="">
                            <ul>
                                <li className="font-sans font-semibold text-[12px] text-[#6D6D6D]">2020 Orebi Minimal eCommerce Figma Template by Adveits</li>
                            </ul>
                        </div>
                    </div>
        </Container>
    </section>
  )
}

export default Footer