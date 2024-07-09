import React from 'react'
import Container from '../Container'
import MapRR from "../assets/Map.png"

const Contact = () => {
    return (
        <section>
            <Container>
                <div className="">
                    <h3 className="font-sans font-bold text-[48px] text-[#262626] pt-[100px]">Contacts</h3>
                    <h4 className="font-sans font-medium text-[16px] text-[#767676] pb-[100px]">Home  &#62;	Contacts</h4>
                </div>
                <form action="">
                    <div className="w-[50%]">
                        <h3 className="font-sans font-bold text-[40px] text-[#262626] pb-[50px]">Fill up a Form</h3>
                        <div className="border-b-2">
                            <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Name:</h3>
                            <input type="text" placeholder="Your name here" className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] outline-none" />
                        </div>
                        <div className="border-b-2 pt-[50px]">
                            <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Email:</h3>
                            <input type="text" placeholder="Your email here" className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] outline-none" />
                        </div>
                        <div className="border-b-2 pt-[50px]">
                            <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Message:</h3>
                            <input type="text" placeholder="Your message here" className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] outline-none" />
                        </div>
                    </div>
                </form>
                <div className="py-[50px]">
                    <h3 className="font-sans font-semibold text-[18px] text-[#262626] border-2 border-[#262626] w-[250px] h-[60px] text-center leading-[60px] rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Post</h3>
                </div>
                <div className="py-[50px]">
                    <img src={MapRR} alt="Map" />
                </div>
            </Container>
        </section>
    )
}

export default Contact