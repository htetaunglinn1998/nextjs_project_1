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
        <div id='hero-section' className='hero-section tracking-widest overflow-hidden'>
          <h1 className=' text-center text-white font-bold text-8xl'>
            CREATIVE <br />
            DEVELOPER
          </h1>
          <div className='flex justify-center -m-7 overflow-hidden'>
            <Image width={450} height={500} src="https://assets.website-files.com/6310ffd0c310a8603c82807d/63110b34132eca9f79d3863b_hm-hero.webp" objectFit='cover'></Image>
          </div>
          <div className='flex justify-between mx-7 text-sm '>
            <p className='text-gray-400'>DESIGN STUDIO <br /> AVAILABLE FOR WORK</p>
            <p className='text-gray-400 text-right'>9081 LAKEWOOD <br /> GARDENS JUNCTION</p>
          </div>
        </div>

        <div className=''>
          <div>
            <p>3D COMMERCIAL</p>
            <p>SPRING HARMONY</p>
            <p>Morbi dolor nulla tellus sit dignissim tortor, sed. Eget maecenas suspendisse.</p>
            <a className='text-white'>VIEW LIVE WALLPAPER</a>
          </div>
          <div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default Home