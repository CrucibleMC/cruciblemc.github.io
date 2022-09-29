import React from "react";
import "./Menu.css";

class Menu extends React.Component{
    render() {
        return(
            <div className="menu">
                <div className="container mx-auto flex flex-row h-20 items-center justify-between">
                    <h1 className="title text-4xl">CRUCIBLE</h1>
                    <div className="menu-options text-white font-semibold w-1/2 flex flex-row justify-around">
                        <a href="#">HOME</a>
                        <a href="#">ABOUT</a>
                        <a href="#">DOWNLOADS</a>
                        <a href="#">PROJECT</a>
                        <a href="#">DISCORD</a>
                    </div>
                </div>
            </div>
        );
    }

}

export default Menu;