import React from 'react';
import { ImCheckmark2 } from "react-icons/im";

const Feature = ({feature}) => {
    return (
        <div className='flex items-center w-6/12 mx-auto text-xs md:text-sm flex-grow'>
            <p className='flex items-center gap-2 flex-grow'>
            <span>
                <ImCheckmark2 />
            </span>
            <span>
            {feature}
            </span>
            </p>
        </div>
    );
};

export default Feature;