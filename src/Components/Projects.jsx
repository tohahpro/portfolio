import { TbDevicesCode } from "react-icons/tb";
import { TbCode } from "react-icons/tb";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Projects = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch('Projects.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    console.log(data);

    return (
        <div className='pt-20 pb-24 md:pb-64 px-10 lg:px-56 bg-[#101A33]'>
            <h2 className='text-center text-white text-4xl font-bold py-10'>My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Card-1  */}

                {
                    data.map((item, idx) =>
                        <div key={idx}>


                            <div className='group h-80 [perspective:1000px] '>
                                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-[2000ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] border">
                                    <div className="absolute inset-0">
                                        <div className='w-full'>
                                            <img className='h-full w-full rounded-t-xl object-cover' src={item.image} alt="" />
                                        </div>
                                        <div className='p-5'>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-[white] dark:text-white">{item.category}</h5>
                                        </div>

                                    </div>



                                    <div className="absolute inset-0 w-full h-full rounded-xl bg-black px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center">
                                        <div>
                                            <h1>Hello</h1>
                                            <p>sdfksldfja</p>
                                            <Link to={`/products/${item.category}`}>Category</Link>
                                            <div className='flex gap-8'>
                                                <button>
                                                    <a className='flex gap-1 items-center text-white bg-[#E9A8F2] px-3 py-1 rounded-md ' href=""><TbDevicesCode className='text-lg' />
                                                        <span className='font-medium'>Live</span>
                                                    </a>
                                                </button>
                                                <button>
                                                    <a className='flex gap-1 items-center text-white bg-[#597E52] px-3 py-1 rounded-md ' href=""><TbCode className='text-lg' />
                                                        <span className='font-medium'>Client</span>
                                                    </a>
                                                </button>
                                                <button>
                                                    <a className='flex gap-1 items-center text-white bg-[#0589D2] px-3 py-1 rounded-md ' href=""><TbCode className='text-lg' />
                                                        <span className='font-medium'>Server</span>
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div>
        </div >
    );
};

export default Projects;