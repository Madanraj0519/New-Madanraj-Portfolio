import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import underdog from "../images/Underdogs/pic-1.png";
import piechip from "../images/Piechips/pic-1 - Copy.png";
import Disney from "../images/Disney-clone/Pic-2.png";
import ecommerece from "../images/E-commerce/pic-2.png";
import Bookapp from "../images/Book-search/pic-2.png";
import portfolio from "../images/Portfolio/pic-1.png"
import {FaLink, FaGithub} from "react-icons/fa";
import {GoCodeReview} from "react-icons/go"
import {useShowMode} from "../ShowContext";
import {underdogs, piechips, disneys, Ecommerce, Books, Portfolios} from "../Components/ImgSlider/SliderImg"

const Portfolio = () => {

    

    const {isShowMode} = useShowMode();
    const [showMore, setShowMore] = useState(false);

    const [showSlider, setShowSlider] = useState(false);
    const [sliderName, setSliderName] = useState('');

    const OnSlider = (value) => {
        setSliderName(value);
        setShowSlider(true);
    }

    const OffSlider = () => {
        setSliderName('');
        setShowSlider(false);
    }

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
<section id="portfolio" className='py-20 px-0'> 
  <div class=" py-5 px-4 md:px-8">
    <h1 className='heading text-3xl md:text-5xl pb-4 text-white uppercase font-medium'>My 
        <span className='text-red-700 uppercase'> Portfolio</span></h1>

        <div class="work-list grid grid-cols-1 md:grid-cols-3 gap-20 mt-12">
            
            {/* Gym website */}
            <div class={`work rounded-lg overflow-hidden border border-zinc-100 p-2 py-24 hover:relative`}>
                <h1 className='relative -top-16 bg-red-700 w-28 h-8  py-1 px-2 rounded'>Freelancing</h1>
                <img src={underdog} alt="" className='w-full min-h-full  rounded-lg block'/>
                <div class={`layer w-full h-0 bg-red-700 rounded-lg ${!isShowMode ? "absolute":""} left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-o px-10 text-center text-lg`}>
                    <h2 className='mb-4 font-semibold'>Underdogs Gym Website & DashBoard</h2>
                    <p>Created an engaging and responsive landing page for the gym website.</p>
                    <p className='hidden md:block'>And developed an intuitive and user-friendly
                        admin dashboard for gym administrators.</p>
                    <div className='flex gap-3'>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200 cursor-pointer' onClick={() => OnSlider(underdogs)}><GoCodeReview className='text-2xl' /></a>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="https://www.underdogsfitness.in/"><FaLink className='text-2xl' /></a>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href=""><FaGithub className='text-2xl' /></a>
                    </div>
                </div>
            </div>

            {/* Piechips */}
            <div class={`work rounded-lg overflow-hidden border border-zinc-100 p-2 py-24 hover:relative`}>
                <h1 className='relative -top-16 bg-red-700 w-28 h-8  py-1 px-2 rounded'>Freelancing</h1>
                <img src={piechip} alt="" className='w-full min-h-full  rounded-lg block '/>
                <div class={`layer w-full h-0 bg-red-700 rounded-lg ${!isShowMode ? "absolute":""} left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-o px-10 text-center text-lg`}>
                    <h2 className='mb-4 font-semibold'>Main page & User login</h2>
                    <p>Created a modern and engaging main page using React.js and Tailwind CSS, enhancing user engagement and visual appeal.</p>
                    <div className='flex gap-3'>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200 cursor-pointer' onClick={() => OnSlider(piechips)}><GoCodeReview className='text-2xl' /></a>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href=""><FaLink className='text-2xl' /></a>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href=""><FaGithub className='text-2xl' /></a>
                    </div>
                </div>
            </div>

            {/* Disney+ clone */}
            <div class={`work rounded-lg overflow-hidden border border-zinc-100 p-2 py-24 hover:relative`}>
                {/* <h1 className='relative -top-16 bg-red-700 w-24 h-8  py-1 px-3 rounded'>Project</h1> */}
                <img src={Disney} alt="" className='w-full min-h-full  rounded-lg block '/>
                <div class={`layer w-full h-0 bg-red-700 rounded-lg ${!isShowMode ? "absolute":""} left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-o px-10 text-center text-lg`}>
                    <h2 className='mb-4 font-semibold'>Disney+ Clone</h2>
                    <p>Developed a Disney+ clone using React.js and Redux for state management, closely mimicking the original user interface.
                         Leveraged Firebase to implement Google user authentication.</p>
                    <div className='flex gap-3'>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200 cursor-pointer' onClick={() => OnSlider(disneys)}><GoCodeReview className='text-2xl' /></a>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="#"><FaLink className='text-2xl' /></a>
                    <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="#"><FaGithub className='text-2xl' /></a>
                    </div>
                </div>
            </div>

           {
             showMore && (
              <>
        <div class={`work rounded-lg overflow-hidden border border-zinc-100 p-2 py-24 hover:relative`}>
            {/* <h1 className='relative -top-16 bg-red-700 w-24 h-8  py-1 px-3 rounded'>Project</h1> */}
            <img src={ecommerece} alt="" className='w-full min-h-full  rounded-lg block '/>
            <div class={`layer w-full h-0 bg-red-700 rounded-lg ${!isShowMode ? "absolute":""} left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-o px-10 text-center text-lg`}>
                <h2 className='mb-4 font-semibold'>E-commerce website with redux toolkit</h2>
                <p>Developed an e-commerce website using Redux Toolkit for state management, showcasing proficiency in API
                    integration and async thunk for data fetching</p>
                <div className='flex gap-3'>
                <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200 cursor-pointer' onClick={() => OnSlider(Ecommerce)}><GoCodeReview className='text-2xl' /></a>
                <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="https://e-commerce-website-phi-seven.vercel.app/"><FaLink className='text-2xl' /></a>
                <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="https://github.com/Madanraj0519/e-commerce-website-redux"><FaGithub className='text-2xl' /></a>
                </div>
            </div>
        </div>

        {/* Book-search-app */}
        <div class={`work rounded-lg overflow-hidden border border-zinc-100 p-2 py-24 hover:relative`}>
            {/* <h1 className='relative -top-16 bg-red-700 w-24 h-8  py-1 px-3 rounded'>Project</h1> */}
            <img src={Bookapp} alt="" className='w-full min-h-full  rounded-lg block '/>
            <div class={`layer w-full h-0 bg-red-700 rounded-lg ${!isShowMode ? "absolute":""} left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-o px-10 text-center text-lg`}>
                <h2 className='mb-2 md:mb-4 font-semibold'>Book search app</h2>
                <p>Developed a book search application using React.js, utilizing API integration to fetch and display real-time book data.</p>
                <p className='hidden md:block'>Designed an intuitive user interface allowing users to search for books by title.</p>
                <div className='flex gap-3'>
                <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200 cursor-pointer' onClick={() => OnSlider(Books)}><GoCodeReview className='text-2xl' /></a>
                <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="https://book-search-app-react-amber.vercel.app/"><FaLink className='text-2xl' /></a>
                <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="https://github.com/Madanraj0519/Book-search-app-react"><FaGithub className='text-2xl' /></a>
                </div>
            </div>
        </div>

        {/* Portfolio */}
        <div class={`work rounded-lg overflow-hidden border border-zinc-100 p-2 py-24 hover:relative`}>
            {/* <h1 className='relative -top-16 bg-red-700 w-24 h-8  py-1 px-3 rounded'>Project</h1> */}
            <img src={portfolio} alt="" className='w-full min-h-full  rounded-lg block '/>
            <div class={`layer w-full h-0 bg-red-700 rounded-lg ${!isShowMode ? "absolute":""} left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-o px-10 text-center text-lg`}>
                <h2 className='mb-4 font-semibold'>Portfolio</h2>
                  <p>Designed and developed a responsive personal portfolio website using React.js and Tailwind CSS.</p>
                  <p className='hidden md:block'> Created a visually appealing and user-friendly interface to showcase projects, skills, and achievements.</p>
                <div className='flex gap-3'>
                <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200 cursor-pointer' onClick={() => OnSlider(Portfolios)}><GoCodeReview className='text-2xl' /></a>
                <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="#"><FaLink className='text-2xl' /></a>
                <a className='mt-8 text-black text-lg bg-white w-16 h-16 rounded-xl text-center p-5 hover:scale-110 duration-200' href="https://github.com/Madanraj0519/Portfolio-react"><FaGithub className='text-2xl' /></a>
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

    {
        showSlider && (
            <div className="fixed top-0 flex justify-center items-center bg-background-slider min-h-full w-full">
            <button
                    class=" absolute top-0 right-0 mt-4 mr-4 rounded-full p-2 focus:outline-none focus:shadow-outline  bg-red-700 hover:bg-red-400 "
                    onClick={OffSlider}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
            <div className="md:w-3/5 w-64 fixed">
              <Slider {...sliderSettings}>
                {
                  sliderName.map((img) => (
                    <div className='w-full border p-1 '> 
                          <img
                          src={img}
                          alt="Slide 1"
                          className="w-full h-full object-contain"
                        />                   
                   </div>
                  ))
                }
              </Slider>
            </div>
          </div>
        )
    }
</section>
  )
}

export default Portfolio