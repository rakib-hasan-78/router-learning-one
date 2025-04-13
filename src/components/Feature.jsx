import React from 'react';
import { ImCheckmark2 } from "react-icons/im";

const Feature = ({feature}) => {
    return (
        <div className='flex items-center text-center  w-10/12 mx-auto'>
            <p className='flex items-center gap-2 text-center'>
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