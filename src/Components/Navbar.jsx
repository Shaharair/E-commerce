import React from 'react'
import LogoImg from "../assets/logo.png"


const Navbar = () => {
  return (
    <section>
        <div className="max-w-container mx-56">
            <div className="flex">
                <div className="w-1/4">
                    <img src={LogoImg} alt="logo" />
                </div>
                <div className="w-3/4">
                    <ul className="flex gap-8 justify-center">
                        <li className="font-sans font-medium text-[18px] text-[#767676] hover:text-[#262626]">Home</li>
                        <li className="font-sans font-medium text-[18px] text-[#767676] hover:text-[#262626]">Shop</li>
                        <li className="font-sans font-medium text-[18px] text-[#767676] hover:text-[#262626]">About</li>
                        <li className="font-sans font-medium text-[18px] text-[#767676] hover:text-[#262626]">Contacts</li>
                        <li className="font-sans font-medium text-[18px] text-[#767676] hover:text-[#262626]">Journal</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar