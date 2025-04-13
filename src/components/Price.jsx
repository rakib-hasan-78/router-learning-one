import React from 'react';
import Feature from './Feature';

const Price = ({option}) => {
    const {name, pricePerMonth, features} = option;
    return (
        <div className='bg-rose-500 rounded-lg py-10'>
            <h3 className=' text-center'>
                <span className='text-7xl'>{pricePerMonth}</span>
                <span className='text-2xl'>/mon</span>
            </h3>
            <h4 className='text-3xl text-center mb-5'>{name}</h4>
            {
                features.map(feature=>{
                    return <Feature feature={feature} />
                })
            }
        </div>
    );
};

export default Price;