import React from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

class Menu extends React.Component{

    state = {
        menuOpen: false
    }

    toggleMenu = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    render() {
        return(
            <div id='menu' className="bg-base-gray z-40 border-b-2 border-b-bright-green flex flex-col">

                <div className="container w-4/5 md:w-full xl:max-w-[1200px] mx-auto flex flex-row h-16 md:h-20 items-center justify-between items-center flex-row">

                    <h1 className="font-logo text-green text-4xl">CRUCIBLE</h1>

                    <div className='md:hidden flex justify-end'>
                        {!this.state.menuOpen ?
                            <AiOutlineMenu onClick={this.toggleMenu} className='text-white font-semibold text-4xl'/> :
                            <AiOutlineClose onClick={this.toggleMenu} className='text-white font-semibold text-4xl'/>
                        }
                    </div>

                    <div className="hidden md:flex flex-row text-white font-semibold w-1/2 justify-around">
                        <a className='after:content-[""] after:bg-bright-gray after:mt-2 after:block after:h-0.5 after:transition-width after:duration-500 after:w-0 after:hover:w-full' href="/#home" rel='noreferrer'>HOME</a>
                        <a className='after:content-[""] after:bg-bright-gray after:mt-2 after:block after:h-0.5 after:transition-width after:duration-500 after:w-0 after:hover:w-full' href="/#about">ABOUT</a>
                        <a className='after:content-[""] after:bg-bright-gray after:mt-2 after:block after:h-0.5 after:transition-width after:duration-500 after:w-0 after:hover:w-full' href="/#download">DOWNLOADS</a>
                        <a className='after:content-[""] after:bg-bright-gray after:mt-2 after:block after:h-0.5 after:transition-width after:duration-500 after:w-0 after:hover:w-full' href="https://github.com/CrucibleMC/Crucible" target='_blank' rel='noreferrer'>PROJECT</a>
                        <a className='after:content-[""] after:bg-bright-gray after:mt-2 after:block after:h-0.5 after:transition-width after:duration-500 after:w-0 after:hover:w-full' href="https://discord.gg/jWSTJ4d" target='_blank' rel='noreferrer'>DISCORD</a>
                    </div>


                </div>

                <div className="md:hidden mx-auto flex flex-col justify-end rounded self-end">

                    <div className={` tracking-wider ${this.state.menuOpen ? 'flex' : 'hidden'} flex-col justify-between bg-gray absolute top-16 right-10 my-4 py-6 min-w-[180px] text-lg rounded-2xl sidebar items-end text-white font-functional font-bold`}>
                        <a className='my-1 mr-4' href="/#home" rel='noreferrer'>HOME</a>
                        <span className='mx-auto w-4/5 border-b border-b-light-gray'/>
                        <a className='my-1 mr-4' href="/#about">ABOUT</a>
                        <span className='mx-auto w-4/5 border-b border-b-light-gray'/>
                        <a className='my-1 mr-4' href="/#download">DOWNLOADS</a>
                        <span className='mx-auto w-4/5 border-b border-b-light-gray'/>
                        <a className='my-1 mr-4' href="https://github.com/CrucibleMC/Crucible" target='_blank' rel='noreferrer'>PROJECT</a>
                        <span className='mx-auto w-4/5 border-b border-b-light-gray'/>
                        <a className='my-1 mr-4' href="https://discord.gg/jWSTJ4d" target='_blank' rel='noreferrer'>DISCORD</a>
                    </div>

                </div>

            </div>
        );
    }
}

export default Menu;