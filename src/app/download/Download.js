import React from "react";
import Version from "../components/Version";
import {BsArrowRight} from "react-icons/bs";

class Download extends React.Component{

    state = {
        versions: [
            {
                name: 'Crucible 1.7.10',
                type: 'Release',
                version: 'v5.4',
                date: new Date(),
                url: '#'
            },
            {
                name: 'Crucible 1.7.10',
                type: 'Reflux',
                version: 'v1.0',
                date: new Date(),
                url: '#'
            }
        ],
    }

    constructor(props) {

        super(props);

        this.setState({
            versions: props.versions,
        })

    }

    render() {
        return (
            <div className='flex flex-col'>
                <div className='container mx-auto my-32'>
                    <h1 className='font-display text-base-gray text-6xl tracking-wide mb-4'>Downloads</h1>
                    <h3 className='font-functional text-light-gray text-2xl mt-4 font-medium mb-8'>Last public releases</h3>
                    <div className='flex flex-row justify-start pb-8 border-b border-light-gray'>
                        {this.state.versions.map(value => {
                            let {name, type, version, date, url} = value;
                            return (
                                <div className='mr-16'>
                                    <Version
                                        name = {name}
                                        type = {type}
                                        version = {version}
                                        date = {date}
                                        url = {url}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <h2 className='font-functional font-bold font-gray text-3xl mt-8 mb-2'>Are you looking for other versions?</h2>
                    <h3 className='font-functional font-medium text-light-gray text-2xl mb-4'>You can find all builds, on our project page</h3>
                    <div className='flex flex-row rounded-md download-button bg-base-gray'>
                        <a href='#' className='flex flex-row px-12 py-6 text-2xl font-bold text-light-green font-functional items-center'>
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