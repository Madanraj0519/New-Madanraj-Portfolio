import React  from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import {useShowMode} from "../ShowContext";
import { Link } from 'react-scroll';

const Navbar = (props) => {

    const {isShowMode, toggleShowMode} = useShowMode();

    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "about",
        },
        {
          id: 3,
          link: "experience",
        },
        {
          id: 4,
          link: "portfolio",
        },
        {
          id: 5,
          link: "contact",
        },
      ];


  return (
    <div>
        <div className={`${!isShowMode && "header"} flex justify-between items-center w-full
     h-20 px-4 text-white bg-background-color fixed border-b border-gray-500`}>
        <div>
            <Link to='home'>
               <p className='ml-2 text-4xl font-signature cursor-pointer'>Madan </p>
            </Link>
        </div>

        <ul className='hidden md:flex '>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium
             text-white hover:scale-105 duration-200">

             <Link to={link} smooth duration={500}>
              {link}
             </Link>
             
          </li>
        ))}
        </ul>

        <div onClick={toggleShowMode} 
        className='cursor-pointer pr-4 z-10 text-white md:hidden'>
            {
            isShowMode ? <FaTimes size={30} /> : <FaBars size={30}/>
            }
        </div>

        { isShowMode && (
          <ul className='flex flex-col justify-center items-center absolute
          top-0 left-0 w-full h-screen bg-show-background
           text-white '>
  
              {links.map(({ id, link }) => (
                 <li key={id}
                  className="px-4 cursor-pointer py-4 text-4xl capitalize  hover:scale-105 duration-200"> 
                    
                    <Link onClick={ toggleShowMode} to={link} smooth duration={500}>
                       {link}
                     </Link>

                  </li>
              ))}
  
          </ul>
        )}

    </div>
    </div>
  )
}

export default Navbar