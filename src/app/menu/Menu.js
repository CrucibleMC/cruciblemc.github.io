import React from "react";

class Menu extends React.Component{
    render() {
        return(
            <div id='menu' className="bg-base-gray z-40">
                <div className="container xl:max-w-7xl mx-auto flex flex-row h-20 items-center justify-between">
                    <h1 className="font-logo text-green text-4xl">CRUCIBLE</h1>
                    <div className="menu-options text-white font-semibold w-1/2 flex flex-row justify-around">
                        <a href="#home" rel='noreferrer'>HOME</a>
                        <a href="#about">ABOUT</a>
                        <a href="#">DOWNLOADS</a>
                        <a href="https://github.com/CrucibleMC/Crucible" target='_blank' rel='noreferrer'>PROJECT</a>
                        <a href="https://discord.gg/jWSTJ4d" target='_blank' rel='noreferrer'>DISCORD</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;