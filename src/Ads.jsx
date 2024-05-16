import React from 'react'
import AdsImg from "./assets/Ad.png"
import AdOne from "./assets/Ad1.png"
import AdTwp from "./assets/Ad2.png"
import Container from './Container'
import Flex from './Flex'

const Ads = () => {
  return (
    <Container>
      <Flex>
        <div className="flex justify-between py-[100px]">
          <div className="w-[49%]">
            <img src={AdsImg} alt="Ads" />
          </div>
          <div className="w-[49%]">
            <div className="pb-[35px]">
              <img src={AdOne} alt="Ad1" />
            </div>
            <div className="">
              <img src={AdTwp} alt="Ad2" />
            </div>
          </div>
        </div>
      </Flex>
    </Container>
  )
}

export default Ads