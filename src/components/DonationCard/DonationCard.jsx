import { NavLink } from "react-router-dom";


const DonationCard = ({ donation }) => {
    const { img1, title, category, text_color, card_background_color, background_color, id } = donation
    console.log(donation)
    return (
        <div>
            <NavLink to={`/details/${id}`}>
                <div className="rounded-lg" style={{ backgroundColor: card_background_color }}>
                    <img src={img1} alt="" />
                    <div className="p-4">
                        <div className="rounded-md inline-block px-2 py-1 my-2" style={{ backgroundColor: background_color }}>
                            <p className="font-medium" style={{ color: text_color }}>{category}</p>
                        </div>
                        <h2 className="text-xl font-semibold" style={{ color: text_color }}>{title}</h2>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default DonationCard;