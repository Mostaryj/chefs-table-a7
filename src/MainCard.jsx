
const MainCard = ({ card }) => {
    console.log(card);
    return (
        <div className="container mx-auto">
            <div className="w-2/3">
                <div className="card w-96 bg-base-100 shadow-xl border-2">
                    <figure><img className="p-4" src={card.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{card.name}</h2>
                        <p>{card.description}</p>
                        <hr />
                        <h2>Ingredients:{card.ingredients.length}</h2>
                        <ul>
                            <li>{card.ingredients.slice(0, 1)}</li>
                            <li>{card.ingredients.slice(1, 2)}</li>
                            <li>{card.ingredients.slice(3, 4)}</li>

                        </ul>
                        <hr />
                        <div className="flex justify-between">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <p>{card.preparing_time}</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                                </svg>

                            </div>
                            <p>{card.calories}</p>
                        </div>
                        <div className="card-actions ">
                            <button className="btn rounded-3xl bg-green-500 font-bold">Want to Cook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCard;