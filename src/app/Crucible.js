import React from "react";
import Home from "./home/Home";
import Menu from "./menu/Menu";
import About from "./about/About";
import Download from "./download/Download";
import Footer from "./footer/Footer";

class Crucible extends React.Component{

    render() {
        return (
            <div className='relative'>
                <div className="sticky top-0">
                    <Menu/>
                </div>
                <div className="flex flex-col mx-auto">
                    <Home/>
                    <About/>
                    <Download/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Crucible;
