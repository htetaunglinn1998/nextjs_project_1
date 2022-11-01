import React from 'react'
import Image from 'next/image'


const Home = () => {
  return (
    <div className='bg-[#171717] h-screen'>
      <nav className='text-white text-md flex justify-between px-5 py-8 font-medium'>
        <h1 className='text-xl'>
          Logo
        </h1>
        <ul className='flex gap-5'>
          <li>HOME</li>
          <li>WORK</li>
          <li>ABOUT</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <main>
        <div className='hero-section tracking-widest'>
          <h1 className=' text-center text-white font-bold text-8xl'>
            CREATIVE <br />
            DEVELOPER
          </h1>

        </div>
      </main>
    </div>
  )
}

export default Home