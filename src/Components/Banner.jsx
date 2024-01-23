import { TypeAnimation } from "react-type-animation";
import { LuDownload } from "react-icons/lu";
import { TbFileText } from "react-icons/tb";
import { ImSpinner10 } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import image from "../assets/Images/Round Loading.gif";

const Banner = () => {
    return (
        <div className="bg-[#132249] lg:px-56 py-32">

            <div className="lg:flex justify-between py-20">
                <div className="flex-1 py-20 ">

                    <ImSpinner10 className="text-white z-20 absolute md:left-24  md:top-56 animate-ping" />
                    <ImSpinner10 className="text-white z-20 absolute  md:right-40  md:top-28 animate-spin" />
                    <AiOutlinePlus className="text-white z-20 absolute  md:right-80  md:bottom-40 text-3xl font-extralight animate-pulse" />
                    <AiOutlinePlus className="text-white z-20 absolute  md:left-96  md:bottom-36 text-3xl font-extralight animate-pulse" />
                    <ImSpinner10 className="text-white z-20 absolute  md:right-96  md:top-36 animate-bounce text-xl" />



                    <h3 className="text-base w-28 font-semibold text-white text-center rounded-lg py-1 bg-red-500">Hello</h3>
                    <h1 className="text-lg text-white md:text-2xl lg:text-3xl font-medium py-2">{`I'm Md Toha Hossain`}</h1>
                    <div className="text-white pb-6">
                        <TypeAnimation
                            sequence={[
                                'Front End Developer',
                                1000,
                                'ReactJS Developer',
                                1000
                            ]}
                            className="text-lg md:text-2xl lg:text-5xl font-bold py-2"
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block', margin: '0px 0px' }}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="pb-8">
                        <p className="pb-3 text-white md:text-xl">
                            {`Do you need a skilled front-end developer to build your website? Don't look ahead. I am Toha, an experienced front-end developer ready to maximize your websites. Let's take your website to the next level with proven strategies.`}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <a href="https://drive.google.com/uc?export=download&id=1RSp1x7wqeydbUp9axsojbOyci_8pZUS6"
                            className="font-medium border-2 bg-red-500 hover:bg-red-700 text-white px-6 py-3 text-sm rounded-lg flex gap-2 uppercase animate-bounce"
                            download>
                            <LuDownload className="text-xl" />
                            <span>Download Resume</span>
                        </a>
                        <a href="https://drive.google.com/file/d/1RSp1x7wqeydbUp9axsojbOyci_8pZUS6/view?usp=sharing" className="font-medium border-2 bg-[#132249] hover:bg-[#0075BF] text-white px-6 py-3 text-sm rounded-lg flex gap-2 uppercase">
                            <TbFileText className="text-xl" />
                            <span>View Resume</span>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <img src={image} alt="" className="lg:pl-56" />
                </div>
            </div>
        </div>
    );
};


export default Banner;