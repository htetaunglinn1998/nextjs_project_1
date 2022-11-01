import React from 'react'
import Image from 'next/image'


const Home = () => {
  return (
    <div className='bg-[#171717] '>
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
          <Image width={500} height={500} src="https://assets.website-files.com/6310ffd0c310a8603c82807d/63110b34132eca9f79d3863b_hm-hero.webp"></Image>
        </div>
      </main>
    </div>
  )
}

export default Home