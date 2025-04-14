import React from 'react';
import Feature from './Feature';

const Price = ({option}) => {
    const {name, pricePerMonth, features} = option;
    return (
        <div className='bg-rose-500 rounded-lg py-10 flex flex-col content-center'>
            <h3 className=' text-center'>
                <span className='text-7xl'>{pricePerMonth}</span>
                <span className='text-2xl'>/mon</span>
            </h3>
            <h4 className='text-3xl text-center mb-3'>{name}</h4>
            {
                features.map((feature, index)=>{
                    return <Feature key={index + 1} feature={feature} />
                })
            }
            <button
            className='px-16 py-4 mt-5 bg-rose-800 mx-auto rounded-lg shadow-lg font-extrabold uppercase delay-100 ease-in-out hover:bg-rose-800/80'
             type="button">subscribe</button>

        </div>
    );
};

export default Price;