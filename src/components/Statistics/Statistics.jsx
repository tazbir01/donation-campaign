// import React, { PureComponent } from 'react';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, } from 'recharts';

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
    const [dataInParcent, setDataInParcent] = useState([])

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('donations'))

        if (!storedData || storedData.length === 0) {
            const data1 = [
                { name: "remaining", value: 100 },
                { name: "donated", value: 0 }
            ]
            setDataInParcent(data1)
        } else {
            const donationPrice = donations.map(item => item.price)
            const totalDonationPrice = donationPrice.reduce((x, y) => x + y, 0)
            console.log(totalDonationPrice)
            const donated = donations.filter(item => storedData.includes(item.id))

            const donatedPrice = donated.map(item => item.price)
            const totalDonatedPrice = donatedPrice.reduce((x, y) => x + y, 0)

            const donatedPriceInParcent = (totalDonatedPrice * 100) / totalDonationPrice;
            const totaldonationInParcent = 100 - donatedPriceInParcent;

            console.log(donatedPriceInParcent)
            console.log(totaldonationInParcent)
            const data = [
                { name: "remaining", value: totaldonationInParcent },
                { name: "donated", value: donatedPriceInParcent }
            ]

            setDataInParcent(data)
        }

    }, [donations])
    return (
        <div className='flex flex-col justify-center items-center'>


            <PieChart width={400} height={400}>
                <Pie
                    data={dataInParcent}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {dataInParcent.map((entry, index) => (
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