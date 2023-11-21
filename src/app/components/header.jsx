"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";
import React, { useContext } from "react";
import { UserContext } from "@/helpers/userContext";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";
import axios from "axios";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  console.log(isLoggedIn)
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      setIsLoggedIn(false);
      toast.success("Logout successful");

      router.push("/");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const [springs, api] = useSpring(() => ({
    from: { x: 10 },
  }));
  const handleClick = () => {
    api.start({
      from: {
        x: 10,
      },
      to: {
        x: 0,
      },
    });
    setToggle(!toggle);
  };
  return (
    <header className='container mx-auto'>
      <Toaster />
      <div className='container mx-auto my-7 '>
        <div className='flex justify-between items-center relative '>
          <Link className=' font-semibold' href='/'>
            <div className='flex items-center justify-center w-12 h-12  shadow-custom rounded-full bg-white '>
              <svg
                width='32'
                height='39'
                viewBox='0 0 32 39'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M15.9906 1.31726L26.6031 11.9523C28.7019 14.0541 30.1315 16.7325 30.7111 19.6487C31.2906 22.5648 30.9942 25.5877 29.8591 28.335C28.7241 31.0823 26.8015 33.4305 24.3346 35.0827C21.8676 36.7348 18.9671 37.6167 16 37.6167C13.0329 37.6167 10.1324 36.7348 7.66543 35.0827C5.19848 33.4305 3.2759 31.0823 2.14087 28.335C1.00585 25.5877 0.709372 22.5648 1.28895 19.6487C1.86852 16.7325 3.29811 14.0541 5.39688 11.9523L15.9906 1.31726Z'
                  stroke='black'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
          </Link>
          <nav className='p-4 mx-4 '>
            {/* Mobile Header */}
            <animated.div
              className=' sm:hidden text-[30px] '
              style={{
                ...springs,
              }}>
              <button onClick={handleClick}>
                {!toggle ? <AiOutlineMenu /> : ""}
              </button>
              {toggle ? (
                <div className='flex z-[30]  flex-col absolute top-[-10px] right-[5px] p-1 rounded-bl-lg w-[180px]  bg-white '>
                  <div className='flex justify-between p-2 '>
                    <div>
                      <h1 className='text-[16px] font-[700]'>WebCareCircle </h1>
                    </div>
                    <div className='text-[16px] mt-1' onClick={handleClick}>
                      <ImCancelCircle />
                    </div>
                  </div>
                  <Link
                    className='text-[16px] font-[500] text-[#000] p-2'
                    href='/'>
                    Home
                  </Link>
                  <Link
                    className='text-[16px] font-[500] text-[#000] p-2'
                    href='/about'>
                    About Us
                  </Link>

                  <Link
                    className='text-[16px] font-[500] text-[#000] p-2'
                    href='/findblood'>
                    Find Blood
                  </Link>
                  <Link
                    className='text-[16px] font-[500] text-[#000] p-2'
                    href='/register'>
                    Register Now
                  </Link>
                  {isLoggedIn ? (
                    <button
                      onClick={logout}
                      className='text-[16px] font-[500] text-[#000] p-2'>
                      LogOut
                    </button>
                  ) : (
                    <Link
                      className='text-[16px] font-[500] text-[#000] p-2'
                      href='/login'>
                      Log In
                    </Link>
                  )}
                </div>
              ) : (
                ""
              )}
            </animated.div>

            {/* desktop Header */}
            <div className='hidden sm:block    '>
              <Link className='text-[16px] font-[500] text-[#000] p-2' href='/'>
                Home
              </Link>
              <Link
                className='text-[16px] font-[500] text-[#000] p-2'
                href='/about'>
                About Us
              </Link>
              <Link
                className='text-[16px] font-[500] text-[#000] p-2'
                href='/findblood'>
                Find Blood
              </Link>

              <Link
                className='text-[16px] font-[500] text-[#000] p-2'
                href='/register'>
                Register Now
              </Link>

              {isLoggedIn ? (
                <button
                  onClick={logout}
                  className='text-[16px] font-[500] text-[#000] p-2'>
                  LogOut
                </button>
              ) : (
                <Link
                  className='text-[16px] font-[500] text-[#000] p-2'
                  href='/login'>
                  Log In
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
