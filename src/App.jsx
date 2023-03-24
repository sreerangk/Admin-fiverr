import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import ProfileCard from './components/ProfileCard'
import RightSide from './components/RightSide'

function App() {

  return (
    <>
      <Navbar />
      <section>
        <div className='grid grid-cols-1 lg:grid-cols-7 gap-8 p-8'>
          <div className='lg:col-span-2'>
            <ProfileCard />
          </div>
          <div className='lg:col-span-5'>
            <RightSide />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
