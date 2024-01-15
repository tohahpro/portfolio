
import AboutMe from "../Components/AboutMe";
import Banner from "../Components/Banner";

import Footer from "../Components/Footer";
import MySkills from "../Components/MySkills";
import Projects from "../Components/Projects";
import Slider from "../Components/Slider/Slider";




const Home = () => {
    return (
        <div className="">
            <div className="min-h-screen">
                <Banner />
                <AboutMe />
                <MySkills />

                <Projects />
                <Footer />
                <Slider />

            </div>

        </div>
    );
};

export default Home;