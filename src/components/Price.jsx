import React from 'react';

const Price = ({option}) => {
    const {name, pricePerMonth} = option;
    return (
        <div className='bg-rose-500 rounded-lg py-10'>
            <h3 className=' text-center'>
                <span className='text-7xl'>{pricePerMonth}</span>
                <span className='text-2xl'>/mon</span>
            </h3>
            <h4 className='text-3xl text-center'>{name}</h4>
        </div>
    );
};

export default Price;