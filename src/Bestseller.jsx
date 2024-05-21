import React, { useEffect, useState } from 'react'
import Container from './Container'
import axios from 'axios'
import productsimg from "./assets/Product1.png"

const Bestseller = () => {

    let [product, setProduct] = useState([])

    let getdata = () => {
        axios.get("https://dummyjson.com/products/search?q=phone").then((response) => {
            setProduct(response.data.products);
        })
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <>
            <section>
                <Container>
                    <div className="w-24%">
                        <div className="">
                            {product.map((item) => (
                                <div className="">
                                    <h2>{item.title}</h2>
                                    <img src={item.thumbanil} alt="" />
                                </div>

                            ))}
                        </div>
                    </div>

                </Container>
            </section>
        </>
    )
}

export default Bestseller