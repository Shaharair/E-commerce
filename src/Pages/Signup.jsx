import React, { useState } from 'react'
import Container from '../Container'
import { MdArrowDropDown } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import { getDatabase, ref, set } from "firebase/database";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';




const Signup = () => {

    const auth = getAuth();
    const db = getDatabase();


    let [districtShow, setDistrictShow] = useState(false)
    let [divisionShow, setDivisionShow] = useState(false)

    let navigate = useNavigate();
    let [email, setEmail] = useState('')
    let [fristname, setFristname] = useState('')
    let [password, setPassword] = useState('')
    let [lastname, setLastname] = useState('')
    let [phonenumber, setPhonenumber] = useState('')
    let [passwordShow, setPasswordShow] = useState(false)

    let handleLastname = (e) =>{
        setLastname(e.target.value)
    }

    let handleFristname = (e) => {
        setFristname(e.target.value)
    }

    let handleEmail = (e) => {
        setEmail(e.target.value);
    }

    let handlePassword = (e) => {
        setPassword(e.target.value);
    }

    let handlePhone = (e) =>{
        setPhonenumber(e.target.value)
    }

    let handleSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {})
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: fristname,
                })
            }).then(() => {
                updateProfile(auth.currentUser, {
                    displayName: lastname,
                  })
            }).then(() => {
                updateProfile(auth.currentUser, {
                    displayName: phonenumber ,
                  })
            })
            .then(() => {
                toast("Go to Login page")
                setEmail("")
                setFristname("")
                setPassword("")
                setTimeout(() => {
                    navigate("/loging")
                }, 2000)
            })
            .then(() => {
                const db = getDatabase();
                set(ref(db, 'users/'), {
                    username: fristname,
                    username: lastname,
                    username: phonenumber,
                    email: email,
                });
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
                    <h3 className="font-sans font-bold text-[48px] text-[#262626] pt-[100px]">Sign up</h3>
                    <h5 className="font-sans font-medium text-[16px] text-[#767676] pb-[100px]">Home  &#62;	Sign up</h5>
                    <p className="font-sans font-medium text-[18px] text-[#767676] pr-[800px] pb-[50px] border-b-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                </div>
                <form action="">
                    <div className="w-[70%]">
                        <h3 className="font-sans font-bold text-[40px] text-[#262626] py-[50px]">Your Personal Details</h3>
                        <div className="flex justify-between flex-wrap">
                            <div className="w-[50%]">
                                <div className="border-b-2">
                                    <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">First Name</h3>
                                    <input onChange={handleFristname} type="text" placeholder="Frist Name" value={fristname} className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] outline-none" />
                                </div>
                                <div className="border-b-2">
                                    <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px] pt-[20px]">Email address</h3>
                                    <input onChange={handleEmail} type="text" placeholder="Email address" value={email} className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] outline-none" />
                                </div>
                            </div>
                            <div className="w-[50%]">
                                <div className="border-b-2 mx-5">
                                    <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Last Name</h3>
                                    <input onChange={handleLastname} type="text" placeholder="Last Name" className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] outline-none" />
                                </div>
                                <div className="border-b-2 mx-5">
                                    <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px] pt-[20px]">Telephone</h3>
                                    <input onChange={handlePhone} type="text" placeholder="Your phone number" className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b-2 py-[100px]">
                        <div className="w-[70%]">
                            <h3 className="font-sans font-bold text-[40px] text-[#262626] py-[50px]">New Customer</h3>
                            <div className="flex justify-between flex-wrap">
                                <div className="w-[50%]">
                                    <div className="border-b-2">
                                        <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Address 1</h3>
                                        <input type="text" placeholder="Address" className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] outline-none" />
                                    </div>
                                    <div className="border-b-2">
                                        <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px] pt-[20px]">City</h3>
                                        <input type="text" placeholder="Your city" className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] outline-none" />
                                    </div>
                                    <div className="flex items-center justify-between border-b-2 relative">
                                        <div className="">
                                            <h3 className="font-sans font-semibold text-[24px] text-[#262626] pt-[20px]">Division</h3>
                                            <input type="text" placeholder="Please select" className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] pt-[10px] outline-none" />
                                        </div>
                                        <div onClick={() => setDivisionShow(!divisionShow)} className="text-[30px]">
                                            <MdArrowDropDown />
                                            {divisionShow &&
                                                <div className="">
                                                    <ul className="absolute top-[110px] left-[450px] border-2 mt-[10px]">
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Dhaka</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Barishal</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Khulna</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Rangpur</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Mymesingh</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Rajshahi</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Chattogram</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Sylhet</li>
                                                    </ul>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[50%]">
                                    <div className=" border-b-2  mx-5">
                                        <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Address 2</h3>
                                        <input type="text" placeholder="Address" className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] outline-none" />
                                    </div>
                                    <div className=" border-b-2  mx-5">
                                        <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px] pt-[20px]">Post Code</h3>
                                        <input type="text" placeholder="Post Code" className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] outline-none" />
                                    </div>
                                    <div className="flex items-center justify-between border-b-2  mx-5 relative">
                                        <div className="">
                                            <h3 className="font-sans font-semibold text-[24px] text-[#262626] pt-[20px]">District</h3>
                                            <input type="text" placeholder="Please select" className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] pt-[10px] outline-none" />
                                        </div>
                                        <div onClick={() => setDistrictShow(!districtShow)} className="text-[30px]">
                                            <MdArrowDropDown />
                                            {districtShow &&
                                                <div className="">
                                                    <ul className="absolute top-[110px] left-[430px] border-2 mt-[10px]">
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Dhaka</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Dinajpur</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Bandarban</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Bagerhat</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Bhola</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Bogra</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Brahmanbaria</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Chandpur</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Chittagong</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Chuadanga</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Comilla</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Cox'S Bazar</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Faridput</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Feni</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Gaibandha</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Gazipur</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Gopalganj</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Habiganj</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Jaipurhat</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Jamalpur</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Jessore</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Jalakathi</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Jhinaidah</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Khagrachari</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Khulna</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Kishoreganj</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Kurigram</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Kushtia</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Lakshmipur</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Lalmonirhat</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Madaripur</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Magura</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Manikganj</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Meharpur</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Moulavibazar</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Munshiganj</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Mymensingh</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Naogaon</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Narayanganj</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Narsingdi</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Natore</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Nawabganj</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Netrokona</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Nilphamari</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Noakhali</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Norail</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Pabna</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Panchagarh</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Patuakhali</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Pirojpur</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Rajbari</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Rajshahi</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Rangamati</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Rangpur</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Satkhira</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Shariyatpur</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Sherpur</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Sirajganj</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Sunamganj</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Tangail</li>
                                                        <li className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1 text-center">Thakurgaon</li>
                                                    </ul>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b-2 py-[100px] pb-[100px]">
                        <div className="w-[70%]">
                            <h3 className="font-sans font-bold text-[40px] text-[#262626] py-[50px]">Your Password</h3>
                            <div className="flex justify-between">
                                <div className="w-[50%] border-b-2 relative">
                                    <h3 className="font-sans font-semibold text-[24px] text-[#262626] pt-[20px]">Password</h3>
                                    <input onChange={handlePassword} type={passwordShow ? "text" : "password"} placeholder="Password" value={password} className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] pt-[10px] outline-none" />
                                    <div onClick={() => setPasswordShow(!passwordShow)} className=" absolute top-[80%] translate-y-[-80%] right-0">
                                        {passwordShow == true ? <FaRegEyeSlash /> : <FaEye />}
                                    </div>
                                </div>
                                <div className="w-[50%] border-b-2  mx-5">
                                    <h3 className="font-sans font-semibold text-[24px] text-[#262626] pt-[20px]">Repeat Password</h3>
                                    <input type="text" placeholder="Repeat Password" className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] pt-[10px] outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-[100px]">
                        <div className="flex">
                            <label form=""></label>
                            <input type="checkbox" />
                            <h3 className="font-sans font-semibold text-[18px] text-[#767676] ms-9">I have read and agree to the Privacy Policy</h3>
                        </div>
                        <div className=" flex">
                            <h3 className="font-sans font-semibold text-[18px] text-[#767676] py-[30px]">Subscrive Newsletter</h3>
                            <input type="checkbox" name="yes" className="ms-7" />
                            <h3 className="font-sans font-semibold text-[18px] text-[#767676] py-[30px] ms-7">Yes</h3>
                            <input type="checkbox" name="yes" className="ms-7" />
                            <h3 className="font-sans font-semibold text-[18px] text-[#767676] py-[30px] ms-7">No</h3>
                        </div>
                        <div onClick={handleSubmit} className="">
                            <h3 className="font-sans font-semibold text-[18px] text-[white] w-[200px] h-[60px] border-2 border-[#262626] text-center leading-[60px] bg-[#262626]">Sing up</h3>
                        </div>
                    </div>
                </form>
                <ToastContainer />
            </Container>
        </section>
    )
}

export default Signup