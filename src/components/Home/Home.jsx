import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";


const Home = () => {
    const [donations, setDonations] = useState([])

    useEffect(() => {
        fetch("donation.json")
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])

    return (

        <div>
            <div className="h-[50vh] flex items-center justify-center" >
                <div className="hero min-h-screen z-10" style={{ backgroundImage: 'url(https://i.ibb.co/jRy3XVT/back-ground.jpg)' }}>
                    <div className="hero-overlay bg-white bg-opacity-90"></div>
                    <div className="hero-content text-center text-neutral-content ">
                        <div className="">
                            <h1 className="mb-5 text-3xl md:text-5xl text-black font-bold z-20">I Grow By Helping People In Need</h1>
                            <div className="flex justify-center mt-10">
                                <input className="border md:w-80 px-4 py-2 rounded-l-lg" placeholder="Search Here..." type="text" />
                                <button className="bg-red-500 text-white px-5 rounded-r-lg">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:max-w-6xl md:max-w-2xl mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-56 mb-24 ">
                {
                    donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;