import React from 'react';
import {FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaPaperPlane, FaLocationDot} from "react-icons/fa";
import {IoLocation} from "react-icons/io5"

const Contact = () => {
  return (
    <section id="contact py-20 py-0" name='contact'>
        <div class="py-5 px-4 md:px-10">
        <h1 className='heading text-3xl md:text-5xl pb-2 text-white uppercase font-medium'>
            <span className='text-red-700 uppercase'>Contact</span></h1>
            <div class="row grid grid-cols-1 md:grid-cols-2 gap-5" data-aos="fade-up">
                <div class="contact-left md:ml-20">
                    <p className='mt-8 flex items-center text-xl'><FaPaperPlane className='text-red-700 mr-4 text-2xl'/> madan__raj@hot.com</p>
                    <p className='mt-8 flex items-center text-xl'><FaPhone className='text-red-700 mr-4 text-2xl' /> 8072441294</p>
                    <p className='mt-8 flex items-center text-xl'><IoLocation className='text-red-700 mr-4 text-2xl' /> Chennai, TamilNadu, India.</p>
                </div>
                <div class="contact-right md:mr-20">
                    <h1 className='text-xl'>Submit the form below to get in touch with me</h1>
                    <form className='w-full flex flex-col'
                       action="https://getform.io/f/24d5a5b2-ce05-452d-81ca-ef1777a99223"
                       method="POST">
                        <input type="text" name="Name" placeholder="Your Name" required/>
                        <input type="email" name="Email" placeholder="Your Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <div className='flex justify-center'>
                        <button type="submit" class="btn btn3 bg-black border border-gray-100 mt-4 hover:bg-red-700 w-2/5 rounded-xl flex justify-center p-2 text-2xl">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact