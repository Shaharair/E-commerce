import React from 'react'
import BannerImg from "./assets/banner.png"
import Slider from "react-slick";
import Container from './Container';
import Flex from './Flex';
import { MdLocalShipping } from "react-icons/md";
import { SlReload } from "react-icons/sl";


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        arrows:false,
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                    position:"absolute",
                    left:"70px",
                    top:"50%",
                    transform:"translateY(-50%)"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "30px",
                    color: "transparent",
                    borderRight: "4px #fff solid",
                    padding:"10px 0"
                }}
            >
                0{i + 1}
            </div>
        )
    };
    return (
        <>
        <Slider {...settings}>
            <div className="">
                <img src={BannerImg} alt="banner" />
            </div>
            <div className="">
                <img src={BannerImg} alt="banner" />
            </div>
            <div className="">
                <img src={BannerImg} alt="banner" />
            </div>
            <div className="">
                <img src={BannerImg} alt="banner" />
            </div>
            <div className="">
                <img src={BannerImg} alt="banner" />
            </div>
            <div className="">
                <img src={BannerImg} alt="banner" />
            </div>
        </Slider>
        <Container>
            <Flex className="justify-between">
               <div className="">
                <h2 className="font-sans font-medium text-[18px] text-[#6D6D6D]"><span className="font-sans font-bold text-[30px] pr-4 text-[#262626]">2</span>Two years warranty</h2>
               </div>
               <div className="font-sans font-bold text-[30px]">
                <div className="flex items-center gap-4">
                    <MdLocalShipping/>
                    <h3 className="font-sans font-medium text-[18px] text-[#6D6D6D]">Free shipping</h3>
                </div>
               </div>
               <div className="font-sans font-bold text-[30px]">
                <div className="flex items-center gap-4">
                    <SlReload/>
                    <p className="font-sans font-medium text-[18px] text-[#6D6D6D]">Return policy in 30 days</p>
                </div>
               </div>
            </Flex>
        </Container>


        </>

    )
}

export default Banner