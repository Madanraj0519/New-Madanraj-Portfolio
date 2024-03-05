import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import underdog from "../images/Underdogs/pic-1.png";
import piechip from "../images/Piechips/pic-1 - Copy.png";
import Disney from "../images/Disney-clone/Pic-2.png";
import ecommerece from "../images/E-commerce/pic-2.png";
import zendesk from "../images/zendesk.png"
import {FaLink, FaGithub} from "react-icons/fa";
import {useShowMode} from "../ShowContext";


const Portfolio = () => {

    

    const {isShowMode} = useShowMode();
    const [showMore, setShowMore] = useState(false);


  return (
<section id="portfolio" className='py-20 px-0'> 
  <div class=" py-5 px-4 md:px-8">
    <h1 className='heading text-3xl md:text-5xl pb-4 text-white uppercase font-medium'>My 
        <span className='text-red-700 uppercase'> Portfolio</span></h1>

        <div class="work-list grid grid-cols-1 md:grid-cols-3 gap-20 mt-12">
            
            {/* Gym website */}
            <div class={`work rounded-lg overflow-hidden border border-zinc-100 p-2 py-24 hover:relative`}>
                {!isShowMode && (<h1 className='relative -top-16 bg-red-700 w-28 h-8  py-1 px-2 rounded'>Freelancing</h1>)}
                <img src={underdog} alt="" className='w-full min-h-full  rounded-lg block'/>
                <div class={`layer w-full h-0 bg-red-700 rounded-lg ${!isShowMode ? "absolute":""} left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-o px-10 text-center text-lg`}>
                    <h2 className='mb-4 font-semibold'>Underdogs Gym Website & DashBoard</h2>
                    <p>Created an engaging and responsive landing page for the gym website.</p>
                    <p className='hidden md:block'>And developed an intuitive and user-friendly
                        admin dashboard for gym administrators.</p>
                    <div className='flex gap-3'>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="https://www.underdogsfitness.in/"><FaLink className='text-2xl' /></a>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href=""><FaGithub className='text-2xl' /></a>
                    </div>
                </div>
            </div>

            {/* Piechips */}
            <div class={`work rounded-lg overflow-hidden border border-zinc-100 p-2 py-24 hover:relative`}>
            {!isShowMode && (<h1 className='relative -top-16 bg-red-700 w-28 h-8  py-1 px-2 rounded'>Freelancing</h1>)}
                <img src={piechip} alt="" className='w-full min-h-full  rounded-lg block '/>
                <div class={`layer w-full h-0 bg-red-700 rounded-lg ${!isShowMode ? "absolute":""} left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-o px-10 text-center text-lg`}>
                    <h2 className='mb-4 font-semibold'>Main page & User login</h2>
                    <p>Created a modern and engaging main page using React.js and Tailwind CSS, enhancing user engagement and visual appeal.</p>
                    <div className='flex gap-3'>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href=""><FaLink className='text-2xl' /></a>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href=""><FaGithub className='text-2xl' /></a>
                    </div>
                </div>
            </div>

            {/* Disney+ clone */}
            <div class={`work rounded-lg overflow-hidden border border-zinc-100 p-2 py-24 hover:relative`}>
                {/* <h1 className='relative -top-16 bg-red-700 w-24 h-8  py-1 px-3 rounded'>Project</h1> */}
                <img src={zendesk} alt="" className='w-full min-h-full  rounded-lg block '/>
                <div class={`layer w-full h-0 bg-red-700 rounded-lg ${!isShowMode ? "absolute":""} left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-o px-10 text-center text-lg`}>
                    <h2 className='mb-4 font-semibold'>zendesk Clone</h2>
                    <p>Developed and implemented a comprehensive employee tracking system using the MERN (MongoDB, Express.js,
                         React.js, Node.js) stack.</p>
                    <div className='flex gap-3'>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="https://zendesk-clone.onrender.com/" rel='noreferrer' target={'_blank'}><FaLink className='text-2xl' /></a>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="https://github.com/Madanraj0519/ZenDesk" rel='noreferrer' target={'_blank'}><FaGithub className='text-2xl' /></a>
                    </div>
                </div>
            </div>

           {
             showMore && (
              <>

                {/* Disney+ clone */}
            <div class={`work rounded-lg overflow-hidden border border-zinc-100 p-2 py-24 hover:relative`}>
                {/* <h1 className='relative -top-16 bg-red-700 w-24 h-8  py-1 px-3 rounded'>Project</h1> */}
                <img src={Disney} alt="" className='w-full min-h-full  rounded-lg block '/>
                <div class={`layer w-full h-0 bg-red-700 rounded-lg ${!isShowMode ? "absolute":""} left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-o px-10 text-center text-lg`}>
                    <h2 className='mb-4 font-semibold'>Disney+ Clone</h2>
                    <p>Developed a Disney+ clone using React.js and Redux for state management, closely mimicking the original user interface.
                         Leveraged Firebase to implement Google user authentication.</p>
                    <div className='flex gap-3'>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="https://disney-clone-aaf1.vercel.app/" rel='noreferrer' target={'_blank'}><FaLink className='text-2xl' /></a>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="https://github.com/Madanraj0519/Disney-clone" rel='noreferrer' target={'_blank'}><FaGithub className='text-2xl' /></a>
                    </div>
                </div>
            </div>
            
             <div class={`work rounded-lg overflow-hidden border border-zinc-100 p-2 py-24 hover:relative`}>
                 {/* <h1 className='relative -top-16 bg-red-700 w-24 h-8  py-1 px-3 rounded'>Project</h1> */}
                 <img src={ecommerece} alt="" className='w-full min-h-full  rounded-lg block '/>
                 <div class={`layer w-full h-0 bg-red-700 rounded-lg ${!isShowMode ? "absolute":""} left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-o px-10 text-center text-lg`}>
                     <h2 className='mb-4 font-semibold'>E-commerce website with redux toolkit</h2>
                     <p>Developed an e-commerce website using Redux Toolkit for state management, showcasing proficiency in API
                         integration and async thunk for data fetching</p>
                     <div className='flex gap-3'>
                     <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="https://e-commerce-website-phi-seven.vercel.app/" rel='noreferrer' target={'_blank'}><FaLink className='text-2xl' /></a>
                     <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="https://github.com/Madanraj0519/e-commerce-website-redux" rel='noreferrer' target={'_blank'}><FaGithub className='text-2xl' /></a>
                     </div>
                 </div>
             </div>
     
        </>
             )
           }
            
        </div>
        <button class="btn block my-12 mx-auto w-fit border border-red-700 py-4 px-12 rounded-md text-white hover:bg-red-600 " onClick={() => setShowMore(!showMore)}>
            {showMore ? "show less" : "show more" }
        </button>
    </div>

</section>
  )
}

export default Portfolio