import React from 'react'
import Container from '../Container'


const Products = () => {
    return (
        <section className="py-[60px]">
            <Container>
                <h3 className="font-sans font-bold text-[48px] text-[#262626] pb-[60px]">Products</h3>
                <div className="w-[20%]">
                    <h4 className="font-sans font-bold text-[30px] text-[#262626] pb-[20px]">Shop by Category</h4>
                    <ul>
                        <li className=" font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Category 1 </li>
                        <li className=" font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Category 2 </li>
                        <li className=" font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Category 3 </li>
                        <li className=" font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Category 4 </li>
                        <li className=" font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Category 5 </li>
                   </ul>
                    <div className="">
                        <h4 className="font-sans font-bold text-[30px] text-[#262626] pb-[20px]">Shop by Color</h4>
                        <ul>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Color 1</li>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Color 2</li>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Color 3</li>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Color 4</li>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Color 5</li>
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="font-sans font-bold text-[30px] text-[#262626] pb-[20px]">Shop by Brand</h4>
                        <ul>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Brand 1</li>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Brand 2</li>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Brand 3</li>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Brand 4</li>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">Brand 5</li>
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="font-sans font-bold text-[30px] text-[#262626] pb-[20px]">Shop by Price</h4>
                        <ul>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">$0.00 - $9.99</li>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">$10.00 - $19.99</li>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">$20.00 - $29.99</li>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">$30.00 - $39.99</li>
                            <li className="font-sans font-medium text-[16px] text-[#767676] pb-[14px]">$40.00 - $69.99</li>
                        </ul>
                    </div>
                </div>
                <div className="w-[80%]">

                </div>
            </Container>
        </section>
    )
}

export default Products