import React from "react";
import { RiDownloadLine } from "react-icons/ri";

class Version extends React.Component{

    render() {
        return (
            <div className={`flex flex-col ${this.props.type === 'Release' ? 'bg-gray' : 'bg-base-gray'} w-60 md:w-80 rounded-xl md:rounded-2xl`}>
                <div className='px-2 md:px-4 py-4 md:py-8'>
                    <h1 className='font-functional text-xl md:text-2xl font-bold text-white mb-2'>{this.props.name}</h1>
                    <h3 className='font-functional text-base md:text-xl font-bold tracking-wide text-bright-green mb-6 md:mb-8'>{this.props.type} {this.props.version}</h3>
                    <h3 className='font-functional text-base md:text-xl font-medium tracking-wide text-bright-gray mb-2'>Released {this.props.date}</h3>
                    <div className='flex flex-row mx-2 rounded-md download-button bg-base-gray justify-center text-light-green text-center border border-light-green hover:bg-gray hover:text-green'>
                        <a className='flex flex-row px-1 md:px-4 py-1 md:py-2 text-4 font-bold font-functional items-center' href={this.props.url} target='_blank' rel='noreferrer'>
                            DOWNLOAD NOW
                            <RiDownloadLine className='ml-4 font-bold'/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Version;