import React from 'react';
import {useShowMode} from "../ShowContext";

const Home = () => {

 const {isShowMode} = useShowMode();

  return (
    <div className='home' id='home'>
     {
        !isShowMode && (
            <div class="header-text py-4 px-12 absolute top-80 md:left-36 text-lg md:text-2xl">
              <p className='font-semibold'>Front-End Developer</p>
              <h1 className='text-3xl md:text-5xl mt-5 font-semibold'>Hi, I'm <span className='text-red-800'>Madan</span>raj
                from India</h1>
            </div>
        )
     }
  </div>
  )
}

export default Home