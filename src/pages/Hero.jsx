import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function Hero() {
  return (    
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center 
        text-center max-w-[800px] w-full mx-auto p-4'>
        <div className="flex flex-col gap-4">
            <p className='uppercase'>workouts that are</p>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl 
                lg:text-7xl'>
                  <span className="text-yellow-400">Fit</span>
                  <span className='align-middle text-2xl'>for a </span>
                  <span className="text-blue-500">King</span>
            </h1>
        </div>
        <p className='text-sm md:text-base font-light'><span className='text-yellow-400 
          font-medium'>FIT</span> for a <span className='text-blue-400 
          font-medium'>King</span> proudly acknowledges all our users who accept the challenge of 
          dedication and hard work—because you’re not just <span className='text-yellow-400 
          font-medium'>working out</span>; you’re <span 
          className='text-blue-400 font-medium'>reigning supreme </span> on your <span className='text-yellow-400 
          font-medium'>fitness</span> journey. 
          Keep crushing it, and remember, every rep brings you closer to <span className='text-blue-400 
          font-medium'>your crown</span>!
        </p>
        <Link to="generate">
          <Button func={() =>  {
            // window.location.href = "#generate"
          }} text={"Accept & Begin"} />
        </Link>
    </div>
  )
}

export default Hero