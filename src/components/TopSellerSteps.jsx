import React from 'react'
import { GrAnnounce } from 'react-icons/gr'
import { GiBookmarklet, GiStarsStack } from 'react-icons/gi'

const TopSellerSteps = () => {
    return (
        <div className='bg-white shadow-lg p-6'>
            <h1 className='text-2xl font-bold'>3 steps to become a top seller on Fiverr</h1>
            <p className='mt-3 text-lg text-gray-500 font-normal'>The key to your success on Fiverr is the brand you build for yourself through your Fiverr reputation. We gathered some tips and resources to help you become a leading seller on Fiverr.</p>
            <div className='grid md:grid-cols-3 grid-cols-1 mt-8 gap-6'>
                <div className='flex flex-col'>
                    <GrAnnounce className='text-4xl' />
                    <h1 className='text-lg font-bold mt-3'>Get noticed</h1>
                    <p className='text-lg text-gray-500 mt-5 leading-8'>Tap into the power of social media by <span className='font-bold text-black'>sharing your Glg,</span> and <a className='text-blue-600' href="#">get expert help</a> to grow your impact</p>
                </div>
                <div>
                    <GiBookmarklet className='text-4xl' />
                    <h1 className='text-lg font-bold mt-3'>Get more skills & exposure</h1>
                    <p className='text-lg text-gray-500 mt-5 leading-8'>Hone your skills and expand your knowledge with online courses.you'll be able to offer more services and <span className='font-bold text-black'>gain more exposure</span> with every course completed.</p>
                </div>
                <div>
                    <GiStarsStack className='text-4xl' />
                    <h1 className='text-lg font-bold mt-3'>Become a successful seller!</h1>
                    <p className='text-lg text-gray-500 mt-5 leading-8'>Watch this free online course to learn how to create an outstanding service experience for your buy and <span className='font-bold text-black'>grow your career</span> as an online freelancer.</p>
                </div>
            </div>
        </div >
    )
}

export default TopSellerSteps
