
import { useContext } from 'react'
import Container from '../Container'
import Arrivalsitem from './Arrivalsitem'
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { HiArrowSmRight,HiArrowSmLeft } from "react-icons/hi";



function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="h-[60px] w-[60px] bg-[#979797] rounded-full text-center leading-[60px] text-[30px] text-white absolute top-[40%] right-[-12px] z-50 translate-y-[-40%]"><HiArrowSmRight className="inline-block"/></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="h-[60px] w-[60px] bg-[#979797] rounded-full text-center leading-[60px] text-[30px] text-white absolute top-[40%] left-[-25px] z-50 translate-y-[-40%]"><HiArrowSmLeft className="inline-block"/></div>
  );
}

const Arrivals = () => {
  let data = useContext(apiData)
  var settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section>
      <Container>
        <h3 className="font-sans font-bold text-[36px] text-[#262626] pb-[30px]">New Arrivals</h3>
        <Slider {...settings}>
          {data.map((items) => (
            <Arrivalsitem items={items} />
          ))}
          </Slider>
      </Container>
    </section>
  )
}

export default Arrivals