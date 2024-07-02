import React from 'react'
import Container from '../Container'
import AboutFF from "../assets/about.png"
import AboutRR from "../assets/about1.png"

const About = () => {
  return (
    <section>
        <Container>
            <div className="">
                <h3 className="font-sans font-bold text-[48px] text-[#262626] pt-[100px]">About</h3>
                <h5 className="font-sans font-medium text-[16px] text-[#767676] pb-[50px]">Home  &#62;	About</h5>
            </div>
            <div className="">
                <div className="flex justify-between">
                    <div className="w-[48%]">
                        <img src={AboutFF} alt="about" />
                    </div>
                    <div className="w-[48%]">
                        <img src={AboutRR} alt="about1" />
                    </div>
                </div>
                <p className="font-sans font-medium text-[16px] text-[#767676] py-[50px] pr-[800px]">Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
            </div>
            <div className="pb-[100px]">
                <div className="flex justify-between">
                    <div className="w-[32%]">
                        <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Our Vision</h3>
                        <p className="font-sans font-medium text-[16px] text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="w-[32%]">
                        <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Our Story</h3>
                        <p className="font-sans font-medium text-[16px] text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                    </div>
                    <div className="w-[32%]">
                        <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Our Brands</h3>
                        <p className="font-sans font-medium text-[16px] text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default About