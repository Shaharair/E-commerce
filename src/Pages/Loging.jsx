import React from 'react'
import Container from '../Container'

const Loging = () => {
  return (
    <section>
        <Container>
            <div className="">
                <h3 className="font-sans font-bold text-[48px] text-[#262626] pt-[100px]">Loging</h3>
                <h3 className="font-sans font-medium text-[16px] text-[#767676] pb-[100px]">Home  &#62;	Login</h3>
            </div>
            <div className="w-[50%] border-b-2">
                <p className=" font-sans font-medium text-[16px] text-[#767676] pb-[50px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            </div>
            <div className="w-[70%]">
                <h3 className=" font-sans font-bold text-[48px] text-[#262626] py-[50px]">Returning Customer</h3>
                <div className="flex justify-between">
                    <div className="w-[50%] border-b-2">
                        <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Email address/Phone Number</h3>
                        <h5 className="font-sans font-medium text-[16px] text-[#767676] pb-[20px]">company@domain.com</h5>
                    </div>
                    <div className="w-[50%] mx-5 border-b-2">
                        <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Password</h3>
                        <h5 className="font-sans font-medium text-[24px] text-[#767676] pb-[20px]">......</h5>
                    </div>
                </div>
                <div className="py-[50px] border-b-2">
                    <h3 className="font-sans font-semibold text-[18px] text-[#262626] border-2 border-[#262626] w-[200px] h-[60px] rounded leading-[60px] text-center hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Login</h3>
                </div>
            </div>
            <div className="w-[50%]">
                <h3 className="font-sans font-bold text-[40px] text-[#262626] py-[30px]">New Customer</h3>
                <p className="font-sans font-medium text-[16px] text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                <h5 className="font-sans font-semibold text-[18px] text-[#262626] border-2 border-[#262626] w-[200px] h-[60px] text-center leading-[60px] rounded hover:bg-[#262626] hover:text-[white] my-[50px] duration-300 ease-in-out">Continue</h5>
            </div>
        </Container>
    </section>
  )
}

export default Loging