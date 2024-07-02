import React, { useState } from 'react'
import Container from '../Container'
import { MdOutlineArrowDropDown } from "react-icons/md";


const Loging = () => {

    let [divisionShow, setShowDivision] = useState(false)
    let [districtShow, setDistirctShow] = useState(false)
    return (
        <section>
            <Container>
                <div className="">
                    <h3 className="font-sans font-bold text-[48px] text-[#262626] pt-[100px]">Sign up</h3>
                    <h4 className="font-sans font-medium text-[#767676] text-[16px] pb-[100px]">Home  &#62;	Sign up</h4>
                </div>
                <div className="w-[50%]">
                    <p className="font-sans font-medium text-[16px] text-[#767676] pb-[60px] border-b-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                </div>
                <div className="w-[60%]">
                    <h3 className=" font-sans font-bold text-[48px] text-[#262626] py-[50px]">Your Personal Details</h3>
                    <div className="flex justify-between">
                        <div className="w-[50%]">
                            <div className="py-[20px]">
                                <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">First Name</h3>
                                <h5 className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] border-b-2">First Name</h5>
                            </div>
                            <div className="">
                                <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Email address</h3>
                                <h5 className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] border-b-2">company@domain.com</h5>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div className="py-[20px] mx-[20px]">
                                <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Last Name</h3>
                                <h5 className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] border-b-2">Last Name</h5>
                            </div>
                            <div className="mx-[20px]">
                                <h2 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Telephone</h2>
                                <h5 className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] border-b-2">Your phone number</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[60%] pb-[100px]">
                    <h3 className=" font-sans font-bold text-[48px] text-[#262626] py-[50px]">New Customer</h3>
                    <div className="flex justify-between">
                        <div className="w-[50%]">
                            <div className="py-[20px]">
                                <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Address 1</h3>
                                <h5 className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] border-b-2">4279 Zboncak Port Suite 6212</h5>
                            </div>
                            <div className="py-[20px]">
                                <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">City</h3>
                                <h5 className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] border-b-2">Your city</h5>
                            </div>
                            <div className="py-[20px] border-b-2">
                                <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Division</h3>
                                <div className="flex items-center justify-between text-[24px] relative">
                                    <h5 className="font-sans font-medium text-[16px] text-[#767676]">Please select</h5>
                                    <div onClick={() => setShowDivision(!divisionShow)} className="">
                                        <MdOutlineArrowDropDown />
                                        {divisionShow &&
                                            <div className="">
                                                <ul className=" absolute top-[50px] left-[380px] border-2 rounded">
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Barishal</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Chattogram</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Dhaka</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Khulna</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Rajshahi</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Rangpur</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Mymensingh</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Sylhet</li>
                                                </ul>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div className="py-[20px] mx-[20px]">
                                <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Address 2</h3>
                                <h5 className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] border-b-2">4279 Zboncak Port Suite 6212</h5>
                            </div>
                            <div className="mx-[20px] py-[20px]">
                                <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Post Code</h3>
                                <h5 className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] border-b-2">05228</h5>
                            </div>
                            <div className="mx-[20px] py-[20px] border-b-2">
                                <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">District</h3>
                                <div className="flex items-center justify-between text-[24px] relative">
                                    <h5 className="font-sans font-medium text-[16px] text-[#767676]">Please select</h5>
                                    <div onClick={() => setDistirctShow(!districtShow)} className="">
                                        <MdOutlineArrowDropDown />
                                        {districtShow &&
                                            <div className="">
                                                <ul className=" absolute top-[60px] left-[380px] border-2 rounded">
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Dhaka</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Faridpur</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Gazipur</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Gopalganj</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Jamalpur</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Kishorganj</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Madripur</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Manikganj</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Munshiganj</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Mymenshingh</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Narayanganj</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Narsingdi</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Netrokona</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Rajbari</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Shariatpur</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Sherpur</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Tangail</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Bogura</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Joypurhat</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Naogaon</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Natore</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Nawabganj</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Pabna</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Rajshahi</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Sirajgonj</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Dinajpur</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Gaibandha</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Kurigram</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Lalmonirhat</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Nilphamari</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Panchagarh</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Rangpur</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Thakurgaon</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Barguna</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Barishal</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Bhola</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Jhalokati</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Patuakhali</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Projpur</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Bandarban</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Brahmanbaria</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Chandpur</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Chittagong</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Comilla</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Cox's Bazar</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Feni</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Khagrachari</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Lakshmipur</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Noakhali</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Rangamati</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Habiganj</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Maulvibazar</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Sunamganj</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Sylhet</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Bagerhat</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Chuadanga</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Jessore</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Jhenaidha</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Khulna</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Kushtia</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Magura</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Meherpur</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Narail</li>
                                                    <li className="font-sans font-semibold text-[18px] text-[#767676] text-center py-1 rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Satkhira</li>
                                                </ul>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[70%] pb-[100px]">
                    <h3 className="font-sans font-bold text-[48px] text-[#262626] py-[50px]">Your Password</h3>
                    <div className="flex justify-between">
                        <div className="w-[50%]">
                            <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Password</h3>
                            <h4 className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] border-b-2">Password</h4>
                        </div>
                        <div className="w-[50%] mx-5">
                            <h3 className="font-sans font-semibold text-[24px] text-[#262626] pb-[10px]">Repeat Password</h3>
                            <h5 className="font-sans font-medium text-[16px] text-[#767676] pb-[20px] border-b-2">Repeat password</h5>
                        </div>
                    </div>
                </div>
                <div className="font-sans font-medium text-[18px] text-[#767676]">
                   <label htmlFor=""></label>
                   <input type="checkbox"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have read and agree to the Privacy Policy
                </div>
                <div className="py-[30px] font-sans font-medium text-[18px] text-[#767676]">
                    <label htmlFor="">Subscribe Newsletter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="checkbox"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No
                </div>
                <div className="py-[50px]">
                    <h3 className="font-sans font-semibold text-[18px] text-[#262626] border-2 border-[#262626] w-[200px] h-[60px] text-center leading-[60px] rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out">Log in</h3>
                </div>
            </Container>
        </section>
    )
}

export default Loging