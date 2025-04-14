import React, { useEffect, useState } from 'react';
import Price from './Price';

const PriceOptions = () => {
    const [priceOptions, setPriceOptions] = useState([])
    useEffect(()=>{
        fetch('/db.json')
            .then(response=>response.json())
            .then(data=>setPriceOptions(data.gymOptions))
    },[])

    return (
        <div className='p-5'>
            <h1 className='uppercase text-center py-10 text-5xl'>bigshow price in town</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 w-full'>
                {
                    priceOptions.map(option=>{
                        return <Price key={option.id} option={option} />
                    })
                }
            </div>
        </div>
    );
};

export default PriceOptions;