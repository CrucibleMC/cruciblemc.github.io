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

                <div className="container w-4/5 md:w-full xl:max-w-7xl mx-auto flex flex-row h-16 md:h-20 items-center justify-between items-center flex-row">

                    <h1 className="font-logo text-green text-4xl">CRUCIBLE</h1>

                    <div className='md:hidden flex justify-end'>
                        {!this.state.menuOpen ?
                            <AiOutlineMenu onClick={this.toggleMenu} className='text-white font-semibold text-4xl'/> :
                            <AiOutlineClose onClick={this.toggleMenu} className='text-white font-semibold text-4xl'/>
                        }
                    </div>

                    <div className="hidden md:flex flex-row text-white font-semibold w-1/2 justify-around">
                        <a href="/#home" rel='noreferrer'>HOME</a>
                        <a href="/#about">ABOUT</a>
                        <a href="/#download">DOWNLOADS</a>
                        <a href="https://github.com/CrucibleMC/Crucible" target='_blank' rel='noreferrer'>PROJECT</a>
                        <a href="https://discord.gg/jWSTJ4d" target='_blank' rel='noreferrer'>DISCORD</a>
                    </div>


                </div>

                <div className="md:hidden mx-auto flex flex-col justify-end rounded self-end">

                    <div className={`${this.state.menuOpen ? 'flex' : 'hidden'} flex-col bg-gray absolute top-16 right-10 my-2 min-w-[150px] rounded-2xl sidebar items-end text-white font-functional font-bold`}>
                        <a className='mt-2 mb-2 mr-4' href="/#home" rel='noreferrer'>HOME</a>
                        <a className='mb-2 mr-4' href="/#about">ABOUT</a>
                        <a className='mb-2 mr-4' href="/#download">DOWNLOADS</a>
                        <a className='mb-2 mr-4' href="https://github.com/CrucibleMC/Crucible" target='_blank' rel='noreferrer'>PROJECT</a>
                        <a className='mb-2 mr-4' href="https://discord.gg/jWSTJ4d" target='_blank' rel='noreferrer'>DISCORD</a>
                    </div>

                </div>

            </div>
        );
    }
}

export default Menu;