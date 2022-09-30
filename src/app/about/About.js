import React from "react";
import { VscSettingsGear } from "react-icons/vsc";

class About extends React.Component{
    render(){
        return (
            <div id='about' className='bg-base-gray flex flex-col'>
               <div className='container xl:max-w-7xl mx-auto my-32'>
                   <div className=''>
                       <h1 className='font-display text-white text-6xl tracking-wide'>About Crucible</h1>
                       <p className='font-functional text-bright-gray text-2xl mt-4'>Crucible is a Thermos fork with several improvements.</p>
                       <p className='font-functional text-bright-gray text-2xl mt-4 w-3/4'>We aim to close the gaps left by Thermos and extend the support for those still on 1.7.10 by adding support for long broken mods and plugins and fix serious bugs as they appear. <br/>Developed by server owners for server owners, with experience from our personal servers to deliver a stable software capable of handling populated servers.</p>
                   </div>
                   <div>
                       <h2 className='font-display text-white text-4xl mt-16 tracking-wide'>Features</h2>
                       <ul className='flex flex-col mt-4'>
                           <li className='flex flex-row mt-2 items-center'>
                               <VscSettingsGear className='text-green text-2xl mr-4'/>
                               <p className='text-bright-gray font-functional font-medium text-2xl'>Bug and CVE fixes</p>
                           </li>
                           <li className='flex flex-row mt-2 items-center'>
                               <VscSettingsGear className='text-green text-2xl mr-4'/>
                               <p className='text-bright-gray font-functional font-medium text-2xl'>Updated toolchain</p>
                           </li>
                           <li className='flex flex-row mt-2 items-center'>
                               <VscSettingsGear className='text-green text-2xl mr-4'/>
                               <p className='text-bright-gray font-functional font-medium text-2xl'>Performance improvements</p>
                           </li>
                           <li className='flex flex-row mt-2 items-center'>
                               <VscSettingsGear className='text-green text-2xl mr-4'/>
                               <p className='text-bright-gray font-functional font-medium text-2xl'>Compatibility patches</p>
                           </li>
                       </ul>
                   </div>
               </div>
            </div>
        );
    }
}

export default About;