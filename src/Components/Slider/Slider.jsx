import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';



const Slider = () => {

    const [swiper, setSwiper] = useState(null);
    const [, setCurrentImage] = useState(null);
    const [currentText, setCurrentText] = useState(null);

    const images = [
        {
            name: 'world',
            image: 'https://i.ibb.co/XJvF0Tz/Hpro-fantasy-world-with-river-as-a-logo-85322633-c852-4da4-af56-a681fdeedbc6.png'
        },
        {
            name: 'Wedding',
            image: 'https://i.ibb.co/XJvF0Tz/Hpro-fantasy-world-with-river-as-a-logo-85322633-c852-4da4-af56-a681fdeedbc6.png',
        },
        {
            name: 'DOM',
            image: 'https://i.ibb.co/wNKYqSr/server.jpg',
        },
        {
            name: 'Birthday',
            image: 'https://i.ibb.co/JpcNPpp/STEM-Education-Summit.jpg'
        },
        {
            name: 'Anniversary',
            image: 'https://i.ibb.co/cYVwpLm/Anniversary.jpg'
        },
        {
            name: 'Engagement',
            image: 'https://i.ibb.co/wNKYqSr/server.jpg'
        },
        {
            name: 'Retirement',
            image: 'https://i.ibb.co/Y8jkN4B/Retirement.jpg'
        },
        {
            name: 'Baby',
            image: 'https://i.ibb.co/RjwR1pz/Sajek.png'
        },

    ];


    // useEffect(() => {
    //     setCurrentImage(images[0].image);
    // }, []);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setCurrentImage(images[currentIndex].image);
        setCurrentText(images[currentIndex].name)

    };



    const handleSlideClick = (index) => {
        if (swiper) {
            swiper.slideTo(index);
        }
    };

    return (
        <div className='mt-8 md:mt-0 relative bg-black text-white'>

            {/* <img src={currentImage} alt="Background Image" className="w-full h-[380px] md:h-[1000px] object-cover" /> */}

            {/* <div className="absolute inset-0 bg-white opacity-50 w-full h-[645px] md:h-[740px]"></div> */}
            <div>
                <p className="w-1/2 h-[380px] md:h-[1000px] object-cover flex  items-center justify-center p-20" >{currentText} </p>
            </div>

            <div className='absolute inset-0 w-full h-[600px] flex flex-col-reverse md:flex-row justify-center items-center gap-2 md:gap-0 mt-52 md:mt-60'>

                <div className='flex items-center justify-end'>
                    <div className='w-1/2'>
                        <Swiper
                            onSlideChange={handleSlideChange}
                            // effect={'coverflow'}
                            grabCursor={true}
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
                            modules={[EffectCoverflow, Pagination, Navigation,
                            ]}
                            className="flex justify-center w-[450px] h-[450px]"
                            onSwiper={(swiper) => setSwiper(swiper)}
                        >

                            {images.map((image, index) => (
                                <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>

                                    <img className='p-20' src={image.image} alt={`Slide ${index + 1}`} />
                                    <h2 className='text-black text-lg font-medium text-center'>{image.name}</h2>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Slider;