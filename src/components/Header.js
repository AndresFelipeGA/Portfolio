import React, {useState, useEffect} from 'react'

// import components
import Logo from '../assets/img/logo.png';
import LogoB from '../assets/img/logoB.svg';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Socials from './Socials';


const Header = () => {
    const [bg, setBg] = useState(false);
    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            return window.scrollY > 50 ? setBg(true) : setBg
            (false);
        })
    })

  return (
    <header className={`${bg ? 'bg-tertiary h-20' :
    'h-24'} flex items-center fixed top-0 w-full
    text-white z-10 transition-all duration-300`}>

        <div className="container mx-auto h-full flex
        items-center justify-between">
            {/* Logo */}
            <a href='#'>
                <img src={Logo} alt='' style={{ width: '100px' }} />
            </a>
            {/* Nav */}
            <div className='hidden lg:block'>
                <Nav />
            </div>
            {/* Nav Mobile */}
            <div className='lg:hidden'>
                <NavMobile />
            </div>
            {/* Socials */}
            <div className='hidden lg:block'>
                <Socials />
            </div>
            

        </div>
    </header>
  )
}

export default Header