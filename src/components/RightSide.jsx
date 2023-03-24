import React from 'react'
import TopSellerSteps from './TopSellerSteps'

const RightSide = () => {
    return (
        <div>
            <div className='bg-white p-3 flex items-center justify-between shadow-lg'>
                <h1 className='text-lg font-bold'>Active orders <span className='font-normal text-slate-500'>- 0 ($0)</span></h1>
                <select className='text-slate-400 font-medium p-3 border-2 rounded-md' name="" id="">
                    <option value="Active orders (0)">Active orders (0)</option>
                    <option value="option 2">option 2</option>
                    <option value="option 3">option 3</option>
                    <option value="option 4">option 4</option>
                </select>
            </div>
            <div className='flex items-center mt-12 mb-5'>
                <h3 className='w-56 text-slate-500 font-semibold'>Upgrade Your Business</h3>
                <div className='w-full items-center justify-center my-auto'>
                    <hr className='border-t-[3px] border-slate-400' />
                </div>
            </div>
            <TopSellerSteps />
        </div>
    )
}

export default RightSide
