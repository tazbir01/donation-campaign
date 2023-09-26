import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {saveDonationData} from '../Utility/LocalStorage'


const Details = () => {
    const donations = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    console.log(idInt)

    const donation = donations.find(donation => donation.id === idInt)
    console.log(donation)

    const notify =()=> {
        toast('You Have Donated Successfully')
        saveDonationData(idInt)
    }

    return (
        <div className="max-w-6xl mx-auto my-20 ">
            <div>
                <div className="relative" >
                    <img className="rounded-lg" src={donation.img2} alt="" />
                    <div className="bg-black opacity-80 p-10 rounded-b-lg absolute bottom-0 w-full">
                        <button onClick={notify} className="text-white rounded-sm px-3 py-2" style={{ backgroundColor: donation.text_color }}>Donate ${donation.price}</button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-4xl font-bold mt-14 mb-6">{donation.title}</h2>
                <p>{donation.description}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Details;