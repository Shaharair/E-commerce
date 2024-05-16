import React from 'react'
import Container from './Container'
import AdsImg from "./assets/Ad3.png"

const Ads_2 = () => {
  return (
        <section>
            <Container>
                <div className="py-[60px]">
                    <img src={AdsImg} alt="" />
                </div>
            </Container>
        </section>
  )
}

export default Ads_2