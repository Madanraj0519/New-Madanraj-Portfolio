import React from 'react';
import Madan from "../images/madanrajj.jpg";

const About = () => {
  return (
    <section className='about py-20 px-0' name='about'>
      <div className='py-5 px-4 md:px-8'>
        <h1 className='heading text-3xl md:text-5xl pb-4 text-white uppercase font-medium'>about 
        <span className='text-red-700 uppercase'> me</span></h1>

    <div className='row-1 flex flex-wrap gap-6 pb-8'>
    <div className='image' data-aos="fade-up">
        <img src={Madan} alt='aboutPic' className='w-full h-full object-cover border-8 border-white rounded-lg shadow-lg shadow-zinc-900' />
    </div>

    <div className='content' data-aos="fade-up">
        <h3 className='text-white text-4xl pb-2 mt-3'>This is Madanraj & i am a front-end developer</h3>
        <p className='text-zinc-100 text-xl px-2 py-0 pb-2 mt-4'>
         Enthusiastic and detail-oriented front-end developer with a strong foundation in HTML, CSS, JavaScript, ReactJS and Tailwind CSS. 
         Eager to create visually appealing and responsive web applications that provide seamless user experiences. 
         Looking to contribute and grow in a dynamic team environment.</p>

        {/* <a href='/Madanraj-resume.pdf' aria-label='resume' download={true} rel='noreferrer' target={'_blank'} className='btn inline-block mt-4 px-3 py-3 
         bg-red-700 text-white cursor-pointer 
          text-2xl hover:bg-red-500 '>Download cv</a> */}

   <h1 className='heading mt-10 text-2xl pb-4 text-white uppercase font-medium'>
    <span className='text-red-700 uppercase'>my</span> skills</h1>

    <div className='row-2 flex gap-6 items-center justify-center px-2 py-0'>
        <div className='skills'>
            <div className='progress'>
                <h3>ReactJS<span>80%</span></h3>
                <div className='bar'><span></span></div>
            </div>
            <div className='progress'>
                <h3>JavaScript <span>75%</span></h3>
                <div className='bar'><span></span></div>
            </div>
            <div className='progress'>
                <h3>NodeJS <span>50%</span></h3>
                <div className='bar'><span></span></div>
            </div>
            <div className='progress'>
                <h3>ExpressJS <span>50%</span></h3>
                <div className='bar'><span></span></div>
            </div>
            <div className='progress'>
                <h3>MongoDB <span>50%</span></h3>
                <div className='bar'><span></span></div>
            </div>
            <div className='progress'>
                <h3>Redux <span>60%</span></h3>
                <div className='bar'><span></span></div>
            </div>
            <div className='progress'>
                <h3>Tailwind Css<span>90%</span></h3>
                <div className='bar'><span></span></div>
            </div>
            <div className='progress'>
                <h3>Firebase <span>50%</span></h3>
                <div className='bar'><span></span></div>
            </div>
            {/* <div className='progress'>
                <h3>Freelancing <span>70%</span></h3>
                <div className='bar'><span></span></div>
            </div> */}
        </div>

        <div className='box-container flex flex-wrap gap-6'>
          
            <div className='box flex items-center justify-center gap-2'>
                <h3>  2+ </h3>
                <p>Happy clients</p>
            </div>
            <div className='box flex items-center justify-center gap-2'>
                <h3>  2+ </h3>
                <p>Projects completed</p>
            </div>
        </div>
    </div>
    </div>
 </div>
      </div>
   </section>
  )
}

export default About