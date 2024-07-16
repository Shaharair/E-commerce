import React, { useContext, useEffect, useRef, useState } from 'react';
import Container from './Container';
import Flex from './Flex';
import { FaBars, FaSearch, FaUserAlt, FaCartPlus } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import ImageOne from "./assets/image.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { apiData } from './Components/ContextApi';
import { removeproduct } from './Components/slice/ProductSlice';
import { toast } from 'react-toastify';

const Navbar = () => {
  let info = useContext(apiData);
  let data = useSelector((state) => state.product.cartItem);
  let [cartShow, setCartShow] = useState(false);
  let [ViewCartShow, setViewCartShow] = useState(false);
  let [UserShow, setUserShow] = useState(false);
  let [searchInput, setSearchInput] = useState('');
  let [searchFilter, setSearchFilter] = useState([]);
  let [focusedIndex, setFocusedIndex] = useState(-1); // Track focused item index
  let Cartref = useRef();
  let ViewCartref = useRef();
  let Userref = useRef();
  let userdone = useRef();
  let navigate = useNavigate();
  let dispatch = useDispatch()

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (Cartref.current && Cartref.current.contains(e.target)) {
      setCartShow(!cartShow);
    } else {
      setCartShow(false);
    }
    if (ViewCartref.current && ViewCartref.current.contains(e.target)) {
      setViewCartShow(!ViewCartShow);
    } else {
      setViewCartShow(false);
    }
    if (Userref.current && Userref.current.contains(e.target)) {
      setUserShow(!UserShow);
    } else {
      setUserShow(false);
    }
    if (userdone.current.contains(e.target)) {
      setViewCartShow(true);
    }
  };

  const handleInput = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      setSearchFilter([]);
    } else {
      let searchResults = info.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchFilter(searchResults);
      setFocusedIndex(-1); // Reset focused index when search results change
    }
  };

  let handleDelete = (index) => {
    dispatch(removeproduct(index))
  }

  let handleToViewcart = () =>{
    toast("Go to cart page")
    setViewCartShow(false);
    setTimeout(()=>{
      navigate("/cart")
    },1000)
  }

  let handleCheckout = () =>{
    toast("Go to cheackout page")
    setViewCartShow(false);
    setTimeout(()=>{
      navigate("/cheackout")
    },1000)
  }


  const handleSingleSearch = (id) => {
    navigate(`/products/${id}`);
    setSearchFilter([]);
    setSearchInput("");
  };

  const handleKey = (e) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : searchFilter.length - 1
        );
        break;
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex < searchFilter.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case "Enter":
        if (focusedIndex !== -1 && searchFilter[focusedIndex]) {
          handleSingleSearch(searchFilter[focusedIndex].id);
        }
        break;
      default:
        break;
    }
  };

  return (
    <nav className="bg-[#F5F5F3] py-4">
      <Container>
        <Flex className="items-center">
          {/* Left Section (Shop by Category) */}
          <div className="w-1/4 relative">
            <div ref={Cartref} className="flex items-center gap-3">
              <FaBars />
              <p className="font-sans font-medium text-[18px] text-[#262626]">Shop by Category</p>
            </div>
            {/* Cart Dropdown */}
            {cartShow && (
              <div className="absolute z-50 top-[30px] left-0 bg-[#262626] w-[300px]">
                <ul>
                  <li className="font-sans font-medium text-[18px] text-[rgba(255,255,255,0.5)] py-2 duration-300 ease-in-out pl-3 hover:pl-6">Accessories</li>
                  <li className="font-sans font-medium text-[18px] text-[rgba(255,255,255,0.5)] py-2 duration-300 ease-in-out pl-3 hover:pl-6">Furniture</li>
                  <li className="font-sans font-medium text-[18px] text-[rgba(255,255,255,0.5)] py-2 duration-300 ease-in-out pl-3 hover:pl-6">Electronics</li>
                  <li className="font-sans font-medium text-[18px] text-[rgba(255,255,255,0.5)] py-2 duration-300 ease-in-out pl-3 hover:pl-6">Clothes</li>
                  <li className="font-sans font-medium text-[18px] text-[rgba(255,255,255,0.5)] py-2 duration-300 ease-in-out pl-3 hover:pl-6">Bags</li>
                  <li className="font-sans font-medium text-[18px] text-[rgba(255,255,255,0.5)] py-2 duration-300 ease-in-out pl-3 hover:pl-6">Home appliances</li>
                </ul>
              </div>
            )}
          </div>

          {/* Middle Section (Search Products) */}
          <div className="w-1/2 relative">
            <div className="relative">
              <input
                value={searchInput}
                onChange={handleInput}
                onKeyDown={handleKey}
                placeholder="Search Products"
                type="search"
                className="w-full h-12 outline-none pl-4"
              />
              <div className="absolute top-[50%] right-6 translate-y-[-50%]">
                <FaSearch />
              </div>
              {/* Search Results Dropdown */}
              {searchFilter.length > 0 && (
                <div className="w-[500px] h-[400px] overflow-scroll z-50 absolute bg-[#F5F5F3] top-[60px] left-0">
                  {searchFilter.map((item, index) => (
                    <div
                      key={item.id}
                      className={`py-4 ${index === focusedIndex ? "bg-gray-200" : ""
                        }`}
                      onClick={() => handleSingleSearch(item.id)}
                    >
                      <div className="flex justify-around items-center">
                        <div className="">
                          <img
                            className="w-[100px] h-[100px]"
                            src={item.thumbnail}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h3 className="font-sans font-medium text-[18px] text-[#262626]">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Section (User Options and Cart) */}
          <div className="w-1/4 relative">
            <div className="flex justify-center items-center gap-8">
              {/* User Dropdown */}
              <div className="flex">
                <div ref={Userref}>
                  <FaUserAlt />
                </div>
                {UserShow && (
                  <div className="w-[200px] top-[30px] absolute z-50 left-0 border-2 border-[#F5F5F3]">
                    <ul>
                      <li className="font-sans font-semibold text-[18px] text-[#262626] hover:bg-[#262626] text-center hover:text-[white] duration-300 ease-in-out py-2 rounded">
                        <Link to="/myaccount">My Account</Link>
                      </li>
                      <li className="font-sans font-semibold text-[18px] text-[#262626] hover:bg-[#262626] text-center hover:text-[white] duration-300 ease-in-out py-2 rounded">
                        <Link to="/loging">Login</Link>
                      </li>
                      <li className="font-sans font-semibold text-[18px] text-[#262626] hover:bg-[#262626] text-center hover:text-[white] duration-300 ease-in-out py-2 rounded">
                        <Link to="/signup">Signup</Link>
                      </li>
                    </ul>
                  </div>
                )}
                <MdOutlineArrowDropDown />
              </div>

              {/* Cart Icon */}
              <div ref={ViewCartref}>
                <div className="relative">
                  <FaCartPlus />
                  {data.length > 0 && (
                    <div className="absolute h-[35px] w-[50px] left-[15px] top-[-20px] bg-[red] rounded-full border-4 border-[white] text-center font-sans font-semibold text-[18px] text-[white]">
                      {data.length}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div ref={userdone} className="">
              {ViewCartShow &&
                <div className="w-[360px] z-50 absolute bg-[#F5F5F3] top-[30px] right-0">

                  {data.map((items, index) => (
                    <div className="py-4">
                      <div className="flex justify-around items-center">
                        <div className="">
                          <img className="w-[100px] h-[100px]" src={items.thumbnail} alt="" />
                        </div>
                        <div className="">
                          <h3 className="font-sans font-medium text-[18px] text-[#262626]">
                            {items.title}
                          </h3>
                          <h2 className="font-sans font-medium text-[18px] text-[#262626]">
                            ${items.price}
                          </h2>
                        </div>
                        <div onClick={() => handleDelete(index)} className="font-sans font-bold text-[18px]">
                          <RxCross2 />
                        </div>
                      </div>
                      <div className="">
                        <div className="flex justify-around">
                          <div className="">
                            <a onClick={handleToViewcart}
                              className="w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out font-sans font-semibold text-[18px]"
                            >
                              View Cart
                            </a>
                          </div>
                          <div className="">
                            <a onClick={handleCheckout}
                              className="w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] rounded hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out font-sans font-semibold text-[18px]"

                            >
                              Checkout
                              </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              }
            </div>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
