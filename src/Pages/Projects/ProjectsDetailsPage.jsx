import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';

import { Pagination, Navigation } from 'swiper/modules';

const ProjectsDetailsPage = () => {

    const LoadData = useLoaderData()
    const { brand_name } = useParams()
    const [item, setItem] = useState([])
    const [swiper, setSwiper] = useState(null);
    const [, setCurrentText] = useState(null);
    const [currentText1, setCurrentText1] = useState(null);
    const [currentText2, setCurrentText2] = useState(null);
    const [, setCurrentImage] = useState(null);

    useEffect(() => {
        const dataFind = LoadData.filter((item) => item.category === brand_name);
        setItem(dataFind);
    }, [LoadData, brand_name])

    useEffect(() => {
        if (item[0]) {
            setCurrentText(item[0].name);
            setCurrentText1(item[0].Details1)
            setCurrentText2(item[0].Details2)
            setCurrentImage(item[0].image);
        }
    }, [item]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setCurrentText(item[currentIndex].name)
        setCurrentText1(item[currentIndex].Details1)
        setCurrentText2(item[currentIndex].Details2)

        setCurrentImage(item[currentIndex].image)
    };

    const handleSlideClick = (index) => {
        if (swiper) {
            swiper.slideTo(index);
        }
    };

    return (
        <div className="">
            <div className='mt-8 md:mt-0 relative bg-black px-56 min-h-screen'>
                {/* <img src={currentImage} alt="Background Image" className="w-full min-h-screen md:h-[1000px] -z-30 object-cover" /> */}

                {/* <div className="absolute inset-0 bg-black opacity-50 w-full h-[645px] md:h-[1000px]"></div> */}

                <div className="z-50 px-10 text-justify">
                    <p className="w-1/2 pb-6 object-cover flex text-blue-400 text-lg justify-start pt-40" >{currentText1}</p>
                    <p className="w-1/2 object-cover flex text-blue-400 text-lg justify-start" >{currentText2}</p>

                </div>



                <div className='absolute inset-0  h-[600px] flex flex-col-reverse md:flex-row justify-end items-center gap-2 md:gap-0 mt-20 md:mt-36'>
                    <div className='flex items-center pr-44'>
                        <div className='w-1/2'>
                            <Swiper
                                onSlideChange={handleSlideChange}
                                // effect={'coverflow'}
                                // grabCursor={true}
                                centeredSlides={true}
                                // loop={true}
                                // autoplay={{
                                //     delay: 2000,
                                //     disableOnInteraction: false,
                                // }}

                                navigation={true}
                                // pagination={{
                                //     clickable: true,
                                // }}
                                slidesPerView={'auto'}
                                // coverflowEffect={{
                                //     rotate: 0,
                                //     stretch: 0,
                                //     depth: 0,
                                //     modifier: 1,
                                //     slideShadows: true,
                                // }}
                                modules={[Pagination, Navigation,
                                ]}
                                className="flex items-center justify-center w-[730px] h-[500px] rounded-2xl"
                                onSwiper={(swiper) => setSwiper(swiper)}
                            >

                                {item.map((image, index) => (
                                    <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>

                                        <div className="px-24 w-full h-full">
                                            <img className=' rounded-2xl w-full h-full' src={image.image} alt={`Slide ${index + 1}`} />
                                        </div>

                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetailsPage;