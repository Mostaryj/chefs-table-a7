import banner from '../assets/images/banner.jpg'

const Header = () => {
    return (
        <div className='container mx-auto'>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>


                    </div>
                    <h3 className="font-bold text-xl">Recipe Calories</h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu font-medium menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <a className="btn rounded-3xl"> <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </span>Search</a>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 bg-green-500 rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>




                </div>
            </div>

            <div className="hero lg:h-[400px] rounded-2xl" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay rounded-2xl bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-3xl font-bold">Discover an exceptional cooking <br />class trailed for you!</h1>
                        <p className="mb-5">Get ready to roll up your sleeves, sharpen your knives, and dive into the world of cooking with our expert instructors guiding the way. <br />Spice up your kitchen routine and join our community of food enthusiasts in our upcoming cooking class.</p>
                        <button className="btn bg-green-500 rounded-3xl border-none">Explore Now</button>
                        <button className="ml-8 btn bg-transparent text-white rounded-3xl ">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;