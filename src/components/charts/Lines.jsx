import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { LineChart , Line, CartesianGrid, XAxis, YAxis,  Tooltip ,  ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';


const Lines = () => {
  const [phones , setPhones] = useState([]);
  const [loading , setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null)

  useEffect(()=>{
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data=>{
      const getData = data.data.data;
      const processedData = getData.map(data=>{
        const obj = {
          name : data.phone_name,
          price : parseInt(data.slug.split('-')[1])
        }
        return obj;
      })

      setPhones(processedData);

    })
    .catch(err=>{
      console.error(err);
      setErrMsg('Data Loading Error ! Check Console...')
    })
    .finally(()=>{
      setLoading(false)
    })
    
  },[])

  const results = [
    {
      id: 1,
      name: "Ayaan Ahmed",
      Math: 92,
      Physics: 88,
      Chemistry: 79,
      "fill": "#8884d8"

    },
    {
      id: 2,
      name: "Fatima Khan",
      Math: 81,
      Physics: 73,
      Chemistry: 90,
      "fill": "#83a6ed"
    },
    {
      id: 3,
      name: "Zayan Malik",
      Math: 77,
      Physics: 95,
      Chemistry: 85,
      "fill": "#8dd1e1"

    },
    {
      id: 4,
      name: "Hassan Raza",
      Math: 65,
      Physics: 70,
      Chemistry: 68,
      "fill": "#82ca9d"

    },
    {
      id: 5,
      name: "Laiba Noor",
      Math: 89,
      Physics: 91,
      Chemistry: 87,
      "fill": "#a4de6c"

    },
    {
      id: 6,
      name: "Taimoor Shah",
      Math: 73,
      Physics: 78,
      Chemistry: 80,
      "fill": "#8dd1e1"

    },
    {
      id: 7,
      name: "Sana Javed",
      Math: 95,
      Physics: 94,
      Chemistry: 92,
      "fill": "#83a6ed"

    },
    {
      id: 8,
      name: "Bilal Aslam",
      Math: 60,
      Physics: 66,
      Chemistry: 63,
      "fill": "#8884d8"

    }
  ];
    return (
        <div className='w-full flex flex-col items-center' >
          <div className='mx-auto w-6/12'>
            <LineChart width={550} height={350} data={results}>
              <Line type="monotone" dataKey="Physics" stroke="#82ca9d" />
              <Line type="monotone" dataKey="Chemistry" stroke="#8884d8" />
              <Line type="monotone" dataKey="Math" />
              <CartesianGrid strokeDasharray="5 5"/>
              <XAxis tick={true} dataKey={'name'} />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
            <div className='w-full min-h-max flex items-center justify-center'>
              {
                loading ?
                <h3>LOADING.........</h3>
                : errMsg ? <h3>{errMsg}</h3> :

                  <BarChart
                  width={1280} height={450}
                  data={phones}
                  >
                  <CartesianGrid strokeDasharray="4 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      formatter={(value, name) => [`$${value}`, 'Price']}
                      labelFormatter={(label) => `Phone: ${label}`}
                      
                    />

                    <Legend />
                    <Bar dataKey={'price'} fill="#82ca9d" />
                  </BarChart>

              }
            </div>
        </div>
    );
};

export default Lines;