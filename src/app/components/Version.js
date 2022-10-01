import React from "react";
import { RiDownloadLine } from "react-icons/ri";

class Version extends React.Component{

    render() {
        return (
            <div className={`flex flex-col ${this.props.type === 'Release' ? 'bg-gray' : 'bg-base-gray'} w-80 rounded-2xl`}>
                <div className='px-4 py-8'>
                    <h1 className='font-functional text-2xl font-bold text-white mb-2'>{this.props.name}</h1>
                    <h3 className='font-functional text-1xl font-bold tracking-wide text-bright-green mb-8'>{this.props.type} {this.props.version}</h3>
                    <h3 className='font-functional text-1xl font-medium tracking-wide text-bright-gray mb-2'>Released {this.props.date.toLocaleDateString()}</h3>
                    <div className='flex flex-row rounded-md download-button bg-base-gray justify-center text-center border border-light-green'>
                        <a className='flex flex-row px-4 py-2 text-4 font-bold text-light-green font-functional items-center' href={this.props.url} target='_blank' rel='noreferrer'>
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