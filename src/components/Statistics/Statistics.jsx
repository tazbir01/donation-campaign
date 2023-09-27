// import React, { PureComponent } from 'react';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },

];

const COLORS = ['#FF444A', '#00C49F'];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


const Statistics = () => {
    const donations = useLoaderData()
    const [donation, setDonation] = useState([])

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('donations'))
        // console.log(storedData)

        const donated = donations.filter(item => storedData.includes(item.id))
        console.log(donated)
        setDonation(donated)
        console.log(donation)
    }, [])
    return (
        <div className='flex flex-col justify-center items-center'>


            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

            </PieChart>
            <div className='md:flex gap-6'>
                <div className='flex items-center gap-2'>
                    <p className='text-lg font-semibold'>Your donation</p>
                    <div className='bg-[#00C49F] w-20 h-3'></div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-lg font-semibold'>Total Donation</p>
                    <div className='bg-[#FF444A] w-20 h-3'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;