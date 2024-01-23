import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import emailImage from '../../assets/Images/emai.png';

const ContactUs = () => {
    const form = useRef();






    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        const name = e.target.from_name.value;
        const email = e.target.from_email.value;
        const message = e.target.message.value;

        setLoading(true);

        setError("");
        if (!name || name.length < 2) {
            setError("Name must be longer than 2 chars.");
            setLoading(false)
            return;
        }
        if (!email || !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            setError("Please enter a valid email address");
            return;
        }
        if (!message || message.length < 20) {
            setError("Message must be longer than 20 chars.");
            setLoading(false)
            return;
        }


        emailjs.sendForm('service_me1m9uh', 'template_ini4pb7', form.current, 'cfWWs9M9q_sIngNvx')
            .then((result) => {
                toast.success("Message Sent Successfully.")
                console.log(result.text);
                setLoading(false)
                form.current.reset();
            }, (error) => {
                toast.error("Something went wrong!")
                setLoading(false)
                console.log(error.text);
            });
    };

    return (

        <div className='bg-[#132249]'>
            <h2 className='text-center text-white text-4xl font-bold py-20'>Contact Me</h2>
            <div className='flex justify-between pb-32'>
                <div className='flex-1 flex items-center'>
                    <div>
                        <img className='' src={emailImage} alt="" />
                    </div>
                </div>
                <div className='flex-1 px-44'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className=''>
                            <p className='text-white text-lg font-medium   pb-2'>Name</p>
                            <input className='w-full md:h-10 rounded-md bg-[#101A33] text-white font-medium' type="text" name="from_name" placeholder='Type Your Name... ' required />
                        </div>

                        <div className=''>
                            <p className='text-white text-lg font-medium py-2'>Email</p>
                            <input className='w-full md:h-10 rounded-md bg-[#101A33] text-white font-medium' type="email" name="from_email" placeholder='Type Your Email....' required />
                        </div>

                        <div>
                            <p className='text-white text-lg font-medium py-2'>Message</p>
                            <textarea className='w-full md:h-60 rounded-md bg-[#101A33] text-white font-medium' name="message" placeholder='Type Your Message....' required />
                        </div>

                        {
                            loading ?
                                <button disabled className="bg-[#A8AFF3] hover:cursor-progress text-white py-3 rounded-lg w-full flex gap-2 justify-center items-center">
                                    <span className="loading loading-bars loading-md text-white"></span>
                                </button>
                                :
                                <button type="submit" className="bg-[#F05252] hover:bg-[#ce2121] text-white py-3 rounded-lg w-full flex gap-2 justify-center items-center">
                                    <span className="uppercase">Send Message</span>
                                </button>
                        }
                    </form>
                    {
                        error ?
                            <div className="bg-blue-200 text-blue-800 px-4 text-center py-1 mt-2 rounded">
                                {error}
                            </div> : ""
                    }
                </div>
            </div>
        </div>

    );
};

export default ContactUs