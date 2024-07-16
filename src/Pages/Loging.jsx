import React, { useState } from 'react'
import Container from '../Container'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

const Loging = () => {

    const auth = getAuth();
    let navigate = useNavigate()



    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [passwordShow, setPasswordShow] = useState(false)

    let handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    let handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    let handleSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log("user",user);
            })
            .then(() => {
                navigate("/myaccount")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }

    return (
        <section>
            <Container>
                <div className="">
                    <h3 className="font-sans font-bold text-[48px] text-[#262626] pt-[100px]">Loging</h3>
                    <h3 className="font-sans font-medium text-[16px] text-[#767676] pb-[100px]">Home  &#62;	Login</h3>
                </div>
                <div className="w-[50%] border-b-2">
                    <p className=" font-sans font-medium text-[16px] text-[#767676] pb-[50px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                </div>
                <div className="w-[70%]">
                    <h3 className=" font-sans font-bold text-[48px] text-[#262626] py-[50px]">Returning Customer</h3>
                    <div className="flex justify-between">
                        <div className="w-[50%] border-b-2">
                            <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Email address/Phone Number</h3>
                            <input onChange={handleEmail} type="text" placeholder="Email address" className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] outline-none" />
                        </div>
                        <div className="w-[50%] mx-5 border-b-2 relative">
                            <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Password</h3>
                            <input onChange={handlePassword} type={passwordShow ? "text" : "password"} placeholder="Password" className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] outline-none" />
                            <div onClick={(() => setPasswordShow(!passwordShow))} className=" absolute top-[80%] translate-y-[-80%] right-0">
                                {passwordShow == true ? <FaRegEyeSlash/> : <FaEye/>}
                            </div>
                        </div>
                    </div>
                    <div onClick={handleSubmit} className="py-[50px] border-b-2">
                        <h3 className="font-sans font-semibold text-[18px] text-[white] border-2 border-[#262626] w-[200px] h-[60px] rounded leading-[60px] text-center bg-[#262626]">Login</h3>
                    </div>
                </div>
                <div className="w-[50%]">
                    <h3 className="font-sans font-bold text-[40px] text-[#262626] py-[30px]">New Customer</h3>
                    <p className="font-sans font-medium text-[16px] text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <h5 className="font-sans font-semibold text-[18px] text-[#262626] border-2 border-[#262626] w-[200px] h-[60px] text-center leading-[60px] rounded hover:bg-[#262626] hover:text-[white] my-[50px] duration-300 ease-in-out">Continue</h5>
                </div>
            </Container>
        </section>
    )
}

export default Loging