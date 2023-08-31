import React from 'react';
import {TypeAnimation} from "react-type-animation"
import {useShowMode} from "../ShowContext";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn, } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const Home = () => {

 const {isShowMode} = useShowMode();

  return (
    <div className='home' id='home'>
     {
        !isShowMode && (
          <>
            <div class="header-text py-4 px-12 absolute top-80 md:left-36 text-lg md:text-2xl">
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Front End Developer",
                2500,
                "Freelancer",
                2500,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-red-800 text-4xl font-bold sm:text-3xl"
            />
              <h1 data-aos="fade-up" className='text-3xl md:text-5xl mt-5 font-semibold'>Hi, I'm <span className='text-red-800'>Madan</span>raj
                from India</h1>
              
        <div data-aos="fade-up" className="buttons flex gap-5 mt-10">
            <a
              href="https://www.linkedin.com/in/madan-raj-7b8b23232/" aria-label='LinkedIn'
              rel='noreferrer' target={'_blank'}
              className=" bg-black text-[1rem] border border-white text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href='/Madan_raj_CV.pdf'
              className="flex items-center gap-2 border- text-[1rem] text-black bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a  href="https://github.com/Madanraj0519" aria-label='Github' 
                      rel='noreferrer' target={'_blank'}>
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 hover:text-red-700" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/madan-raj-7b8b23232/" aria-label='LinkedIn'
                           rel='noreferrer' target={'_blank'}>
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 hover:text-red-700 " />{" "}
                </a>
              </li>
              <li>
                <a  href="https://www.instagram.com/__.mad_dy._/" aria-label='Instagram' 
                           rel='noreferrer' target={'_blank'}>
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 hover:text-red-700 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Madan__raj" aria-label='Twitter' 
                           rel='noreferrer' target={'_blank'}>
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 hover:text-red-700 " />{" "}
                </a>
              </li>
            </ul>
          </div>
      </div>

          </>
        )
     }
  </div>
  )
}

export default Home