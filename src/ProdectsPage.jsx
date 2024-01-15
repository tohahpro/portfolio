import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const ProdectsPage = () => {

    const LoadData = useLoaderData()
    const { brand_name } = useParams()

    const [item, setItem] = useState([])
    const [swiper, setSwiper] = useState(null);
    const [currentText, setCurrentText] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const dataFind = LoadData.filter((item) => item.category === brand_name);
        setItem(dataFind);
    }, [LoadData, brand_name])

    useEffect(() => {
        if (item[0]) {
            setCurrentText(item[0].name);
            setCurrentImage(item[0].image);
        }
    }, [item]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setCurrentText(item[currentIndex].name)
        setCurrentImage(item[currentIndex].image)
    };

    const handleSlideClick = (index) => {
        if (swiper) {
            swiper.slideTo(index);
        }
    };

    return (
        <div>
            <div className='mt-8 md:mt-0 relative bg-black '>

                <img src={currentImage} alt="Background Image" className="w-full h-[380px] md:h-[1000px] -z-30 object-cover" />

                <div className="absolute inset-0 bg-black opacity-50 w-full h-[645px] md:h-[1000px]"></div>
                <div className="absolute z-50 top-9 left-48">
                    <p className="w-1/2 h-[380px] md:h-[1000px] object-cover flex items-center text-blue-400 font-semibold text-3xl justify-center p-20" >{currentText}</p>
                </div>

                <div className='absolute inset-0  h-[600px] flex flex-col-reverse md:flex-row justify-end items-center gap-2 md:gap-0 mt-52 md:mt-60'>

                    <div className='flex items-center pr-44'>
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
                                className="flex items-center justify-center w-[650px] h-[400px]"
                                onSwiper={(swiper) => setSwiper(swiper)}
                            >

                                {item.map((image, index) => (
                                    <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>

                                        <img className='px-12 w-full h-full' src={image.image} alt={`Slide ${index + 1}`} />
                                        <h2 className='text-white text-lg font-medium text-center'>{image.name}</h2>
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

export default ProdectsPage;