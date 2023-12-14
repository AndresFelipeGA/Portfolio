import React from 'react'

// import picture
import MyPhoto from '../assets/img/MyPhoto.webp'

const Hero = () => {
  return (
  <section id='home' 
  className='lg:h-[85vh] flex items-center bg-primary
  lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
    <div className="container mx-auto h-full"> 
      <div className="flex items-center h-full pt-8">
        {/* left side */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <p className='text-lg text-accent mb-[22px]'>Hey, I'm Andres Felipe </p>
          <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl
          lg:leading-[1.2] font-bold md:tracking-[-2px]'>
          I build & design <br /> Software </h1>
          <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg
          text-center lg:text-left'>
            Software engineer specialized in web development with experience
             in React, Next.js, Node.js, and Python. Software Engineering 
             student at Universidad Manuela Beltrán. Take a look at my portfolio
              to discover how I can contribute to your project. Excited about 
              new opportunities in software projects!
          </p>
          <button className='btn btn-md bg-accent hover:bg-accent-hover 
          md:btn-lg transition-all'>Work with me</button>
        </div>
        {/* right side */}
        <div className="hidden lg:flex flex-1 justify-end
        items-end h-full">
          <img src={MyPhoto} alt="" style={{ width: '8000px' }} />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero