import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";


import html from '../assets/Images/html.png'
import Css from '../assets/Images/css.png'
import TailwindLogo from '../assets/Images/tailwind.png'
import Java from '../assets/Images/js.png'
import react from '../assets/Images/reactjs.png'
import Nodejs from '../assets/Images/nodejs.png'
import ExpressJs from '../assets/Images/express.png'
import MongoDb from '../assets/Images/mongodb.png'
import Firebase from '../assets/Images/firebase.png'
import Git from '../assets/Images/git.png'
import GitHub from '../assets/Images/github.png'
import VsCode from '../assets/Images/vscode.png'
import Bootstrap from '../assets/Images/Bootstrap.png'

export function UnderlineTabs() {
    const [activeTab, setActiveTab] = React.useState("basic");
    const data = [
        {
            label: "BASIC",
            value: "basic",
            desc:
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
                    <div className='bg-[#fed70350] w-fit px-8 py-4 rounded-lg animate-pulse'>
                        <img className='w-full' src={Java} alt="js logo" />
                        <span className='text-center font-medium text-sm block'>JAVASCRIPT</span>
                    </div>
                    <div className='bg-[#0278bd30] w-fit px-8 py-4 rounded-lg animate-pulse'>
                        <img className='w-full' src={Css} alt="css logo" />
                        <span className='text-center font-medium text-sm block'>CSS</span>
                    </div>
                    <div className='bg-[#ff6f0130] w-fit px-8 py-4 rounded-lg animate-pulse'>
                        <img className='w-full' src={html} alt="html logo" />
                        <span className='text-center font-medium text-sm block'>HTML</span>
                    </div>
                </div>,
        },

        {
            label: "Front End",
            value: "Front End",
            desc: <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-white">

                <div className='bg-[#3977bd35] w-fit px-8 py-4 rounded-lg animate-pulse'>
                    <img className='w-full' src={react} alt="reactjs logo" />
                    <span className='text-center font-medium text-sm block'>REACT JS</span>

                </div>
                <div className='bg-[#05acc130] w-fit px-8 py-4 rounded-lg animate-pulse'>
                    <img className='w-full' src={TailwindLogo} alt="tailwind logo" />
                    <span className='text-center font-medium text-sm block'>TAILWIND CSS</span>
                </div>
                <div className='bg-[#ae91d9da] w-fit px-8 py-4 rounded-lg animate-pulse'>
                    <img className='w-full' src={Bootstrap} alt="tailwind logo" />
                    <span className='text-center font-medium text-sm block'>BOOTSTRAP</span>
                </div>
            </div>,
        },
        {
            label: "Back End",
            value: "Back End",
            desc: <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-white">
                <div className='bg-[#4caf5030] animate-pulse w-fit px-8 py-4 rounded-lg'>
                    <img className='w-full' src={MongoDb} alt="mongodb logo" />
                    <span className='text-center font-medium text-sm block'>MONGODB</span>
                </div>
                <div className='bg-[#00000038] w-fit px-8 py-4 rounded-lg'>
                    <img className='w-full' src={ExpressJs} alt="exress logo" />
                    <span className='text-center font-medium text-sm block'>EXPRESS JS</span>
                </div>
                <div className='animate-pulse bg-[#21a36635] w-fit px-8 py-4 rounded-lg'>
                    <img className='w-full' src={Nodejs} alt="nodejs logo" />
                    <span className='text-center font-medium text-sm block'>NODE JS</span>
                </div>

            </div>,
        },
        {
            label: "Others",
            value: "Others",
            desc: <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-white">
                <div className='bg-[#ffc40345] animate-pulse w-fit px-8 py-4 rounded-lg'>
                    <img className='w-full' src={Firebase} alt="firebase logo" />
                    <span className='text-center font-medium text-sm block'>FIREBASE</span>
                </div>
                <div className='animate-pulse bg-[#f4511e35] w-fit px-8 py-4 rounded-lg'>
                    <img className='w-full' src={Git} alt="git logo" />
                    <span className='text-center font-medium text-sm block'>GIT</span>
                </div>
                <div className='animate-pulse bg-[#00000030] w-fit px-8 py-4 rounded-lg'>
                    <img className='w-full' src={GitHub} alt="github logo" />
                    <span className='text-center font-medium text-sm block'>GITHUB</span>
                </div>
                <div className='bg-[#0088d130] w-fit px-8 py-4 rounded-lg animate-pulse'>
                    <img className='w-full' src={VsCode} alt="vscode logo" />
                    <span className='text-center font-medium text-sm block'>VS CODE</span>
                </div>
            </div>,

        },
    ];
    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "bg-[#1c3064]" : ""}
                    >
                        <span className="font-bold text-white text-lg md:text-xl"> {label}</span>
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}