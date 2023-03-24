import React from 'react'
import { FcBusinessman } from 'react-icons/fc'

const ProfileCard = () => {
    return (
        <div className='bg-white p-5 shadow-xl'>
            <div className='flex items-center justify-between border-b-2 border-slate-400 pb-10 pt-3'>
                <div className='flex items-center gap-4'>
                    <div className='p-1 bg-slate-300 rounded-full'><FcBusinessman className='text-4xl' /></div>
                    <h1 className='text-xl font-semibold'>bilcodes</h1>
                </div>
                <h2 className='text-red-500'>5</h2>
            </div>
            <ul className='mt-6 border-b-2 border-slate-400'>
                <li className='flex items-center justify-between mb-3'>
                    <p>Inbox response rate</p>
                    <div className='flex items-center gap-3'>
                        <div className='w-[100px] h-3 bg-slate-300 rounded-3xl'>
                            <div className='w-[100px] h-full bg-green-400 rounded-3xl'></div>
                        </div>
                        <p>100%</p>
                    </div>
                </li>
                <li className='flex items-center justify-between mb-3'>
                    <p>Inbox response time</p>
                    <div className='flex items-center gap-3'>
                        <p className='text-lg text-green-500 font-semibold'>2 Hrs</p>
                    </div>
                </li>
                <li className='mb-3 flex items-center justify-between'>
                    <p>Order response rate</p>
                    <div className='flex items-center gap-3'>
                        <div className='w-[100px] h-3 bg-slate-300 rounded-3xl'>
                            <div className='w-[100px] h-full bg-green-400 rounded-3xl'></div>
                        </div>
                        <p>100%</p>
                    </div>
                </li>
                <li className='flex items-center justify-between mb-3'>
                    <p>Delivered on time</p>
                    <div className='flex items-center gap-3'>
                        <div className='w-[100px] h-3 bg-slate-300 rounded-3xl'>
                            <div className='w-[100px] h-full bg-green-400 rounded-3xl'></div>
                        </div>
                        <p>100%</p>
                    </div>
                </li>
                <li className='flex items-center justify-between mb-5'>
                    <p>Order completion</p>
                    <div className='flex items-center gap-5'>
                        <div className='w-[100px] h-3 bg-slate-300 rounded-3xl'>
                            <div className='w-[60px] h-full bg-green-400 rounded-3xl'></div>
                        </div>
                        <p>60%</p>
                    </div>
                </li>

            </ul>
            <div className='pb-5 pt-5 flex items-center justify-between'>
                <p>Earned in March</p>
                <p className='font-bold'>$0</p>
            </div>
        </div >
    )
}

export default ProfileCard
