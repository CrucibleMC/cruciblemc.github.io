import React from "react";
import {AiOutlineMenu} from "react-icons/ai";

class Menu extends React.Component{
    render() {
        return(
            <div id='menu' className="bg-base-gray z-40 border-b-2 border-b-bright-green">
                <div className="container w-4/5 md:w-full xl:max-w-7xl mx-auto flex flex-row h-16 md:h-20 items-center justify-between items-center">
                    <h1 className="font-logo text-green text-4xl">CRUCIBLE</h1>
                    <div className="hidden md:flex flex-row text-white font-semibold w-1/2 justify-around">
                        <a href="/#home" rel='noreferrer'>HOME</a>
                        <a href="/#about">ABOUT</a>
                        <a href="/#download">DOWNLOADS</a>
                        <a href="https://github.com/CrucibleMC/Crucible" target='_blank' rel='noreferrer'>PROJECT</a>
                        <a href="https://discord.gg/jWSTJ4d" target='_blank' rel='noreferrer'>DISCORD</a>
                    </div>
                    <div className="md:hidden group flex flex-col">
                        <AiOutlineMenu className='group-hover:hidden text-white font-semibold text-4xl'/>
                        <div className="hidden group-hover:flex flex-col text-white font-semibold bg-base-gray mt-32">
                            <a href="/#home" rel='noreferrer'>HOME</a>
                            <a href="/#about">ABOUT</a>
                            <a href="/#download">DOWNLOADS</a>
                            <a href="https://github.com/CrucibleMC/Crucible" target='_blank' rel='noreferrer'>PROJECT</a>
                            <a href="https://discord.gg/jWSTJ4d" target='_blank' rel='noreferrer'>DISCORD</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;