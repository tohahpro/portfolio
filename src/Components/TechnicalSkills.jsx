import html from '../assets/Images/html.png'
import Css from '../assets/Images/css.png'
import TailwindLogo from '../assets/Images/tailwind.png'
import Java from '../assets/Images/js.png'
import React from '../assets/Images/reactjs.png'
import Nodejs from '../assets/Images/nodejs.png'
import ExpressJs from '../assets/Images/express.png'
import MongoDb from '../assets/Images/mongodb.png'
import Firebase from '../assets/Images/firebase.png'
import Git from '../assets/Images/git.png'
import GitHub from '../assets/Images/github.png'
import VsCode from '../assets/Images/vscode.png'

const TechnicalSkills = () => {
    return (
        <div id='Technical'>
            <div>
                <h2 className="text-3xl font-bold text-center mb-8">Technical <span className="">Skills</span></h2>
                <div className='flex flex-wrap gap-6 items-center justify-center'>
                    <div className='bg-[#4caf5030] animate-pulse w-fit px-4 py-2 rounded-lg'>
                        <img className='w-[100px]' src={MongoDb} alt="mongodb logo" />
                        <span className='text-center font-medium text-sm block'>MONGODB</span>
                    </div>
                    <div className='bg-[#ffc40345] animate-pulse w-fit px-4 py-2 rounded-lg'>
                        <img className='w-[100px]' src={Firebase} alt="firebase logo" />
                        <span className='text-center font-medium text-sm block'>FIREBASE</span>
                    </div>


                    <div className='bg-[#00000038] animate-pulse w-fit px-4 py-2 rounded-lg'>
                        <img className='w-[100px]' src={ExpressJs} alt="exress logo" />
                        <span className='text-center font-medium text-sm block'>EXPRESS JS</span>
                    </div>
                    <div className='animate-pulse bg-[#21a36635] w-fit px-4 py-2 rounded-lg'>
                        <img className='w-[100px]' src={Nodejs} alt="nodejs logo" />
                        <span className='text-center font-medium text-sm block'>NODE JS</span>
                    </div>
                    <div className='animate-pulse bg-[#f4511e35] w-fit px-4 py-2 rounded-lg'>
                        <img className='w-[100px]' src={Git} alt="git logo" />
                        <span className='text-center font-medium text-sm block'>GIT</span>
                    </div>
                    <div className='animate-pulse bg-[#00000030] w-fit px-4 py-2 rounded-lg'>
                        <img className='w-[100px]' src={GitHub} alt="github logo" />
                        <span className='text-center font-medium text-sm block'>GITHUB</span>
                    </div>
                    <div className='bg-[#3977bd35] w-fit px-4 py-2 rounded-lg animate-pulse'>
                        <img className='w-[100px]' src={React} alt="reactjs logo" />
                        <span className='text-center font-medium text-sm block'>REACT JS</span>
                    </div>
                    <div className='bg-[#fed70350] w-fit px-4 py-2 rounded-lg'>
                        <img className='w-[100px]' src={Java} alt="js logo" />
                        <span className='text-center font-medium text-sm block'>JAVASCRIPT</span>
                    </div>
                    <div className='bg-[#05acc130] w-fit px-4 py-2 rounded-lg animate-pulse'>
                        <img className='w-[100px]' src={TailwindLogo} alt="tailwind logo" />
                        <span className='text-center font-medium text-sm block'>TAILWIND CSS</span>
                    </div>
                    <div className='bg-[#0278bd30] w-fit px-4 py-2 rounded-lg animate-pulse'>
                        <img className='w-[100px]' src={Css} alt="css logo" />
                        <span className='text-center font-medium text-sm block'>CSS</span>
                    </div>
                    <div className='bg-[#ff6f0130] w-fit px-4 py-2 rounded-lg animate-pulse'>
                        <img className='w-[100px]' src={html} alt="html logo" />
                        <span className='text-center font-medium text-sm block'>HTML</span>
                    </div>
                    <div className='bg-[#0088d130] w-fit px-4 py-2 rounded-lg animate-pulse'>
                        <img className='w-[100px]' src={VsCode} alt="vscode logo" />
                        <span className='text-center font-medium text-sm block'>VS CODE</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TechnicalSkills;