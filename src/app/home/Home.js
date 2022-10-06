import React from "react";
import { RiDownloadLine } from "react-icons/ri";

class Home extends React.Component{
    render() {
      return(
          <div id='home' className='flex flex-col mx-auto justify-center text-center h-[80vh]'>
              <div className='flex flex-col mx-auto'>
                  <div className='flex flex-col mx-auto text-center items-center'>
                      <h1 className='home-title text-3xl w-5/6 md:w-full md:text-6xl font-display text-base-gray'>Empower your server with</h1>
                      <div className='flex flex-col md:flex-row mx-auto text-center items-center mb-4 md:mb-8'>
                          <h1 className='home-title text-3xl md:text-6xl font-display text-base-gray md:mr-4'>Crucible today!</h1>
                          <img src={'/assets/logo.png'} alt="Crucible" className='mt-2 w-8 h-8 md:mt-0 md:w-14 md:h-14'/>
                      </div>
                  </div>
                  <h3 className='mx-auto sub-home-title text-xl w-3/4 md:text-3xl md:leading-8 md:w-3/5 font-functional text-light-gray mb-10 md:mb-20'>Crucible is a Forge & Bukkit hybrid based on Thermos with several improvements.</h3>
              </div>
              <div className='flex flex-row mx-auto rounded-2xl download-button bg-base-gray text-light-green hover:bg-gray hover:text-green'>
                  <a href='/#download' className='flex flex-row px-10 py-4 text-xl md:px-20 md:py-6 md:text-3xl font-bold font-functional'>
                      DOWNLOAD NOW
                      <RiDownloadLine className='ml-4'/>
                  </a>
              </div>
          </div>
      );
    }
}

export default Home;