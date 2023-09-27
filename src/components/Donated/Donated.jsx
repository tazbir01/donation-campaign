

const Donated = ({ donate }) => {
    const { img1, title, price, category, background_color, card_background_color, text_color } = donate
    return (
        <div className="md:flex items-center rounded-lg" style={{ backgroundColor: card_background_color }}>
            <div className="flex justify-center">
                <img className=" md:rounded-l-lg" src={img1} alt="" />
            </div>
            <div className="px-6">
                <div className="rounded-lg inline-block px-2 py-1" style={{ backgroundColor: background_color }}>
                    <p className="text-center font-semibold" style={{ color: text_color }}>{category}</p>
                </div>
                <h2 className="mt-2 text-2xl font-semibold">{title}</h2>
                <p className="mb-3 font-semibold" style={{ color: text_color }}>${price.toFixed(2)}</p>
                <button className="text-white font-semibold rounded-md px-3 py-1" style={{ backgroundColor: text_color }}>View Details</button>
            </div>

        </div>
    );
};

export default Donated;