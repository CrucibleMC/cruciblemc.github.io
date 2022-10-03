import React from "react";
import { VscSettingsGear } from "react-icons/vsc";

class About extends React.Component{
    render(){
        return (
            <div id='about' className='bg-base-gray flex flex-col'>
               <div className='container w-4/5 md:w-full xl:max-w-7xl mx-auto my-8 md:my-32'>
                   <div className=''>
                       <h1 className='font-display text-white text-3xl md:text-6xl tracking-wide'>About Crucible</h1>
                       <p className='font-functional text-bright-gray text-xl md:text-2xl mt-4 font-medium'>Crucible is a Thermos fork with several improvements.</p>
                       <p className='font-functional text-bright-gray text-xl md:text-2xl mt-4 md:w-3/4 font-medium'>We aim to close the gaps left by Thermos and extend the support for those still on 1.7.10 by adding support for long broken mods and plugins and fix serious bugs as they appear. <br/>Developed by server owners for server owners, with experience from our personal servers to deliver a stable software capable of handling populated servers.</p>
                   </div>
                   <div>
                       <h2 className='font-display text-white text-2xl md:text-4xl mt-8 md:mt-16 tracking-wide'>Features</h2>
                       <ul className='flex flex-col mt-2 md:mt-4'>
                           <li className='flex flex-row mt-2 items-center'>
                               <VscSettingsGear className='text-green text-xl md:text-2xl mr-2 md:mr-4'/>
                               <p className='text-bright-gray font-functional font-medium text-xl md:text-2xl'>Bug and CVE fixes</p>
                           </li>
                           <li className='flex flex-row mt-2 items-center'>
                               <VscSettingsGear className='text-green text-xl md:text-2xl mr-2 md:mr-4'/>
                               <p className='text-bright-gray font-functional font-medium text-xl md:text-2xl'>Updated toolchain</p>
                           </li>
                           <li className='flex flex-row mt-2 items-center'>
                               <VscSettingsGear className='text-green text-xl md:text-2xl mr-2 md:mr-4'/>
                               <p className='text-bright-gray font-functional font-medium text-xl md:text-2xl'>Performance improvements</p>
                           </li>
                           <li className='flex flex-row mt-2 items-center'>
                               <VscSettingsGear className='text-green text-xl md:text-2xl mr-2 md:mr-4'/>
                               <p className='text-bright-gray font-functional font-medium text-xl md:text-2xl'>Compatibility patches</p>
                           </li>
                       </ul>
                   </div>
               </div>
            </div>
        );
    }
}

export default About;