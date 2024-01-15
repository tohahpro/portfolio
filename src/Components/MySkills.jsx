import { UnderlineTabs } from "./Skills";


const MySkills = () => {
    return (
        <div className="lg:px-56 pt-10 lg:p-20 bg-[#132249]">
            <h2 className="text-3xl text-white font-bold text-center mb-8">Technical <span className="">Skills</span></h2>
            <div className="lg:px-40 py-32">
                <UnderlineTabs />
            </div>

        </div>
    );
};

export default MySkills;