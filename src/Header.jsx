import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import LogoImg from "./assets/logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
  let [show,setShow] = useState(false)
  // let handleShow = () =>{
  //   setShow(!show)
  // }
  return (
    <header className="h-[80px]">
    <Container>
        <Flex className=" justify-between items-center h-[80px]">
        <div className="w-1/4">
            <img src={LogoImg} alt="logo" />
        </div>
        <div className="w-3/4">
            <ul className={`lg:flex gap-8 absolute lg:static transition duration-700 ease-out ${show == true ? "bg-[red] top-[100px] left-[-0] w-full" : " top-[100px] left-[-200px]" } }`}>
                <li className="font-sans font-medium text-[18px] lg:text-[#767676] text-[white] hover:text-[#262626]"><Link to="/">Home</Link></li>
                <li className="font-sans font-medium text-[18px] lg:text-[#767676] text-[white] hover:text-[#262626]"><Link to="/products">Shop</Link></li>
                <li className="font-sans font-medium text-[18px] lg:text-[#767676] text-[white] hover:text-[#262626]"><Link to="/about">About</Link></li>
                <li className="font-sans font-medium text-[18px] lg:text-[#767676] text-[white] hover:text-[#262626]"><Link to="/contact">Contacts</Link></li>
                <li className="font-sans font-medium text-[18px] lg:text-[#767676] text-[white] hover:text-[#262626]">Journaly</li>
            </ul>
        </div>
        <div className="lg:hidden" onClick={()=>setShow(!show)}>
          {show == true ? <RxCross2/> : <FaBars/>}


        </div>
        </Flex>
    </Container>
    </header>
  )
}

export default Header