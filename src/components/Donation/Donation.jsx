import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationData } from "../Utility/LocalStorage"
import Donated from "../Donated/Donated";



const Donation = () => {
    const donations = useLoaderData()
    const [donation, setDonation] = useState([])
    const [donationsLength, setDonationsLength] = useState(4)

    useEffect(() => {
        const storedDonationIds = getDonationData()

        if (donations.length > 0) {
            const donated = donations.filter(donation => storedDonationIds.includes(donation.id))
            setDonation(donated)
            console.log(donated)
        }
    }, [donations])


    return (
        <div className=" max-w-6xl mx-auto my-20">

            <div className="grid md:grid-cols-2 gap-6 mx-7">
                {
                    donation.slice(0,donationsLength).map(item => <Donated key={item.id} donate={item}></Donated>)
                }
            </div>
            <div className={donationsLength === donation.length ? "hidden" : "flex justify-center mt-10"}>
                <button onClick={()=>setDonationsLength(donation.length)} className="text-white font-medium bg-green-700 rounded-lg px-5 py-2">See All</button>
            </div>
        </div>
    );
};

export default Donation;