import React from 'react'
import Container from '../Container'

const MyAccount = () => {
  return (
    <section>
        <Container>
            <div className="">
                <h3 className="font-sans font-bold text-[48px] text-[#262626] pt-[100px]">My Account</h3>
                <h5 className="font-sans font-medium text-[16px] text-[#767676] pb-[100px]">Home  &#62;	My account</h5>
            </div>
            <div className="w-[60%] pb-[100px]">
                <div className="flex items-center justify-between">
                    <div className="w-[50%] border-b-2">
                        <h3 className="font-sans font-semibold text-[18px] text-[#262626] pb-[20px]">Dashboard</h3>
                    </div>
                    <div className="w-[50%] mx-5">
                        <p className="font-sans font-semibold text-[16px] text-[#767676]">Hello admin (not admin? Log out)</p>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-5">
                    <div className="w-[50%] border-b-2">
                        <h3 className="font-sans font-semibold text-[18px] text-[#262626] pb-[20px]">Others</h3>
                    </div>
                    <div className="w-[50%] mx-5">
                        <p className="font-sans font-semibold text-[16px] text-[#262626]">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-5">
                    <div className="w-[50%] border-b-2">
                        <h3 className="font-sans font-semibold text-[18px] text-[#262626] pb-[20px]">Donwloads</h3>
                    </div>
                    <div className="w-[50%] mx-5"></div>
                </div>
                <div className="flex items-center justify-between pt-5">
                <div className="w-[50%] border-b-2">
                        <h3 className="font-sans font-semibold text-[18px] text-[#262626] pb-[20px]">Addresses</h3>
                    </div>
                    <div className="w-[50%] mx-5"></div>
                </div>
                <div className="flex items-center justify-between pt-5">
                    <div className="w-[50%] border-b-2">
                        <h3 className="font-sans font-semibold text-[18px] text-[#262626] pb-[20px]">Account details</h3>
                    </div>
                    <div className="w-[50%] mx-5"></div>
                </div>
                <div className="flex items-center justify-between pt-5">
                    <div className="w-[50%] border-b-2">
                        <h3 className="font-sans font-semibold text-[18px] text-[#262626] pb-[20px]">Logout</h3>
                    </div>
                    <div className="w-[50%] mx-5"></div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default MyAccount