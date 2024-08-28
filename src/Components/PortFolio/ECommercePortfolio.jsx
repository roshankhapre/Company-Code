import React from 'react';
import { assets } from '../../assests/assests';


const ECommercePortfolio = () => {
  return (
    <div className='px-14 mb-5'>
    <div className='bg-gradient-to-r from-rose-700 via-rose-500 to-rose-800 p-5'>
      <div className=''>
        <div className=' '>
          <p className='font-bold text-4xl  text-white mb-2 p-2 text-center'>E-commerce Website</p> <hr className='border-t-2 border-black rounded-xl' />
        </div>
      </div>
      <div className='flex m-10 gap-10'>
        <div className='w-80 h-48 bg-cover  transition-transform duration-500 ease-in-out transform hover:scale-105' style={{ backgroundImage: `url(${assets.Ecommerce})`, boxShadow: '-25px 20px 25px 7px rgba(0, 0, 0, 0.5)' }}></div>
        <div className='w-80 h-48 bg-cover  transition-transform duration-500 ease-in-out transform hover:scale-105' style={{ backgroundImage: `url(${assets.Ecommerce2})`, boxShadow: '-25px 20px 25px 7px rgba(0, 0, 0, 0.5)' }}></div>
        <div className='w-80 h-48 bg-cover  transition-transform duration-500 ease-in-out transform hover:scale-105' style={{ backgroundImage: `url(${assets.Ecommerce3})`, boxShadow: '-25px 25px 25px 7px rgba(0, 0, 0, 0.5)' }}></div>
        <div className='w-80 h-48 bg-cover  transition-transform duration-500 ease-in-out transform hover:scale-105' style={{ backgroundImage: `url(${assets.Ecommerce4})`, boxShadow: '-25px 25px 25px 7px rgba(0, 0, 0, 0.5)' }}></div>
      </div>
      <div className='flex justify-center gap-20'>
        <div className='w-80 h-48 bg-cover  transition-transform duration-500 ease-in-out transform hover:scale-105' style={{ backgroundImage: `url(${assets.Ecommerce5})`, boxShadow: '-25px 25px 25px 7px rgba(0, 0, 0, 0.5)' }}></div>
        <div className='w-80 h-48 bg-cover  transition-transform duration-500 ease-in-out transform hover:scale-105' style={{ backgroundImage: `url(${assets.Ecommerce6})`, boxShadow: '-25px 25px 25px 7px rgba(0, 0, 0, 0.5)' }}></div>
        <div className='w-80 h-48 bg-cover  transition-transform duration-500 ease-in-out transform hover:scale-105' style={{ backgroundImage: `url(${assets.Ecommerce7})`, boxShadow: '-25px 25px 25px 7px rgba(0, 0, 0, 0.5)' }}></div>
      </div>
      <div className=' w-96 mt-10bg-gradient-to-r  rounded-xl p-5'>
        <p className='font-bold text-xl mt-10'>Nature Nest</p>
        <p className=' text-white '>Unlock endless possibilities with our eCommerce site,
          Where shopping is effortless and always just right.
          Discover top brands and exclusive deals galore,
          All from the comfort of your home, and so much more!</p>
      </div>
      <div>
        <div className=' mb-5'>
          <hr className='border-t-2 border-gray-500 rounded-xl' />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ECommercePortfolio