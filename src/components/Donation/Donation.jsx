import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationData } from "../Utility/LocalStorage"
import Donated from "../Donated/Donated";



const Donation = () => {
    const donations = useLoaderData()
    const [donation, setDonation] = useState([])

    useEffect(() => {
        const storedDonationIds = getDonationData()
        
        if(donations.length > 0){
            const donated = donations.filter(donation => storedDonationIds.includes(donation.id))
            setDonation(donated)
            console.log(donated)
        }
    }, [donations])


    return (
        <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-6 mt-20">
            {
                donation.map(item => <Donated key={item.id} donate={item}></Donated>)
            }
        </div>
    );
};

export default Donation;