import React from 'react'

const Experiences = () => {
    const experience = [
        {
            id:1,
            span:" Dec 2022 - Jan 2023 ",
            h3:"Academor",
            role:"Web Development Internship",
            para:[
                " Developed a weather application using React.js, showcasing strong proficiency in front-end web development.",
                
                "Gained hands-on experience in responsive design, API integration, and state management to ensure smooth and dynamic user interactions."
            ],
            skills:["ReactJs,","JavaScript,", "HTMl,", "CSS."]
        },
        {
            id:2,
            span:" Mar 2022 - May 2022 ",
            h3:"Teenofes",
            role:"Front-end Developer",
            para:[
                " Collaborated with a team of two to build a hospital website to manage user interface with the help of Tech like HTML , CSS , and Java Script.",

                "Designed and developed the front-end of a responsive Hospital website for Teenofes Company, featuring anintuitive navigation, visually appealing layout, and interactive elements."
            ],
            skills:["JavaScript,"," HTML,","CSS."]
        },
    ]

  return (
    <section className='experience py-20 px-2' name='experience'>
        <div className='md:px-8 py-5'>
        <h1 className='heading text-3xl md:text-5xl pb-2 text-white uppercase font-medium'>
            <span className='text-red-700 uppercase'>my </span> experience</h1>

        <div className='box-container flex flex-col gap-6' data-aos="fade-up">         
            {
                 experience.map(exp => (
                    <div className='box border-l-4 border-red-700 pl-4 pr-4 pb-4'>
                        <div key={exp.id} className='content bg-white p-8 shadow-lg shadow-zinc-900 rounded-lg mt-6'>
                            <span className='text-white bg-red-700 text-base md:text-xl rounded-3xl px-2 py-4'>{exp.span}</span>
                            <h3 className='text-2xl md:text-3xl px-1 py-0 text-zinc-900 mt-4'>{exp.h3}</h3>
                            <h2 className='text-xl md:text-2xl px-1 py-0 mt-1 text-zinc-900'>{exp.role}</h2>
                                {
                                    exp.para.map(para => (
                                        <p className='text-lg md:text-xl px-1 py-0 text-zinc-900 mt-3'>* {para}</p>
                                    ))
                                }
                           <div className='flex text-base md:text-xl px-2 mt-5 gap-2'>
                            <h3 className='text-red-700'>Tech Used:  </h3>
                            <ul className='flex gap-2'>
                                {
                                    exp.skills.map(skill => (
                                        <li className='text-zinc-900'> {skill}</li>
                                    ))
                                }
                            </ul>
                           </div>
                        </div>
                    </div>
                    ))
            }
    </div>
        </div>
    </section>
  )
}

export default Experiences;