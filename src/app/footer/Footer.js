import React from "react";

class Footer extends React.Component{
    render() {
        return (
            <div className='flex flex-row h-20 bg-base-gray items-center justify-center'>
                <h1 className='font-functional text-bright-gray font-medium text-center text-2xl'>© 2022 CrucibleMC</h1>
            </div>
        );
    }
}

export default Footer;