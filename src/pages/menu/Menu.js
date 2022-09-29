import React from "react";
import "./Menu.css";

class Menu extends React.Component{

    render() {
        return(
            <div className="menu">
                <h1 className="title">CRUCIBLE</h1>
                <div className="menu-options">
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">DOWNLOADS</a>
                    <a href="#">PROJECT</a>
                    <a href="#">DISCORD</a>
                </div>
            </div>
        );
    }

}

export default Menu;