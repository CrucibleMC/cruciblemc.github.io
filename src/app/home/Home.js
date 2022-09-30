import React from "react";
import { RiDownloadLine } from "react-icons/ri";

class Home extends React.Component{
    render() {
      return(
          <div id='home' className='flex flex-col mx-auto justify-center text-center h-screen'>
              <div className='flex flex-col mx-auto'>
                  <div className='flex flex-col mx-auto text-center items-end'>
                      <h1 className='home-title text-6xl font-display text-base-gray'>Empower your server with</h1>
                      <div className='flex flex-row mx-auto text-center'>
                          <h1 className='home-title text-6xl font-display text-base-gray mb-8'>Crucible today!</h1>
                          <img src={'/assets/logo.png'} alt="Crucible" className='ml-4 w-14 h-14'/>
                      </div>
                  </div>
                  <h3 className='mx-auto sub-home-title text-3xl leading-8 w-3/5 font-functional text-light-gray mb-20'>Crucible is a Forge & Bukkit hybrid based on Thermos with several improvements.</h3>
              </div>
              <div className='flex flex-row mx-auto rounded-md download-button bg-base-gray'>
                  <a href='#' className='flex flex-row px-20 py-6 text-3xl font-bold text-light-green font-functional'>
                      DOWNLOAD NOW
                      <RiDownloadLine className='ml-4'/>
                  </a>
              </div>
          </div>
      );
    }
}

export default Home;