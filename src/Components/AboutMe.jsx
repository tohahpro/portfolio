import image from '../assets/Images/Business Salesman.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutMe = () => {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className='bg-[#101A33]'>
            <h2 className='text-4xl text-white font-bold pt-24 text-center'>About Me</h2>
            <div className='flex justify-between py-20'>
                <div className='flex-1 flex items-center justify-center'>
                    <h3
                        data-aos-offset="300"
                        data-aos="zoom-in-down"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="2000"
                        className='text-white text-xl w-3/5'>
                        I work as a full-stack junior developer. Every day, I push myself to learn and explore new tools and technologies. I am dedicated to my work. I always make an effort to complete my task on time.
                    </h3>
                </div>
                <div className='flex-1 flex items-center justify-center'>
                    <div data-aos="fade-up"
                        data-aos-duration="3000"
                        data-aos-anchor-placement="center-bottom">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;