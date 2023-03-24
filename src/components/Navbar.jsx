import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineQuestionCircle } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { CgMenuRightAlt } from 'react-icons/cg'
import { HiChevronDown } from 'react-icons/hi'
import { BiBell } from 'react-icons/bi'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { FcBusinessman } from 'react-icons/fc'

const Navbar = () => {

    const [nav, setNav] = useState("nav")
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='h-20 px-8 z-50 bg-white top-0 sticky shadow-md'>
            <div className='flex items-center h-20 max-w-[1400px] mx-auto justify-between'>
                <div className='flex items-center'>
                    <div className='mr-10 text-3xl font-extrabold'>fiverr<span className='text-green-500'>.</span></div>
                    <ul className='hidden lg:flex gap-8'>
                        <li key="Dashboard" className='font-medium' > Dashboard</li>
                        <li key="Business" className='font-medium flex items-center'>My Business <HiChevronDown className='text-xl' /></li>
                        <li key="Marketting" className='font-medium flex items-center'>Growth & Marketting <HiChevronDown className='text-xl' /></li>
                        <li key="Analytics" className='font-medium flex items-center'>Analytics <HiChevronDown className='text-xl' /></li>
                    </ul>
                </div>
                <ul className='hidden lg:flex items-center'>

                    <li key="BiBell" className='p-4 font-semibold text-2xl cursor-pointer'><BiBell /></li>
                    <li key="HiOutlineEnvelope" className='p-4 font-semibold text-2xl cursor-pointer'><HiOutlineEnvelope /></li>
                    <li key="AiOutlineQuestionCircle" className='p-4 font-semibold text-2xl cursor-pointer'><AiOutlineQuestionCircle /></li>
                    <li key="FcBusinessman" className='p-4 font-semibold text-3xl cursor-pointer flex'><div className='p-1 bg-slate-300 rounded-full relative'><FcBusinessman /><span className='text-green-400 text-6xl absolute -bottom-1 right-0'>.</span></div></li>
                </ul>

                <div className='lg:hidden flex flex-row' onClick={handleNav}>

                    {!nav ? <AiOutlineClose size={30} /> : <CgMenuRightAlt size={30} />}

                </div>
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-white ease-in-out duration-500 lg:hidden' : 'fixed left-[-100%]'}>

                    <div className='ml-6 mt-5 text-3xl font-extrabold'>fiverr<span className='text-green-500'>.</span></div>
                    <ul className='flex items-center justify-center mt-6'>

                        <li key="BiBell" className='p-4 font-semibold text-2xl cursor-pointer'><BiBell /></li>
                        <li key="HiOutlineEnvelope" className='p-4 font-semibold text-2xl cursor-pointer'><HiOutlineEnvelope /></li>
                        <li key="AiOutlineQuestionCircle" className='p-4 font-semibold text-2xl cursor-pointer'><AiOutlineQuestionCircle /></li>
                        <li key="FcBusinessman" className='p-4 font-semibold text-3xl cursor-pointer flex'><div className='p-1 bg-slate-300 rounded-full relative'><FcBusinessman /><span className='text-green-400 text-6xl absolute -bottom-1 right-0'>.</span></div></li>
                    </ul>
                    <ul className='p-4 uppercase'>
                        <li className='p-4 border-b border-gray-600 font-bold cursor-pointer rounded-xl mt-2 hover:shadow-inner hover:shadow-black flex'>Dashboard</li>
                        <li className='p-4 border-b border-gray-600 font-bold cursor-pointer rounded-xl mt-2 hover:shadow-inner hover:shadow-black flex'>My Business <HiChevronDown className='text-xl' /></li>
                        <li className='p-4 border-b border-gray-600 font-bold cursor-pointer rounded-xl mt-2 hover:shadow-inner hover:shadow-black flex'>Growth & Marketting <HiChevronDown className='text-xl' /></li>
                        <li className='p-4 border-b border-gray-600 font-bold cursor-pointer rounded-xl mt-2 hover:shadow-inner hover:shadow-black flex'>Analytics <HiChevronDown className='text-xl' /></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Navbar