import React from "react";
import Version from "../components/Version";
import {BsArrowRight} from "react-icons/bs";
import {githubVersionsFetch} from "../Crucible";

class Download extends React.Component{

    state = {
        versions: []
    }

    componentDidMount() {

        githubVersionsFetch().then(el => {

            let versions = [];

            if(el){

                versions.push(el.find(el => el.type === 'Release'));
                versions.push(el.find(el => el.type === 'Reflux'));
                versions.push(el.find(el => el.type === 'Staging'));

            }

            this.setState({
                versions: versions
            })
        })

    }

    render() {
        return (
            <div id='download' className='flex flex-col'>
                <div className='container w-4/5 md:w-full xl:max-w-7xl mx-auto my-8 md:my-32 '>
                    <h1 className='font-display text-base-gray text-3xl md:text-6xl tracking-wide mb-2 md:mb-4'>Downloads</h1>
                    <h3 className='font-functional text-light-gray text-xl md:text-2xl mt-2 md:mt-4 font-medium mb-8'>Last public releases</h3>
                    <div className='flex flex-col md:flex-row justify-start md:pb-8 border-b border-light-gray flex-wrap'>
                        {this.state.versions.map(value => {

                            return (
                                <div className='mr-16 pb-4'>
                                    <Version
                                        name = {value.name}
                                        type = {value.type}
                                        version = {value.version}
                                        date = {value.date}
                                        url = {value.url}
                                    />
                                </div>
                            )

                        })}
                    </div>
                    <h2 className='font-functional font-bold text-gray text-2xl md:text-3xl mt-8 mb-2'>Are you looking for other versions?</h2>
                    <h3 className='font-functional font-medium text-light-gray text-xl md:text-2xl mb-4'>You can find all builds, on our project page</h3>
                    <div className='flex-none flex-row rounded-xl md:rounded-2xl download-button bg-base-gray grow-0 self-start max-w-min'>
                        <a href="https://github.com/CrucibleMC/Crucible" target='_blank' rel='noreferrer' className='flex flex-row px-6 md:px-8 py-3 md:py-4 text-xl md:text-2xl font-bold text-light-green font-functional items-center'>
                            PROJECT
                            <BsArrowRight className='ml-4 font-bold'/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Download;