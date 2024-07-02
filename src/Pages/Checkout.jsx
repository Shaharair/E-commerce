import React from 'react'
import Container from '../Container'

const Cheackout = () => {
  return (
    <section>
      <Container>
        <div className="">
          <h3 className="font-sans font-bold text-[48px] text-[#262626] pt-[50px]">Checkout</h3>
          <h5 className="font-sans font-medium text-[16px] text-[#6D6D60] pb-[100px]">Home  &#62; Checkout</h5>
          <p className="font-sans font-medium text-[18px] text-[#6D6D60] pb-[100px]">Have a coupon?<span className="font-sans font-semibold text-[18px] text-[#262626]">Click here to enter your code</span></p>
        </div>
        <div className="w-[70%]">
          <h3 className="font-sans font-bold text-[48px] text-[#262626] pb-[50px]">Billing Details</h3>
          <div className="flex items-center justify-between">
            <div className="border-b-2 w-[50%]">
              <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">First Name *</h3>
              <h5 className="font-sans font-medium text-[18px] text-[#6D6D60] pb-[20px]">First Name</h5>
            </div>
            <div className="border-b-2 w-[50%] mx-[50px]">
              <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Last Name *</h3>
              <h5 className="font-sans font-medium text-[18px] text-[#6D6D60] pb-[20px]">Last Name</h5>
            </div>
          </div>
          <div className="pb-[100px]">
            <div className="border-b-2 py-[30px]">
              <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Companye Name (optional)</h3>
              <h5 className="font-sans font-medium text-[18px] text-[#6D6D60] pb-[20px]">Company Name</h5>
            </div>
            <div className="border-b-2 py-[30px]">
              <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Country *</h3>
              <h5 className="font-sans font-medium text-[18px] text-[#6D6D60] pb-[20px]">Please select</h5>
            </div>
            <div className="border-b-2 py-[30px]">
              <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Street Address *</h3>
              <h5 className="font-sans font-medium text-[18px] text-[#6D6D60] pb-[20px] border-b-2 py-[30px]">House number and street name</h5>
              <h5 className="font-sans font-medium text-[18px] text-[#6D6D60] pb-[20px] py-[30px]">Apartment, suite, unit etc. (optional)</h5>
            </div>
            <div className="border-b-2 py-[30px]">
              <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Town/City *</h3>
              <h5 className="font-sans font-medium text-[18px] text-[#6D6D60] pb-[20px]">Town/City</h5>
            </div>
            <div className="border-b-2 py-[30px]">
              <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">County (optional)</h3>
              <h5 className="font-sans font-medium text-[18px] text-[#6D6D60] pb-[20px]">Country</h5>
            </div>
            <div className="border-b-2 py-[30px]">
              <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Post Code *</h3>
              <h5 className="font-sans font-medium text-[18px] text-[#6D6D60] pb-[20px]">Post Code</h5>
            </div>
            <div className="border-b-2 py-[30px]">
              <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Phone *</h3>
              <h5 className="font-sans font-medium text-[18px] text-[#6D6D60] pb-[20px]">Phone</h5>
            </div>
            <div className="border-b-2 py-[30px]">
              <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Email Address *</h3>
              <h5 className="font-sans font-medium text-[18px] text-[#6D6D60] pb-[20px]">Email</h5>
            </div>
          </div>
        </div>
        <div className="pb-[100px]">
          <h3 className="font-sans font-bold text-[48px] text-[#262626] py-[50px]">Your Order</h3>
          <div className="border-2 w-[30%]">
            <div className=" flex justify-between border-b-2 py-4">
              <div className="w-[50%]">
                <h3 className="font-sans font-semibold text-[24px] text-[#262626] pl-[20px]">Product:</h3>
              </div>
              <div className="w-[50%]">
                <h5 className="font-sans font-medium text-[18px] text-[#6D6D60]">Total:</h5>
              </div>
            </div>
            <div className="flex justify-between border-b-2 py-4">
              <div className="w-[50%]">
                <h3 className="font-sans font-semibold text-[24px] text-[#262626] pl-[20px]">Subtotal:</h3>
              </div>
              <div className="w-[50%]">
                <h5 className="font-sans font-medium text-[18px] text-[#6D6D60]">389.99 $</h5>
              </div>
            </div>
            <div className="flex justify-between py-4">
              <div className="w-[50%]">
                <h3 className="font-sans font-semibold text-[24px] text-[#262626] pl-[20px]">Total:</h3>
              </div>
              <div className="w-[50%]">
                <h5 className="font-sans font-medium text-[18px] text-[#6D6D60]">389.99 $</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Cheackout