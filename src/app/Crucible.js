import React from "react";
import Home from "./home/Home";
import Menu from "./menu/Menu";
import About from "./about/About";
import Download from "./download/Download";
import Footer from "./footer/Footer";

export const githubVersionsFetch = async () => {

    const data = await fetch("https://api.github.com/repos/CrucibleMC/Crucible/releases").then(
        r => r.json()
    ).catch(
        er => {
            console.log(er);
            return null;
        })
    ;

    const versions = [];

    if(data){

        data.forEach(el => {

            let obj = {
                name: 'Crucible 1.7.10',
                id: el.id,
                type: ((el.target_commitish === 'reflux') ? "Reflux" : (el.target_commitish === 'master') ? "Release" : "Staging"),
                version: el.tag_name,
                date: new Date(el.published_at).toLocaleDateString(),
                url: el.html_url,
            }

            versions.push(obj);
        })

    }

    return versions;
}


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