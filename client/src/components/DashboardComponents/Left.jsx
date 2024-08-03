import React from 'react'
import ProfileImg from "../../assets/ProfileImg.jpg"
import NavItems from './NavItems'
import { HiBars2 } from "react-icons/hi2";
import { useSelector } from 'react-redux';

function Left({bar, setBar}) {

    const {currentUser, loading, error} = useSelector(state => state.user)

  return (
    <div className=' bg-[#fff]  px-[4%] min-h-[90vh] rounded-md pt-5  '>
        <div onClick={()=>setBar(!bar)}  className={` lg:hidden flex text-[1.9rem] ${bar ? "justify-end" : "justify-center"}  `}>
        <HiBars2  />
        </div>
        <div className={` ${bar ? "" : "lg:flex hidden"} flex flex-col items-center text-center border-b border-gray-400 pb-6 `}>
            <div>
                <img src={ProfileImg} alt="" className=' w-[10rem] h-[10rem] object-cover rounded-md ' />
            </div>
            <div className=' mt-3 '>
                <h3 className=' text-[1.5rem] '>{currentUser?.firstName}  {currentUser?.lastName}</h3>
                <h3 className=' text-[1.3rem] font-semibold '>Referrel ID: {currentUser?.referrelId}</h3>
                <h3 className='text-[1.3rem] text-[#414141] '>Joined: July 16th 2024</h3>
                <h3 className='text-[1.3rem] text-[#414141] '>Sponsored By: Md Sagor(01852478954)</h3>
            </div>
        </div>
        <div className=' mt-5 '>
            <NavItems  bar={bar} setBar={setBar}  />
        </div>
    </div>
  )
}

export default Left