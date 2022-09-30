import React from "react";
import Home from "./home/Home";
import Menu from "./menu/Menu";
import About from "./about/About";

class Crucible extends React.Component{

    state = {
        fixedMenu: true,
    }

    toggleMenu = () => {
        this.setState({
            fixedMenu: !this.state.fixedMenu
        })
    }

    componentDidMount() {

        const menu = document.getElementById('menu')

        window.addEventListener("scroll", () => {
            if(window.scrollY > menu.offsetHeight){
                if(!this.state.fixedMenu)
                    this.toggleMenu();
            }else{
                if(this.state.fixedMenu)
                    this.toggleMenu();
            }

        })
    }


    render() {
        return (
            <div className='relative'>
                <div className="sticky top-0">
                    <Menu/>
                </div>
                <div className="flex flex-col container-lx mx-auto">
                    <div className={`${this.state.fixedMenu ? "" : ""}`}>
                        <Home/>
                    </div>
                    <About/>
                </div>
            </div>
        );
    }
}

export default Crucible;
