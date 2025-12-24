import React from 'react'
import abstract from "../assets/abstract.png"

const Footer = () => {
  return (
        <footer id='footer' className="relative p-8 overflow-hidden flex flex-col m-4 bg-gradient-to-t from-[#0C0E16] from-0% via-[#060C25] via-70% to-[#6584FE]/25 backdrop-blur-[50px] to-100% rounded-4xl">
            <div className='absolute top-0 left-1/2 md:left-1/8 right-0 w-full bottom-0'>
                <img src={abstract} alt="" />
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-11 md:gap-0'>
                <div className='flex flex-col gap-12'>
                    <h1>Logo</h1>
                    <div className='flex flex-col gap-4'>
                        <h3>Nama Company</h3>
                        <p className='text-gray-400 font-light'>@ 2025 Company. All rights reserved.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24'>
                    <div>
                        <h1>Menu</h1>
                        <ul className='text-gray-400 font-light'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Product</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Legal</h1>
                        <ul className='text-gray-400 font-light'>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Cookies</li>
                            <li>License</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer

