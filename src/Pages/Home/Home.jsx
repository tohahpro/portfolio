

import AboutMe from "../../Components/AboutMe";
import Banner from "../../Components/Banner";
import ContactUs from "../../Components/ContactUs/ContactUs";
import MySkills from "../../Components/MySkills";
import Projects from "../Projects/Projects";






const Home = () => {
    return (
        <div className="">
            <div className="min-h-screen">
                <Banner />
                <AboutMe />
                <MySkills />
                <Projects />
                <ContactUs />



            </div>

        </div>
    );
};

export default Home;