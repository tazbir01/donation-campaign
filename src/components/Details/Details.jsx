import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const donations = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    console.log(idInt)

    const donation = donations.find(donation => donation.id === idInt)
    console.log(donation)

    return (
        <div className="max-w-6xl mx-auto my-20 ">
            <div className="">
                <div className="" >
                <img className="" src={donation.img2} alt="" />
                </div>
                <div className="opacity-90 ">
                    <button className="text-white rounded-sm px-3 py-2" style={{backgroundColor:donation.text_color}}>Donate ${donation.price}</button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mt-14 mb-6">{donation.title}</h2>
            <p>{donation.description}</p>
        </div>
    );
};

export default Details;