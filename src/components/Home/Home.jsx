

const Home = () => {
    return (
        <div className="h-[50vh] flex items-center justify-center" >
            {/* <div className="max-w-6xl mx-auto" style={{backgroundImage: 'url(https://i.ibb.co/jRy3XVT/back-ground.jpg)'}}>
                <h1 className="text-center text-5xl font-bold"></h1>
                <div className="flex justify-center mt-10">
                <input className="border w-80 px-4 py-2 rounded-l-lg" placeholder="Search Here..." type="text" />
                <button className="bg-red-500 text-white px-5 rounded-r-lg">Search</button>
                </div>
            </div> */}


            <div className="hero min-h-screen z-10" style={{ backgroundImage: 'url(https://i.ibb.co/jRy3XVT/back-ground.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="">
                        <h1 className="mb-5 text-5xl text-black font-bold z-20">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center mt-10">
                            <input className="border w-80 px-4 py-2 rounded-l-lg" placeholder="Search Here..." type="text" />
                            <button className="bg-red-500 text-white px-5 rounded-r-lg">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;